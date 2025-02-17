import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import axios from 'axios';
import moment from 'moment';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CommunityService = () => {
    const { data, pagination } = usePage().props;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(route('community.destroy', id))
                    .then((response) => {
                        Swal.fire('Deleted!', response.data.message, 'success');
                        router.visit(route('community.index'), {
                            preserveState: true,
                            only: ['data', 'pagination'],
                        });
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        Swal.fire(
                            'Error!',
                            error?.response?.data?.message ||
                                'Failed to delete the data',
                            'error',
                        );
                    });
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold">Community Service</h2>
            }
        >
            <Head title="Community Service" />
            <Link
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                href={route('community.add')}
            >
                Add Post
            </Link>
            <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse border bg-white shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-12 border px-4 py-2 text-center">
                                #
                            </th>
                            <th className="w-20 border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="w-24 border px-4 py-2 text-center">
                                Cover
                            </th>
                            <th className="w-32 border px-4 py-2 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="border px-4 py-2 text-center">
                                        {(pagination.from || 1) + index}
                                    </td>
                                    <td className="max-w-xs truncate border px-4 py-2">
                                        {moment(item.created_at)
                                            .locale('id')
                                            .format('DD MMMM YYYY')}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {item.title}
                                    </td>
                                    <td className="max-w-xs truncate border px-4 py-2">
                                        {item.desc}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {item.cover && (
                                            <img
                                                src={`/storage/images/${item.cover}`}
                                                alt="Cover"
                                                className="h-12 w-12 rounded object-cover"
                                            />
                                        )}
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link
                                                href={route(
                                                    'community.view',
                                                    item.id,
                                                )}
                                                className="rounded bg-green-500 p-2 text-white hover:bg-green-600"
                                            >
                                                <FaEye />
                                            </Link>
                                            <Link
                                                href={route(
                                                    'community.edit',
                                                    item.id,
                                                )}
                                                className="rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="border px-4 py-2 text-center"
                                >
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination pagination={pagination} />
        </AuthenticatedLayout>
    );
};

export default CommunityService;
