import Link from 'next/link';
import NavLinks from './nav-link';
import Image from 'next/image';

export default function SideNav() {
    return (
        <div className="flex w-full flex-row items-center px-3 py-4">
            <div>
                icon
            </div>
            <div className="flex-1 flex justify-center px-2 gap-2">
                <NavLinks />
            </div>
        </div>
    );
}