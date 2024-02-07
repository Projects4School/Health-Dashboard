import { Suspense } from 'react';
import { fetchPatientsPages } from '@/app/lib/data';
import { Metadata } from 'next';
import PatientsTable from '@/app/ui/patients/table';
import { PatientsTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/patients/pagination';
import Search from '@/app/ui/search';
import { CreatePatient } from '@/app/ui/patients/buttons';
import Breadcrumbs from '@/app/ui/breadcrumbs';
 
export const metadata: Metadata = {
    title: 'Invoices | Acme Dashboard',
};
 
export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchPatientsPages(query);

    return (
        <div className="w-full">
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Patients', href: '/dashboard/patients', active: true },
                ]}
            />
            <div className="mt-4 flex items-center justify-between gap-2">
                <Search placeholder="Search patients..." />
                <CreatePatient />
            </div>
            <Suspense key={query + currentPage} fallback={<PatientsTableSkeleton />}>
                <PatientsTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}