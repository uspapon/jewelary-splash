import React from 'react';
import SharedTitle from '../../../components/SharedTitle/SharedTitle';


import newcollection from '../../../assets/home/new.webp';
import custom from '../../../assets/home/custom.webp';
import collection from '../../../assets/home/collection.webp';
import event from '../../../assets/home/event.webp';

const Shop = () => {
    return (
        <div>

            <div className='md:flex gap-2 mt-10 px-5 mb-10'>
                <div className="card md:w-1/2">
                    <figure className='rounded-none'><img src={newcollection} alt="New Arrivel!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New Arrivel</h2>
                        <p>Our team of professional buyers hand-picks the finest pieces to add to our collection. Browse our latest arrivals.</p>
                        <div className="card-actions justify-end">
                        <a className="link link-primary">Shop Now</a>
                        </div>
                    </div>
                </div>

                <div className="card md:w-1/2">
                    <figure className='rounded-none'><img src={collection} alt="collection!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Collections</h2>
                        <p>Sissy’s Collections are comprised of only the finest quality pieces. Find out what makes our selection of rings, bracelets, necklaces, men’s jewelry, and more so..</p>
                        <div className="card-actions justify-end">
                        <a className="link link-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
      
            </div> {/* end of grid */}
        </div>

    );
};

export default Shop;