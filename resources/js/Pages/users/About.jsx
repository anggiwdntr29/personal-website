import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

const About = () => {
    return (
        <GuestLayout>
            <Head title="About" />

            {/* Hero Section */}
            <section className="relative flex h-[400px] items-center justify-center bg-[url('/assets/images/bghome.jpg')] bg-cover bg-center text-white">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative z-10 text-3xl font-bold md:text-5xl">
                    About Me
                </h1>
            </section>

            {/* Profile Section */}
            <section className="container mx-auto flex flex-col items-center gap-10 px-4 py-12 md:flex-row md:gap-16 md:px-16">
                <img
                    src="/assets/images/profile.jpg"
                    alt="Profile"
                    className="h-60 w-60 rounded-lg object-cover shadow-lg md:h-80 md:w-80"
                />
                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        Who Am I?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        I am a passionate linguist and educator dedicated to
                        bilingual child language development. Currently, I teach
                        at Universitas Pendidikan Ganesha (Undiksha) and
                        contribute to academic research. My focus is on how
                        children acquire multiple languages and how education
                        can be improved for bilingual learners.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-100 px-4 py-12 md:px-16">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        My Mission
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        I strive to bridge the gap between research and practice
                        in language education.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Research
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Advancing linguistic research through academic
                                publications.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Teaching
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Educating students with an evidence-based
                                approach to language learning.
                            </p>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Community
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Engaging with the community to promote language
                                inclusivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default About;
