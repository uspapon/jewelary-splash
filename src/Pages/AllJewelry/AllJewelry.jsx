import React, { useEffect, useState } from 'react';
import Jewelry from '../Jewelry/Jewelry';

const AllJewelry = () => {
    const [jewelry, setJewlry] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/alljewelry')
        .then(res => res.json())
        .then(data => setJewlry(data))

    },[])

    return (
        <div className='p-10'>
            
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    jewelry.map(item => <Jewelry
                                key={item._id}
                                item={item}
                    ></Jewelry>)
                }

            </div>

        </div>
    );
};

export default AllJewelry;