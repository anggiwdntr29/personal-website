import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import {
    FaAngleDown,
    FaAngleUp,
    FaSignOutAlt,
    FaUser,
    FaUserCircle,
} from 'react-icons/fa';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowingNavigationDropdown(false);
            }
        }

        if (showingNavigationDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showingNavigationDropdown]);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="flex w-64 flex-col space-y-4 bg-gray-900 p-6 shadow-xl">
                <h1 className="mb-4 text-2xl font-bold text-white">
                    Dashboard
                </h1>
                <nav>
                    <div className="flex flex-col space-y-2 text-gray-300">
                        <Link
                            href={route('dashboard.index')}
                            className="rounded-md p-3 text-sm font-medium transition hover:bg-gray-700 hover:text-white"
                        >
                            Dashboard
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Navbar */}
                <nav className="flex w-full items-center justify-between border-b bg-white px-10 py-4 shadow-md">
                    <div className="text-xl font-semibold text-gray-800">
                        {header}
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    !showingNavigationDropdown,
                                )
                            }
                            className="group flex items-center space-x-4 rounded-lg p-2 transition"
                        >
                            <div>
                                <h1 className="text-md font-semibold text-gray-800">
                                    {user.name}
                                </h1>
                                <p className="text-sm text-gray-500">
                                    Administrator
                                </p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 transition group-hover:bg-gray-400">
                                <FaUser size={20} className="text-gray-800" />
                            </div>
                            {showingNavigationDropdown ? (
                                <FaAngleUp />
                            ) : (
                                <FaAngleDown />
                            )}
                        </button>
                        {showingNavigationDropdown && (
                            <div className="absolute right-0 mt-4 w-48 rounded-b-lg border bg-white">
                                <ul className="py-2">
                                    <Link
                                        href={route('profile.edit')}
                                        className="block"
                                    >
                                        <li className="flex items-center px-4 py-2 text-gray-700 transition hover:bg-gray-100">
                                            <FaUserCircle className="mr-2" />
                                            Profile
                                        </li>
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="block w-full text-left"
                                    >
                                        <li className="flex items-center px-4 py-2 text-red-600 transition hover:bg-red-100">
                                            <FaSignOutAlt className="mr-2" />
                                            Logout
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Main Content Area */}
                <main className="px-10 py-6">{children}</main>
            </div>
        </div>
    );
}
