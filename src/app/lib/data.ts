import { sql } from "@vercel/postgres";
import { PatientForm, Patient } from "@/app/lib/definitions";

export async function fetchPatients() {
    try {
        const data = await sql<Patient>`
        SELECT
            id,
            gender,
            firstname,
            lastname,
            email,
            image_url
        FROM patients
        ORDER BY lastname ASC
        `;

        return data.rows;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all patients.');
    }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPatients(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const data = await sql<Patient>`
        SELECT
            id,
            gender,
            firstname,
            lastname,
            email,
            image_url
        FROM patients
        WHERE
            firstname ILIKE ${`%${query}%`} OR
            lastname ILIKE ${`%${query}%`} OR
            email ILIKE ${`%${query}%`}
        ORDER BY lastname ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch patients.');
    }
}

export async function fetchPatientById(id: string) {
    try {
        const data = await sql<PatientForm>`
        SELECT
            patients.id,
            patients.firstname,
            patients.lastname,
            patients.gender,
            patients.email
        FROM patients
        WHERE patients.id = ${id};
        `;

        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch patient.');
    }
}

export async function fetchPatientsPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM patients
        WHERE
            firstname ILIKE ${`%${query}%`} OR
            lastname ILIKE ${`%${query}%`} OR
            email ILIKE ${`%${query}%`}
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of patients.');
    }
}