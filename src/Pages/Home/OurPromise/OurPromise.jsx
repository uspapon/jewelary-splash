import React from 'react';
import SharedTitle from '../../../components/SharedTitle/SharedTitle';
import signature from './../../../assets/home/bill-signature.png'

const OurPromise = () => {
    return (
        <div>
            <section className=''>
                <SharedTitle
                    subHeading={"This is what Splash! Promises you"}
                    heading={"Our Promise"}
                ></SharedTitle>
                <p className='w-5/6 mx-auto text-center text-indigo-800 text-xl italic'>Every time you walk in a Sissy’s Log Cabin, you can expect four things: exceptional service, an expansive selection, an extraordinary experience, and quality pieces. When you purchase fine jewelry, it’s more than a transaction. It’s a personal, exciting celebration, and we make sure it exceeds your expectations. From weddings to graduations to anniversaries to just-because shopping trips, we’re honored to play a part in life’s most exciting moments. We want to be your trusted jeweler for a lifetime and will treat you like an important part of the Sissy’s family every time you shop with us. If you ever experience anything less, please let me know personally at</p>
                <img  className='w-2/6 mx-auto mt-5 mb-20' src={signature} alt="Signature" />
                
            </section>
        </div>
    );
};

export default OurPromise;