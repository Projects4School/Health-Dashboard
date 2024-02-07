'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createPatient } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form() {
    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(createPatient, initialState);

    return (
        <form action={dispatch}>
            <div className="rounded-2xl bg-gray-50 p-6 grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <label htmlFor="lastname" className="mb-2 block text-sm font-medium">
                        Last name
                    </label>
                    <div className="relative mt-2 rounded-xl">
                        <input
                            id="lastname"
                            name="lastname"
                            autoComplete="family-name"
                            type="text"
                            placeholder="Enter last name"
                            className="block w-full rounded-xl border border-primary border-opacity-20 py-2 px-4 text-sm outline-secondary placeholder:text-gray-500"
                            required
                        />
                    </div>
                    <div id="lastname-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.lastname &&
                        state.errors.lastname.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="col-span-2">
                    <label htmlFor="firstname" className="mb-2 block text-sm font-medium">
                        Last name
                    </label>
                    <div className="relative mt-2 rounded-xl">
                        <input
                            id="firstname"
                            name="firstname"
                            autoComplete="given-name"
                            type="text"
                            placeholder="Enter first name"
                            className="block w-full rounded-xl border border-primary border-opacity-20 py-2 px-4 text-sm outline-secondary placeholder:text-gray-500"
                            required
                        />
                    </div>
                    <div id="firstname-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.firstname &&
                        state.errors.firstname.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="col-span-2">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-xl">
                        <input
                            id="email"
                            name="email"
                            autoComplete="email"
                            type="email"
                            placeholder="Enter email adress"
                            className="block w-full rounded-xl border border-primary border-opacity-20 py-2 px-4 text-sm outline-secondary placeholder:text-gray-500"
                            required
                        />
                    </div>
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                        state.errors.email.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                <fieldset className="col-span-2">
                    <legend className="mb-2 block text-sm font-medium">
                        Gender
                    </legend>
                    <div className="rounded-xl border border-primary border-opacity-20 bg-white py-2 px-4">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="male"
                                    name="gender"
                                    type="radio"
                                    value="male"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 outline-secondary accent-secondary ring-secondary"
                                />
                                <label
                                    htmlFor="male"
                                    className="ml-2 flex cursor-pointer items-center rounded-full bg-blue-500 px-3 py-0.5 text-xs font-medium text-white"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="female"
                                    name="gender"
                                    type="radio"
                                    value="female"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 outline-secondary accent-secondary"
                                />
                                <label
                                    htmlFor="female"
                                    className="ml-2 flex cursor-pointer items-center rounded-full bg-purple-500 px-3 py-0.5 text-xs font-medium text-white"
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="gender-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.gender &&
                        state.errors.gender.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </fieldset>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <div id="gender-error" aria-live="polite" aria-atomic="true">
                    {state?.message &&
                        <p className="mt-2 text-sm text-red-500">
                        {state.message}
                        </p>
                    }
                </div>
                <Link
                href="/dashboard/invoices"
                className="flex h-10 items-center rounded-xl bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Invoice</Button>
            </div>
        </form>
    );
}
