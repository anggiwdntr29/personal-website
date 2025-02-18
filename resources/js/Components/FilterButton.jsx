import { useState } from 'react';
import { IoFilter } from 'react-icons/io5';

const FilterButton = ({ categories, filters, handleCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    function capitalize(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="relative inline-block text-left">
            <div className="flex items-center gap-2">
                {/* Icon Filter */}

                {/* Custom Dropdown Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-60 items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <IoFilter
                        size={24}
                        className="cursor-pointer text-blue-600 transition-colors duration-200 hover:text-blue-700"
                    />
                    {filters.category
                        ? capitalize(filters.category)
                        : 'Select Category'}
                    <svg
                        className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180 transform' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => {
                                    handleCategoryChange({
                                        target: { value: category.value },
                                    });
                                    setIsOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterButton;
