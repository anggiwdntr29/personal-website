import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const data = [
    {
        image: '/assets/images/bghome.jpg',
        date: '24 January 2025',
        title: 'Research title Research title Research title',
    },
    {
        image: '/assets/images/bghome.jpg',
        date: '15 March 2024',
        title: 'Another research title for 2024',
    },
    {
        image: '/assets/images/bghome.jpg',
        date: '10 June 2023',
        title: 'Old research title from 2023',
    },
    {
        image: '/assets/images/bghome.jpg',
        date: '5 August 2022',
        title: 'Research title from 2022',
    },
    {
        image: '/assets/images/bghome.jpg',
        date: '5 August 2021',
        title: 'Research title from 2021',
    },
];

const CommunityBox = ({ image, date, title }) => {
    return (
        <div className="group flex flex-col rounded-lg border bg-white shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
                <img
                    className="h-48 w-full rounded-t-lg object-cover"
                    src={image}
                    alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
            </div>
            <div className="flex flex-col p-4">
                <p className="text-sm text-gray-500">{date}</p>
                <h1 className="line-clamp-1 text-lg font-semibold text-gray-900">
                    {title}
                </h1>
                <p className="mb-2 line-clamp-3 text-justify text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries...
                </p>
                <a
                    href="#"
                    className="mt-auto text-right text-blue-500 transition-colors duration-300 hover:text-blue-600"
                >
                    Read More →
                </a>
            </div>
        </div>
    );
};

const CommunityFilter = ({ years, selectedYear, setSelectedYear }) => {
    return (
        <div className="mb-6 flex flex-wrap justify-center gap-3">
            {years.map((year) => (
                <button
                    key={year}
                    className={`w-16 rounded-lg border border-blue-500 py-2 text-blue-500 transition-all duration-300 ${
                        selectedYear === year
                            ? 'bg-blue-500 text-white'
                            : 'hover:bg-blue-100'
                    }`}
                    onClick={() => setSelectedYear(year)}
                >
                    {year}
                </button>
            ))}
        </div>
    );
};

const Community = () => {
    const [selectedYear, setSelectedYear] = useState('All');

    const years = [
        'All',
        ...new Set(data.map((item) => item.date.split(' ')[2])),
    ].sort((a, b) => b - a);

    const filteredData =
        selectedYear === 'All'
            ? data
            : data.filter((item) => item.date.split(' ')[2] === selectedYear);

    return (
        <GuestLayout>
            <Head title="Community" />

            <div className="mt-10 flex justify-center px-4 sm:px-10 lg:px-60">
                <CommunityFilter
                    years={years}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
            </div>

            <section className="mb-10 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-60 xl:grid-cols-4">
                {filteredData.map((item, index) => (
                    <CommunityBox
                        key={index}
                        image={item.image}
                        date={item.date}
                        title={item.title}
                    />
                ))}
            </section>
        </GuestLayout>
    );
};

export default Community;
