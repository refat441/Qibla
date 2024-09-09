import React from 'react';
import PricingHeader from './Card/PricingHeader';
import HaajEconomoyPackage from './Card/HaajEconomoyPackage';
import TravelPackagePricing from './Card/TravelPackagePricing';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';

const Pricing = () => {
    return (
        <div>
            {/* header */}
            <PricingHeader></PricingHeader>

            {/* HaajEconomoyPackage */}
            <HaajEconomoyPackage></HaajEconomoyPackage>

            {/* TravelPackage */}
            <TravelPackagePricing></TravelPackagePricing>

            {/* UmrahPackage */}
            <UmrahPackage></UmrahPackage>
        </div>
    );
};

export default Pricing;