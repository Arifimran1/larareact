
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head } from '@inertiajs/react';

const TermsAndConditions = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Terms And Conditions
                </h2>
            }
        >
        <Head title="Terms And Conditions" />

        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <div>
                            <p>
                                Welcome to our terms and conditions page. These terms and conditions outline the rules and
                                regulations for the use of our website.
                            </p>
                            <p>
                                By accessing this website, you agree to be bound by these terms and conditions. Please do not
                                continue to use the website if you do not accept all the terms and conditions outlined here.
                            </p>
                            {/* You can add more content here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </AuthenticatedLayout>

    );
};

export default TermsAndConditions;
