const Dropdown = ({
    dropdownOpen,
    selectedOptionLabel,
    option,
    onClick,
    onSelect,
}) => {
    return (
        <div className="relative">
            <div
                onClick={onClick}
                className={`cursor-pointer border bg-gray-50 p-4 shadow-sm transition duration-200 ease-in-out hover:bg-gray-100 ${
                    dropdownOpen ? 'rounded-t-lg' : 'rounded-lg'
                }`}
            >
                <div className="flex justify-between">
                    <span>{selectedOptionLabel}</span>
                    <svg
                        className="h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            {dropdownOpen && (
                <div className="absolute z-10 max-h-80 w-full overflow-y-auto rounded-b-lg border-b border-l border-r bg-white shadow-lg">
                    {option.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => onSelect(item)}
                            className="cursor-pointer p-6 hover:bg-gray-100"
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
