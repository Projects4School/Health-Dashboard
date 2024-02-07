import { Suspense } from 'react';
import { fetchPatientsPages } from '@/app/lib/data';
import { Metadata } from 'next';
import PatientsTable from '@/app/ui/patients/table';
import { PatientsTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/patients/pagination';
import Search from '@/app/ui/search';
 
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
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-3xl`}>Patients</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
                <Search placeholder="Search patients..." />
                {/*<CreateInvoice /> */}
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