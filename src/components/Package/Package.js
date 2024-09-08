import React from 'react';
import PackageHeader from './Card/PackageHeader';
import BestPackageCard from '../PlaceholderComponents/Cards/BestPackageCard';
import OurListPackage from './Card/OurListPackage';
import QablahJamaah from '../PlaceholderComponents/Cards/QablahJamaah';
import Footer from '../PlaceholderComponents/Cards/Footer';
import TravelPackage from './Card/TravelPackage';

const Package = () => (
    <div>
        {/* Package */}
        <PackageHeader />

        {/* Best Package */}
        <BestPackageCard />
        
        {/* OurListPackage  */}
        <OurListPackage />

        {/* TravelPackage */}
        <TravelPackage></TravelPackage>

        {/* QablahJamaah */}
        <QablahJamaah></QablahJamaah>

        {/* footer */}
        <Footer></Footer>
    </div>
);

export default Package;