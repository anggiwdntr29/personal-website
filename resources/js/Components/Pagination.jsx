const Pagination = ({ pagination }) => {
    return (
        <div className="mt-4 flex items-center justify-between">
            <button
                disabled={!pagination.prev_page_url}
                onClick={() =>
                    (window.location.href = pagination.prev_page_url)
                }
                className={`rounded border px-4 py-2 ${!pagination.prev_page_url ? 'cursor-not-allowed bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
                Previous
            </button>
            <span>
                Page {pagination.current_page} of {pagination.last_page}
            </span>
            <button
                disabled={!pagination.next_page_url}
                onClick={() =>
                    (window.location.href = pagination.next_page_url)
                }
                className={`rounded border px-4 py-2 ${!pagination.next_page_url ? 'cursor-not-allowed bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
