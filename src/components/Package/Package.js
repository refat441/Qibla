import React from 'react';
import PackageHeader from './Card/PackageHeader';
import BestPackageCard from '../PlaceholderComponents/Cards/BestPackageCard';
import OurListPackage from './Card/OurListPackage';

const Package = () => (
    <div>
        {/* Package */}
        <PackageHeader />

        {/* Best Package */}
        <BestPackageCard />
        
        {/* OurListPackage  */}
        <OurListPackage />
    </div>
);

export default Package;