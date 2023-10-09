import React, { useEffect } from 'react';
import Jewelry from '../Jewelry/Jewelry';

const AllJewelry = () => {

    useEffect(() => {
        
    },[])

    return (
        <div className='p-10'>
            
            <div className='grid md:grid-cols-3 gap-5'>
                <Jewelry></Jewelry>

            </div>

        </div>
    );
};

export default AllJewelry;