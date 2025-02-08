import DiscoverBox from '@/Components/DiscoverBox';
import SwiperSlider from '@/Components/SwiperSlider';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import { FaOrcid } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { SiResearchgate } from 'react-icons/si';

const Home = () => {
    return (
        <GuestLayout>
            <Head title="Home" />
            <section className="relative flex h-[400px] flex-col items-center justify-center bg-[url(/assets/images/bghome.jpg)] bg-cover bg-center px-4 text-center md:h-[800px]">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

                {/* Content */}
                <div className="animate-fadeIn relative z-10">
                    <h1 className="mb-3 text-2xl font-extrabold tracking-wide text-white drop-shadow-lg md:mb-6 md:text-6xl lg:text-7xl">
                        Ni Luh Putu Sri Adnyani
                    </h1>
                    <h3 className="text-lg font-medium text-white md:text-2xl lg:text-3xl">
                        <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                            Linguistics Lecturer
                        </span>
                    </h3>
                </div>
            </section>
            <section className="flex flex-col-reverse items-center justify-between px-6 py-10 md:flex-row lg:px-60 lg:py-16">
                {/* Teks */}
                <div className="space-y-6 md:w-3/5">
                    <h1 className="text-center text-3xl font-extrabold text-gray-800 md:text-left lg:text-4xl">
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h1>
                    <p className="text-justify text-lg leading-relaxed text-gray-700 md:text-left">
                        I am an academic and researcher specializing in
                        linguistics and language education, with a primary focus
                        on bilingual child language development. Currently, I
                        teach at Universitas Pendidikan Ganesha (Undiksha) and
                        actively engage in various research projects and
                        academic publications at both national and international
                        levels.
                        <br />
                        <br />
                        My academic journey began with a Bachelor's degree in
                        English Language Education, followed by a Master’s and
                        Doctorate in Linguistics from Udayana University. I am
                        dedicated to deepening my understanding of how children
                        acquire multiple languages from an early age. Beyond
                        teaching, I contribute to the academic community by
                        publishing research that advances the field of
                        linguistics.
                    </p>

                    {/* Academic Profiles */}
                    <h1 className="text-center text-3xl font-extrabold text-gray-800 md:text-left lg:text-4xl">
                        <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                            Academic Profiles
                        </span>
                    </h1>
                    <div className="flex justify-center space-x-6 md:justify-start">
                        <a
                            className="text-gray-600 transition-transform duration-300 hover:scale-110 hover:text-blue-600"
                            href="https://scholar.google.com/citations?user=p20nXiUAAAAJ&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGoogleScholar size={36} />
                        </a>
                        <a
                            className="text-gray-600 transition-transform duration-300 hover:scale-110 hover:text-green-600"
                            href="https://www.researchgate.net/profile/Ni-Luh-Putu-Sri-Adnyani"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiResearchgate size={36} />
                        </a>
                        <a
                            className="text-gray-600 transition-transform duration-300 hover:scale-110 hover:text-orange-600"
                            href="https://orcid.org/0000-0003-2085-214X"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaOrcid size={36} />
                        </a>
                    </div>
                </div>

                {/* Gambar */}
                <div className="mb-6 flex justify-center md:mb-0 md:w-2/5">
                    <img
                        src="/assets/images/pp.jpg"
                        alt="Profile"
                        className="w-full max-w-md rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </section>

            <section className="py-10">
                <div className="relative flex flex-col items-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-center text-xl font-bold text-transparent drop-shadow-md md:text-2xl">
                        Latest Highlights
                    </h1>
                    <hr className="mb-2 h-1 w-24 rounded-full bg-blue-500" />
                    <p className="mb-4 text-center text-sm text-gray-600 md:text-base">
                        Highlights from my recent projects and events.
                    </p>
                </div>
                <SwiperSlider />
            </section>

            <section className="px-6 py-10 md:px-16 lg:px-60">
                <div className="relative flex flex-col items-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-center text-xl font-bold text-transparent drop-shadow-md md:text-2xl">
                        A Journey of Passion & Innovation
                    </h1>
                    <hr className="mb-2 h-1 w-24 rounded-full bg-blue-500" />
                    <p className="text-center text-sm text-gray-600 md:text-base">
                        Learn more about my work, experiences, and creative
                        journey.
                    </p>
                </div>
                <DiscoverBox />
            </section>
        </GuestLayout>
    );
};

export default Home;
