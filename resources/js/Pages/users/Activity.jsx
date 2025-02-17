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

const ActivityBox = ({ image, date, title }) => {
    return (
        <div className="relative flex flex-col rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-xl">
            <img
                className="h-40 w-full rounded-t-xl object-cover transition-all duration-300"
                src={image}
                alt="Background"
            />
            <div className="p-4">
                <p className="text-sm text-gray-500">{date}</p>
                <h1 className="line-clamp-2 text-lg font-semibold text-gray-800">
                    {title}
                </h1>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived for centuries.
                </p>
                <a
                    href="#"
                    className="mt-3 block text-end text-blue-500 hover:text-blue-700"
                >
                    Read More →
                </a>
            </div>
        </div>
    );
};
const ActivityFilter = ({ years, selectedYear, setSelectedYear }) => {
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

const Activity = () => {
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
            <Head title="Activity" />

            <div className="mt-10 flex justify-center px-6 sm:px-12 lg:px-24">
                <ActivityFilter
                    years={years}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
            </div>

            <section className="mb-10 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-12 md:grid-cols-3 lg:grid-cols-4 lg:px-60">
                {filteredData.map((item, index) => (
                    <ActivityBox
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

export default Activity;
