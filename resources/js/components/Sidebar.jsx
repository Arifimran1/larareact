import React from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </li>
                <li>
                    <ResponsiveNavLink
                        href='/profile'
                        active={route().current('profile.edit') || route().current('profile') }
                    >
                        Profile
                    </ResponsiveNavLink>
                </li>
                <li>
                    <ResponsiveNavLink
                        href='/terms-and-conditions'
                        active={route().current('TermsAndConditions')}
                    >
                        Terms and Conditions
                    </ResponsiveNavLink>
                </li>
                {/* Add more menu items here */}
            </ul>
        </div>
    );
};

export default Sidebar;
