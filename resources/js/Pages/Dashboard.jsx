import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/terms-and-conditions">View Terms and Conditions</Link>
            <div style={{ marginLeft: '250px' }}> {/* Adjust for sidebar width */}
                <Head title="Dashboard" />
                {/* <Sidebar /> */}
                <h1>Welcome to the Dashboard</h1>
                {/* Your dashboard content goes here */}
            </div>
        </AuthenticatedLayout>
    );
}
