import InputField from '@/Components/InputField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const FileDropzone = ({
    label,
    onDrop,
    inputRef,
    preview,
    onClick,
    multiple,
}) => (
    <div className="mb-3">
        <label className="block text-sm font-medium">{label}:</label>
        <div
            className="relative mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-gray-500 hover:border-gray-400"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={onClick}
        >
            {preview ? (
                <img
                    src={
                        preview instanceof File
                            ? URL.createObjectURL(preview)
                            : `/storage/images/${preview}`
                    }
                    alt="Preview"
                    className="h-48 w-full rounded-lg border object-cover"
                />
            ) : (
                <p className="text-sm">
                    Drag & Drop an image here or click to upload
                </p>
            )}
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                className="hidden"
                onChange={onDrop}
                multiple={multiple}
            />
        </div>
    </div>
);

const ImagePreview = ({ images, removeImage }) =>
    images.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-2">
            {images.map((img, index) => (
                <div key={index} className="relative">
                    <img
                        src={
                            img instanceof File
                                ? URL.createObjectURL(img)
                                : `/storage/images/${img}`
                        }
                        alt={`Preview ${index + 1}`}
                        className="h-40 w-full rounded-lg border object-cover"
                    />
                    <button
                        type="button"
                        className="absolute right-1 top-1 rounded-full px-2 py-1 text-xs text-white"
                        onClick={() => removeImage(index)}
                    >
                        ❌
                    </button>
                </div>
            ))}
        </div>
    );

const EditCommunity = () => {
    const { data: community } = usePage().props;
    const fileInputRef = useRef(null);
    const coverInputRef = useRef(null);

    const { data, setData, processing } = useForm({
        title: community.title || '',
        desc: community.desc || '',
        cover: community.cover || null,
        images: community.images || [],
        newCover: null,
        newImages: [],
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileUpload = (e, field) => {
        const files = e.target.files;
        if (!files.length) return;

        if (field === 'cover') {
            const file = files[0];
            setData({
                ...data,
                cover: null, // Clear the old cover filename
                newCover: file, // Store the new file
            });
        } else {
            const newFiles = Array.from(files);
            setData({
                ...data,
                newImages: [...data.newImages, ...newFiles],
            });
        }
    };

    const removeImage = (index) => {
        const currentImages = [...data.images];
        currentImages.splice(index, 1);
        setData('images', currentImages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('desc', data.desc);

        if (data.newCover) {
            formData.append('cover', data.newCover);
        } else if (data.cover) {
            formData.append('existing_cover', data.cover);
        }

        // Kirim existing_images sebagai array, bukan string JSON
        data.images.forEach((image, index) => {
            formData.append(`existing_images[${index}]`, image);
        });

        // Tambahkan gambar baru
        data.newImages.forEach((image, index) => {
            formData.append(`new_images[${index}]`, image);
        });

        formData.append('_method', 'put');

        router.post(route('community.update', community.id), formData, {
            onSuccess: () => {
                Swal.fire(
                    'Success',
                    'Community updated successfully!',
                    'success',
                );
            },
            onError: (errors) => {
                Swal.fire('Error', 'Failed to update community.', 'error');
                console.error(errors);
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold">Edit Community</h2>}
        >
            <Head title="Edit Community" />
            <div className="mt-6 overflow-x-auto">
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="grid grid-cols-2 gap-6"
                >
                    <div>
                        <InputField
                            label="Title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Description"
                            name="desc"
                            value={data.desc}
                            onChange={handleChange}
                            textarea
                        />
                    </div>

                    <div>
                        <FileDropzone
                            label="Cover"
                            multiple={false}
                            onDrop={(e) => handleFileUpload(e, 'cover')}
                            inputRef={coverInputRef}
                            preview={data.newCover || data.cover}
                            onClick={() => coverInputRef.current?.click()}
                        />
                        <FileDropzone
                            label="Other Images"
                            multiple={true}
                            onDrop={(e) => handleFileUpload(e, 'images')}
                            inputRef={fileInputRef}
                            onClick={() => fileInputRef.current?.click()}
                        />
                        <ImagePreview
                            images={[...data.images, ...data.newImages]}
                            removeImage={removeImage}
                        />
                    </div>

                    <div className="col-span-2 flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="rounded-md bg-green-500 px-8 py-4 text-white transition hover:bg-green-600"
                            disabled={processing}
                        >
                            {processing ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditCommunity;
