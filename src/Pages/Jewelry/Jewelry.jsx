import React from 'react';

const Jewelry = ({item}) => {
    const { _id, jewelryName, jewelryImg, jewelryPrice } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[250px]' src={jewelryImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {jewelryName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>${jewelryPrice}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Jewelry;