import { deletePatient } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreatePatient() {
    return (
        <Link
            href="/dashboard/patients/create"
            className="flex h-10 items-center rounded-xl bg-secondary px-4 text-sm font-medium transition-all hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
            <span className="hidden md:block">Create Patient</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdatePatient({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/patients/${id}/edit`}
            className="rounded-xl transition-all bg-secondary p-2 hover:bg-opacity-80"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeletePatient({ id }: { id: string }) {
  const deletePatientWithId = deletePatient.bind(null, id);
 
  	return (
		<form action={deletePatientWithId}>
			<button type="submit" className="rounded-xl border border-primary border-opacity-20 p-2 hover:bg-gray-100">
				<span className="sr-only">Delete</span>
				<TrashIcon className="w-4" />
			</button>
		</form>
  	);
}