import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import { FiLink } from 'react-icons/fi';

const educationData = [
    {
        logo: '/assets/images/logo_unud.png',
        degree: "Doctor's Degree, Linguistics",
        duration: 'September 2014 - July 2017',
        subjects: ['Bilingual', 'Second Language Acquisition', 'Linguistics'],
    },
    {
        logo: '/assets/images/logo_unud.png',
        degree: "Master's Degree, Linguistics",
        duration: 'September 2008 - August 2010',
        subjects: ['Bilingual', 'Second Language Acquisition', 'Linguistics'],
    },
    {
        logo: '/assets/images/logo_undiksha.png',
        degree: "Bachelor's Degree, English/Language Teacher Education",
        duration: 'September 1996 - February 2001',
        subjects: ['Bilingual', 'Second Language Acquisition', 'Linguistics'],
    },
];

const certifData = [
    {
        image: '/assets/images/sertif.png',
        text: 'Sertifikat 1',
        link: 'link',
    },
    {
        image: '/assets/images/sertif.png',
        text: 'Sertifikat 2',
        link: 'link',
    },
    {
        image: '/assets/images/sertif.png',
        text: 'Sertifikat 3',
        link: 'link',
    },
    {
        image: '/assets/images/sertif.png',
        text: 'Sertifikat 4',
        link: 'link',
    },
];

const EducationCard = ({ logo, degree, duration, subjects }) => {
    return (
        <div className="flex flex-col rounded-lg border bg-white shadow-lg transition-transform hover:scale-105">
            {/* Bagian Logo */}
            <div className="flex h-60 w-full items-center justify-center rounded-t-lg bg-gray-100 p-4">
                <img
                    className="h-full w-full object-contain"
                    src={logo}
                    alt="education_logo"
                />
            </div>

            {/* Bagian Konten */}
            <div className="flex flex-grow flex-col rounded-b-lg bg-blue-600 p-4 text-white">
                <h3 className="min-h-[3.5rem] break-words text-lg font-semibold">
                    {degree}
                </h3>
                <h1 className="mt-2 text-sm font-medium">{duration}</h1>
                <h3 className="mt-2 text-sm font-semibold">Subjects:</h3>
                <ul className="list-disc pl-4 text-sm">
                    {subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const OnlineCertifCard = ({ image, text, link }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
            <img
                className="h-full w-full object-cover"
                src={image}
                alt="sertif"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <a href={link} className="text-center text-white">
                    <FiLink size={30} />
                    <p className="mt-2 text-sm font-semibold">{text}</p>
                </a>
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <GuestLayout>
            <Head title="Education" />
            <section className="container mx-auto px-4 py-10 md:px-10 lg:px-20">
                <div className="relative flex flex-col items-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-center text-xl font-bold text-transparent drop-shadow-md md:text-2xl">
                        Education
                    </h1>
                    <hr className="mb-8 h-1 w-24 rounded-full bg-blue-500" />
                </div>
                <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {educationData.map((item, index) => (
                        <EducationCard key={index} {...item} />
                    ))}
                </div>

                <h1 className="mb-6 mt-12 text-center text-3xl font-bold text-gray-800">
                    Online Certification
                </h1>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {certifData.map((item, index) => (
                        <OnlineCertifCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </GuestLayout>
    );
};

export default Education;
