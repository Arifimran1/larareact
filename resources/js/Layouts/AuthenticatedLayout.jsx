import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import Topbar from '@/Components/Topbar';

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Topbar user={user} showingNavigationDropdown={showingNavigationDropdown} />

            <main>
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    
                    <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                        {header && (
                            <header className="bg-white shadow">
                                <div className="px-4 py-6 sm:px-6 lg:px-8">
                                    {header}
                                </div>
                            </header>
                        )}
                        {children} {/* This will render the child components/pages */}
                    </div>
                </div>
            </main>
        </div>
    );
}
