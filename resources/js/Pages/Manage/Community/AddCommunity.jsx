import { FileDropzone, ImagePreview } from '@/Components/Dropzone';
import InputField from '@/Components/InputField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const AddCommunity = () => {
    const { data, setData, processing } = useForm({
        title: '',
        desc: '',
        cover: '',
        images: [],
    });
    const fileInputRef = useRef(null);
    const coverInputRef = useRef(null);

    const handleChange = (e) => setData(e.target.name, e.target.value);

    const handleFileUpload = (e, field) => {
        const files = e.target.files;
        if (!files.length) return;

        if (field === 'cover') {
            const reader = new FileReader();
            reader.onload = () => setData('cover', reader.result);
            reader.readAsDataURL(files[0]);
        } else {
            const newImages = Array.from(files).map((file) =>
                URL.createObjectURL(file),
            );
            setData('images', [...data.images, ...newImages]);
        }
    };

    const removeImage = (index) =>
        setData(
            'images',
            data.images.filter((_, i) => i !== index),
        );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('title', data.title);
        formDataToSend.append('desc', data.desc);
        if (coverInputRef.current.files[0])
            formDataToSend.append('cover', coverInputRef.current.files[0]);
        Array.from(fileInputRef.current.files).forEach((file, index) => {
            formDataToSend.append(`images[${index}]`, file);
        });

        router.post(route('community.store'), formDataToSend, {
            forceFormData: true,
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Post created successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    router.visit(route('community.index'));
                });
            },
            onError: (errors) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to create post. Please check your input.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Errors:', errors);
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Add Community Service
                </h2>
            }
        >
            <Head title="Create Community Service" />
            <div className="">
                <h3 className="mb-4 text-center text-lg font-semibold">
                    Create Post
                </h3>
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
                            preview={data.cover}
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
                            images={data.images}
                            removeImage={removeImage}
                        />
                    </div>
                    <div className="col-span-2 flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="rounded-md bg-green-500 px-8 py-4 text-white transition hover:bg-green-600"
                            disabled={processing}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddCommunity;
