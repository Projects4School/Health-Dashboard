'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { faker } from '@faker-js/faker';

export type State = {
    errors?: {
        firstname?: string[];
        lastname?: string[];
        gender?: string[];
        email?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    id: z.string().uuid(),
    firstname: z.string({
        required_error: 'Please enter a first name.',
    }).max(255, {
        message: 'First name must be less than 255 characters.',
    }),
    lastname: z.string({
        required_error: 'Please enter a last name.',
    }).max(255, {
        message: 'Last name must be less than 255 characters.',
    }),
    gender: z.enum(['male', 'female'], {
        invalid_type_error: 'Please select a gender.',
    }),
    email: z.string({
        required_error: 'Please enter an email address.',
    }).email({
        message: 'Please enter a valid email address.',
    })
});

const CreatePatient = FormSchema.omit({ id: true });

export async function createPatient(prevState: State, formData: FormData) {    
    const validatedFields = CreatePatient.safeParse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        gender: formData.get('gender'),
        email: formData.get('email'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Patients.',
        };
    }
    
    const { firstname, lastname, gender, email } = validatedFields.data;
    const imageurl = faker.image.avatarLegacy();
    const genderId = gender == 'male' ? 1 : 0;
    
    try {
        await sql`
            INSERT INTO patients (gender, firstname, lastname, email, image_url)
            VALUES (${genderId}, ${firstname}, ${lastname}, ${email}, ${imageurl})
            ON CONFLICT (id) DO NOTHING;
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Patient.',
        };
    }
    
    revalidatePath('/dashboard/patients');
    redirect('/dashboard/patients');
}