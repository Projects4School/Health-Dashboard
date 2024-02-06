import Link from 'next/link';
import NavLinks from './nav-link';

export default function SideNav() {
    return (
        <div className="flex w-full flex-row items-center px-3 py-4 md:px-2">
            <div>
                icon
            </div>
            <div className="flex-1 flex justify-center gap-2">
                <NavLinks />
            </div>
        </div>
    );
}