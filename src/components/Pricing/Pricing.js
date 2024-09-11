import React from 'react';
import PricingHeader from './Card/PricingHeader';
import HaajEconomoyPackage from './Card/HaajEconomoyPackage';
import TravelPackagePricing from './Card/TravelPackagePricing';
import UmrahPackage from '../PlaceholderComponents/Cards/UmrahPackage';
import EssentialGuidePrice from './Card/EssentialGuidePrice';
import Footer from '../PlaceholderComponents/Cards/Footer';

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

            {/* EssentialGuidePrice */}
            <EssentialGuidePrice></EssentialGuidePrice>

            {/* footer */}
            <div className='mt-[200px] sm:mt-[300px] md:mt-[400px] lg:mt-[470px]'            >
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Pricing;