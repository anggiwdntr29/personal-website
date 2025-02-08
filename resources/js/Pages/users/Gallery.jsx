import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import Masonry from 'react-masonry-css';

const fetchedImages = [
    {
        src: 'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'gallery-photo-1',
        orientation: 'landscape',
        text: 'text',
    },
    {
        src: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
        alt: 'gallery-photo-2',
        orientation: 'portrait',
        text: 'text',
    },
    {
        src: 'assets/images/pp.jpg',
        alt: 'gallery-photo-2',
        orientation: 'portrait',
        text: 'text',
    },
    {
        src: 'assets/images/bghome.jpg',
        alt: 'gallery-photo-2',
        orientation: 'portrait',
        text: 'text',
    },
    // ... (Add the rest of the images)
];

const Gallery = () => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <GuestLayout>
            <Head title="Gallery" />
            <div className="my-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-full space-x-4"
                    columnClassName="masonry-column"
                >
                    {fetchedImages.map((image, index) => (
                        <div key={index} className="group relative mb-4">
                            <img
                                className="h-auto w-full rounded-lg object-cover object-center"
                                src={image.src}
                                alt={image.alt}
                            />
                            <div className="absolute inset-0 flex items-end justify-center bg-gray-500 bg-opacity-50 pb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="text-sm text-white">
                                    {image.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </GuestLayout>
    );
};

export default Gallery;
