import Image from 'next/image';
//import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { fetchFilteredPatients } from '@/app/lib/data';
import { getGender } from '@/app/lib/utils';
import { DeletePatient, UpdatePatient } from './buttons';

export default async function PatientsTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const patients = await fetchFilteredPatients(query, currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {patients?.map((patient) => (
                        <div
                            key={patient.id}
                            className="mb-2 w-full rounded-md bg-white p-4"
                        >
                            <div className="flex items-center justify-between border-b pb-4">
                                <div>
                                    <div className="mb-2 flex items-center">
                                        <Image
                                            src={patient.image_url}
                                            className="mr-2 rounded-full"
                                            width={28}
                                            height={28}
                                            alt={`${patient.firstname}'s profile picture`}
                                        />
                                        <p>{patient.lastname.toUpperCase()} {patient.firstname}</p>
                                    </div>
                                    <p className="text-sm text-gray-500">{patient.email}</p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-between pt-4">
                                <div className="flex justify-end gap-2">
                                    <UpdatePatient id={patient.id} />
                                    <DeletePatient id={patient.id} />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Image
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Lastname
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Firstname
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                Gender
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                Email
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                        {patients?.map((patient) => (
                            <tr
                                key={patient.id}
                                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                            >
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <Image
                                        src={patient.image_url}
                                        className="rounded-full"
                                        width={28}
                                        height={28}
                                        alt={`${patient.firstname}'s profile picture`}
                                    />
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {patient.lastname}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {patient.firstname}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {getGender(patient.gender)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {patient.email}
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <UpdatePatient id={patient.id} />
                                        <DeletePatient id={patient.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
