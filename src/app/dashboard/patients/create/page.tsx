import Form from '@/app/ui/patients/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
 
export default async function Page() {    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Patients', href: '/dashboard/patients' },
                    {
                        label: 'Create Patient',
                        href: '/dashboard/patients/create',
                        active: true,
                    },
                ]}
            />
            <Form />
        </main>
    );
}