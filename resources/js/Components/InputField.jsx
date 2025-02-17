const InputField = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    textarea,
}) => (
    <div className="mb-3">
        <label className="mb-2 block text-sm font-medium">{label}:</label>
        {textarea ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="h-40 w-full rounded-lg border border-gray-400 bg-transparent p-6"
                required
            />
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-400 bg-transparent p-6"
                required
            />
        )}
    </div>
);

export default InputField;
