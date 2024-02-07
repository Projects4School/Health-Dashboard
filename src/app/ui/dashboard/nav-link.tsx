'use client';

import {
    ChartPieIcon,
    UsersIcon,
    RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ 
        name: 'Dashboard', 
        href: '/dashboard', 
        icon: RectangleGroupIcon 
    },
	{
		name: 'Statistics',
		href: '/dashboard/stats',
		icon: ChartPieIcon,
	},
	{ 
        name: 'Patients', 
        href: '/dashboard/patients', 
        icon: UsersIcon 
    },
];

export default function NavLinks() {
	const pathname = usePathname();
    return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[32px] justify-center gap-2 items-center bg-secondary text-gray-200 bg-opacity-0 text-opacity-70 rounded-md transition-all px-8 py-3 text-sm font-medium hover:bg-opacity-20 hover:text-opacity-100',
							{
								'bg-opacity-15 text-opacity-80': pathname === link.href,
							},
						)}
					>
						<LinkIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
    );
}
