import { useRef } from 'react';

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
                <div className="relative w-full">
                    <img
                        src={preview}
                        alt="Preview"
                        className="h-32 w-full rounded-lg border object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-900 bg-opacity-50 opacity-0 transition hover:opacity-100">
                        <p className="text-white">Change Image</p>
                    </div>
                </div>
            ) : (
                <p className="text-sm">
                    Drag & Drop an image here or click to upload
                </p>
            )}
            <input
                required
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

const InputField = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    textarea,
}) => (
    <div className="mb-3">
        <label className="block text-sm font-medium">{label}:</label>
        {textarea ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="h-80 w-full rounded-lg border p-2"
                required
            />
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border p-2"
                required
            />
        )}
    </div>
);

const ImagePreview = ({ images, removeImage }) =>
    images.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
            {images.map((img, index) => (
                <div key={index} className="relative">
                    <img
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="h-20 w-full rounded-lg border object-cover"
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

const Modal = ({
    isOpen,
    onClose,
    onSubmit,
    formData,
    handleDrop,
    handleChange,
    setFormData,
    mode,
    handleCoverDrop,
}) => {
    const fileInputRef = useRef(null);
    const coverInputRef = useRef(null);

    if (!isOpen) return null;

    const removeImage = (index) => {
        setFormData((prev) => {
            const newImages = prev.images.filter((_, i) => i !== index);
            const newImageFiles = prev.imageFiles.filter((_, i) => i !== index);

            if (newImages.length === 0 && fileInputRef.current) {
                fileInputRef.current.value = ''; // Kosongkan input file
            }

            return {
                ...prev,
                images: newImages,
                imageFiles: newImageFiles,
            };
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-[1200px] rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-center text-lg font-semibold">
                    Create Post
                </h3>
                <form
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                    className="grid grid-cols-2 gap-6"
                >
                    {/* Bagian Input Teks */}
                    <div>
                        <InputField
                            label="Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Description"
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            textarea
                        />
                    </div>
                    {/* Bagian Input Gambar */}
                    <div>
                        <FileDropzone
                            multiple={false}
                            label="Cover"
                            onDrop={handleCoverDrop}
                            inputRef={coverInputRef}
                            preview={formData.cover}
                            onClick={() =>
                                coverInputRef.current &&
                                coverInputRef.current.click()
                            }
                        />
                        <FileDropzone
                            multiple={true}
                            label="Other Images"
                            onDrop={handleDrop}
                            inputRef={fileInputRef}
                            onClick={() => fileInputRef.current?.click()}
                        />
                        <ImagePreview
                            images={formData.images}
                            removeImage={(index) =>
                                removeImage(index, fileInputRef)
                            }
                        />
                    </div>
                    <div className="col-span-2 flex justify-end space-x-2">
                        <button
                            type="button"
                            className="rounded-md bg-gray-400 px-3 py-2 text-white transition hover:bg-gray-500"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-green-500 px-3 py-2 text-white transition hover:bg-green-600"
                        >
                            {mode === 'create' ? 'Save' : 'Update'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
