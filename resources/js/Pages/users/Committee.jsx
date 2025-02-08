import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

const committeeData = [
    {
        role: 'Reviewer',
        event: 'Jurnal Pendas',
        year: '2024',
        description:
            'Served as a reviewer for an elementary education journal, focusing on innovative teaching methodologies.',
    },
    {
        role: 'Committee Member',
        event: 'National Education Seminar',
        year: '2023',
        description:
            'Responsible for organizing a national seminar on technology in education.',
    },
    {
        role: 'Moderator',
        event: 'Learning Innovation Workshop',
        year: '2022',
        description:
            'Moderated discussions on digital-based learning innovations.',
    },
];

const CommitteeCard = ({ role, event, year, description }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 transition-all duration-300 group-hover:w-4"></div>
            <div className="p-5 md:p-6">
                <h3 className="text-base font-semibold text-gray-800 md:text-lg">
                    {role} - {event}
                </h3>
                <p className="text-xs text-gray-500 md:text-sm">{year}</p>
                <p className="mt-2 text-sm text-gray-600 md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Committee = () => {
    return (
        <GuestLayout>
            <Head title="Committee" />

            <div className="my-10 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60">
                <div className="flex flex-col items-center text-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-lg font-bold text-transparent drop-shadow-md md:text-2xl">
                        Committee & Responsibilities
                    </h1>
                    <hr className="mt-1 h-1 w-16 rounded-full bg-blue-500 md:w-24" />
                    <p className="mt-2 text-xs text-gray-600 md:text-sm lg:text-base">
                        Professional experiences and roles during tenure at
                        Undiksha.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {committeeData.map((item, index) => (
                        <CommitteeCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Committee;
