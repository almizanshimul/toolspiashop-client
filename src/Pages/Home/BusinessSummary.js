import { faDollarSign, faStar, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SummaryCard from './SummaryCard';

const BusinessSummary = () => {
    const summaries = [
        {
            id: 1,
            icon: faUsers,
            number: 100,
            sideText: '+',
            text: 'Customers'
        },
        {
            id: 2,
            icon: faDollarSign,
            number: 120,
            sideText: 'M+',
            text: 'Annual revenue'
        },
        {
            id: 3,
            icon: faStar,
            number: 33,
            sideText: 'k+',
            text: 'Reviews'
        },
        {
            id: 4,
            icon: faTools,
            number: 50,
            sideText: '+',
            text: 'Tools'
        },
    ]
    return (
        <div className='text-center py-20 bg-gray-100'>
            <h2 className='text-4xl my-8 font-bold py-6'>Business<span className='text-primary'> Summary</span></h2>
            <div className="grid grid-cols-1 gap-4 container mx-auto lg:grid-cols-4 md:grid-cols-3">
                {
                    summaries.map(summary => <SummaryCard key={summary.id} summary={summary}></SummaryCard>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;