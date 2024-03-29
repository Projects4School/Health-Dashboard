import TopNav from '@/app/ui/dashboard/topnav';
 
export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <TopNav />
            </div>
            <main className="flex-grow h-full rounded-t-3xl p-10 pt-16 w-full bg-swhite">{children}</main>
        </div>
    );
}