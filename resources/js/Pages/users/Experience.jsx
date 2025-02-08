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

const ExperienceBox = ({ image, date, title }) => {
    return (
        <div className="relative overflow-hidden rounded-xl border border-blue-400/50 shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
            <div className="relative">
                <img
                    className="h-48 w-full object-cover transition-all duration-300 hover:scale-110"
                    src={image}
                    alt="Background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 w-full bg-white/10 p-4 text-white backdrop-blur-md transition-all duration-300 group-hover:backdrop-blur-lg">
                <p className="text-xs font-light">{date}</p>
                <h1 className="line-clamp-1 text-lg font-semibold transition-all duration-300 group-hover:text-blue-300">
                    {title}
                </h1>
                <a
                    href="#"
                    className="mt-2 hidden text-sm font-medium text-blue-400 transition-all duration-300 hover:text-blue-500 group-hover:block"
                >
                    Read More →
                </a>
            </div>
        </div>
    );
};

const ExperienceFilter = ({ years, selectedYear, setSelectedYear }) => {
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

const Experience = () => {
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
            <Head title="Experience" />

            <div className="mt-10 flex justify-center px-6 sm:px-12 lg:px-24">
                <ExperienceFilter
                    years={years}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
            </div>

            <section className="mb-10 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-12 md:grid-cols-3 lg:grid-cols-4 lg:px-24">
                {filteredData.map((item, index) => (
                    <ExperienceBox
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

export default Experience;
