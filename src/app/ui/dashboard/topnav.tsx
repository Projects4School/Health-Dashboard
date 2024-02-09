import Link from 'next/link';
import NavLinks from './nav-link';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { signOut } from '@/auth';

export default function SideNav() {
    return (
        <div className="flex w-full flex-row items-center px-3 py-4">
            <div className="px-2">
                <Link href="/" className="grayscale transition-all hover:grayscale-0">
                    <Image 
                        src={'/logo.svg'} 
                        alt="Logo"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
            </div>
            <div className="flex-1 flex justify-center px-2 gap-2">
                <NavLinks />
            </div>
            <div className="px-2">
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                >
					<button
						className={clsx(
							'flex h-[32px] justify-center gap-2 items-center bg-secondary text-gray-200 bg-opacity-0 text-opacity-70 rounded-md transition-all px-5 py-3 text-sm font-medium hover:bg-opacity-20 hover:text-opacity-100',
						)}
					>
						<PowerIcon className="w-6" />
						<p className="hidden md:block">Log-out</p>
					</button>
                </form>
            </div>
        </div>
    );
}