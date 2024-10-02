import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from './Sidebar'; // Make sure to adjust the path if necessary


const Layout = ({ children, header }) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                {children} {/* This will render the child components/pages */}
            </div>
        </div>
    );
};

export default Layout;
