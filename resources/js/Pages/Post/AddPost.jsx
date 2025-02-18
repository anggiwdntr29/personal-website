import Dropdown from '@/Components/Dropdown';
import FileDropzone from '@/Components/Dropzone';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const option = [
    { value: 'community service', label: 'Community Service' },
    { value: 'experience', label: 'Experience' },
    { value: 'activity', label: 'Activity' },
    { value: 'research', label: 'Research' },
];

const AddPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        category: 'community service',
        cover: null,
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(formData.category);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const selectedOptionLabel =
        option.find((option) => option.value === selectedCategory)?.label ||
        'Choose here';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('title', formData.title);
        form.append('desc', formData.desc);
        form.append('category', formData.category);
        if (formData.cover) {
            form.append('cover', formData.cover);
        }

        router.post(route('post.store'), form, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Post has been created successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    router.visit(route('dashboard.index'));
                });
            },
            onError: (errors) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error creating the post.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.log(errors); // Tampilkan error di console jika ada
            },
        });
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectOption = (item) => {
        setSelectedCategory(item.value);
        setFormData((prev) => ({ ...prev, category: item.value }));
        setDropdownOpen(false);
    };

    const handleFileDrop = (event) => {
        event.preventDefault();
        let file = event.dataTransfer?.files[0] || event.target.files[0];

        if (file) {
            setFormData((prev) => ({ ...prev, cover: file }));

            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">
                    Create New Post
                </h2>
            }
        >
            <Head title="Create Community Service" />
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <Dropdown
                            selectedOptionLabel={selectedOptionLabel}
                            option={option}
                            dropdownOpen={dropdownOpen}
                            onClick={toggleDropdown}
                            onSelect={selectOption}
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 p-4 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            className="h-40 w-full rounded-md border border-gray-300 p-4 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div>
                    <FileDropzone
                        label="Upload Cover Image"
                        onDrop={handleFileDrop}
                        inputRef={fileInputRef}
                        preview={preview}
                        onClick={handleClick}
                        multiple={false}
                    />
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="mt-2 w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default AddPost;
