import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import moment from 'moment';
import Masonry from 'react-masonry-css';

const ViewCommunity = () => {
    const { data } = usePage().props;
    console.log(data);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 2,
        500: 1,
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    View Community Service
                </h2>
            }
        >
            <Head title="Community Service" />

            {/* Container utama */}
            <div className="">
                {/* Judul dan Gambar Utama */}
                <div className="mb-6 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">
                        {data.title}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {moment(data.created_at)
                            .locale('id')
                            .format('DD MMMM YYYY')}
                    </p>
                    <img
                        src={`/storage/images/${data.cover}`}
                        alt="Cover"
                        className="mt-4 h-[420px] w-full rounded-lg object-cover shadow-md"
                    />
                </div>

                {/* Deskripsi */}
                <p className="text-lg leading-relaxed text-gray-700">
                    {data.desc}
                </p>

                {/* Gallery Gambar */}
                <div className="my-10">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex w-full space-x-4"
                        columnClassName="masonry-column"
                    >
                        {data.images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative mb-4 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
                            >
                                <img
                                    className="h-auto w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    src={`/storage/images/${image}`}
                                    alt={'image' + index}
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ViewCommunity;
