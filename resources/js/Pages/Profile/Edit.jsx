import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
            }
        >
            <Head title="Profile" />

            <div className="space-y-6">
                <div className="flex gap-6">
                    <div className="w-1/2 rounded-lg bg-white p-6 shadow-md">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>
                    <div className="w-1/2 rounded-lg bg-white p-6 shadow-md">
                        <UpdatePasswordForm />
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <DeleteUserForm />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
