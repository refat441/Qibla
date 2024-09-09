import React from 'react';
import PricingHeader from './Card/PricingHeader';
import HaajEconomoyPackage from './Card/HaajEconomoyPackage';

const Pricing = () => {
    return (
        <div>
            {/* header */}
            <PricingHeader></PricingHeader>

            {/* HaajEconomoyPackage */}
            <HaajEconomoyPackage></HaajEconomoyPackage>
        </div>
    );
};

export default Pricing;