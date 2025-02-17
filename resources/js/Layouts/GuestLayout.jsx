import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/community', label: 'Community Service' },
    { href: '/experience', label: 'Experience' },
    { href: '/committee', label: 'Committee' },
    { href: '/activity', label: 'Activity' },
    { href: '/gallery', label: 'Gallery' },
];

const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/community', label: 'Community Service' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/committee', label: 'Committee' },
    { href: '/activity', label: 'Activity' },
];

export default function GuestLayout({ children }) {
    const { url } = usePage();
    const [isMobile, setIsMobile] = useState(false);

    const toggleSideBar = () => {
        setIsMobile(!isMobile);
    };

    const closeSideBar = () => {
        setIsMobile(false);
    };

    const renderNavLink = (link) => (
        <Link
            key={link.href}
            href={link.href}
            className={`relative text-lg font-semibold text-gray-800 transition-all hover:text-blue-500 ${
                url === link.href ? 'text-blue-600 after:w-full' : 'after:w-0'
            } after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
        >
            {link.label}
        </Link>
    );

    const renderFooterLink = (link) => (
        <Link
            key={link.href}
            href={link.href}
            className="pb-2 text-lg font-semibold text-gray-300 transition-colors hover:text-white"
        >
            {link.label}
        </Link>
    );

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navbar */}
            <header className="flex items-center justify-between bg-white px-4 py-4 shadow-md md:px-12 xl:px-60">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Sri Adnyani
                    </h1>
                </Link>
                <button className="text-2xl xl:hidden" onClick={toggleSideBar}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </button>
                <nav className="hidden gap-8 xl:flex">
                    {navLinks.map(renderNavLink)}
                </nav>
            </header>

            {/* Sidebar Mobile */}
            {isMobile && (
                <div
                    className="fixed inset-0 z-50 flex bg-black bg-opacity-50"
                    onClick={closeSideBar}
                >
                    <div
                        className="relative w-64 bg-white p-2 shadow-md transition-transform duration-300 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Tambahkan flex-col agar rapi */}
                        <nav className="mt-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block w-full rounded-md px-4 py-2 text-lg font-semibold text-gray-800 transition-all hover:bg-blue-500 hover:text-white"
                                    onClick={closeSideBar}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="flex flex-col gap-4 bg-black p-4 md:grid md:grid-cols-2 md:gap-0 md:px-12 md:py-12 xl:px-60">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-white">
                        Ni Luh Putu Sri Adnyani
                    </h1>
                    <p className="pb-6 pt-2 text-base font-thin text-blue-400 underline">
                        email123@gmail.com
                    </p>

                    <form className="mt-4 flex md:w-80">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                id="search"
                                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2.5 pl-10 text-sm text-white focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Search..."
                                required
                            />
                        </div>
                    </form>
                </div>

                <div>
                    <h1 className="mb-8 text-center text-3xl font-bold text-white">
                        Site Map
                    </h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            {renderFooterLink(footerLinks[0])}
                            {renderFooterLink(footerLinks[3])}
                            {renderFooterLink(footerLinks[5])}
                        </div>
                        <div className="flex flex-col">
                            {renderFooterLink(footerLinks[1])}
                            {renderFooterLink(footerLinks[4])}
                            {renderFooterLink(footerLinks[6])}
                        </div>
                        <div className="flex flex-col">
                            {renderFooterLink(footerLinks[2])}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
