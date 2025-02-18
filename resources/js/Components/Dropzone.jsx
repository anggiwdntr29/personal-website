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
                    className="h-72 w-full rounded-lg border object-cover"
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

export default FileDropzone;
