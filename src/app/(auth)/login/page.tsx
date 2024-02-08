
import Image from 'next/image';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
 
export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 items-center md:-mt-32">
                <Link href="/">
                    <Image 
                        src={'/logo.svg'} 
                        alt="Logo"
                        width={64}
                        height={64}
                        priority
                    />
                </Link>

                <LoginForm />
            </div>
        </main>
    );
}