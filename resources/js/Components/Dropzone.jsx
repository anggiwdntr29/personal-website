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
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full rounded-lg border object-cover"
                />
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

const ImagePreview = ({ images, removeImage }) =>
    images.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-2">
            {images.map((img, index) => (
                <div key={index} className="relative">
                    <img
                        src={img}
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

export { FileDropzone, ImagePreview };
