import { Link } from '@inertiajs/react';
import { RiCommunityLine, RiRunLine, RiSuitcaseLine } from 'react-icons/ri';
const DiscoverBox = () => {
    return (
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
            {[
                {
                    icon: <RiCommunityLine className="text-5xl text-white" />,
                    title: 'Community Service',
                    desc: 'Join and contribute to community development.',
                    link: '/community',
                    bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
                },
                {
                    icon: <RiSuitcaseLine className="text-5xl text-white" />,
                    title: 'Experience',
                    desc: 'Gain valuable experience and improve your skills.',
                    link: '/experience',
                    bg: 'bg-gradient-to-r from-green-500 to-teal-600',
                },
                {
                    icon: <RiRunLine className="text-5xl text-white" />,
                    title: 'Activity',
                    desc: 'Engage in exciting activities and stay active.',
                    link: '/activity',
                    bg: 'bg-gradient-to-r from-purple-500 to-pink-600',
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className={`${item.bg} rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                            {item.icon}
                        </div>
                        <h1 className="text-center text-xl font-bold text-white">
                            {item.title}
                        </h1>
                        <p className="mt-2 text-center text-sm text-white/80">
                            {item.desc}
                        </p>
                        <Link
                            href={item.link}
                            className="mt-4 inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-md transition-all hover:bg-gray-200"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default DiscoverBox;
