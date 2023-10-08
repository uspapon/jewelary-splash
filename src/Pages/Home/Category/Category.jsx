import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import cat from '../../../assets/category/cat.jpg';
import cat1 from '../../../assets/category/cat1.jpg';
import cat2 from '../../../assets/category/cat2.jpg';
import cat3 from '../../../assets/category/cat3.jpg';
import cat4 from '../../../assets/category/cat4.jpg';
import cat5 from '../../../assets/category/cat5.jpg';
import SharedTitle from '../../../components/SharedTitle/SharedTitle';
const Category = () => {
    return (
        <div>
            <section>
                <SharedTitle
                    subHeading={"Shop from Different Categories"}
                    heading={"Category"}
                ></SharedTitle>
            </section>
            <div className='flex'>
                <div className="card w-96">
                    <figure><img src={cat1} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 ">
                    <figure><img src={cat2} alt="Shoes" /></figure>

                </div>
                <div className="card w-96">
                    <figure><img src={cat4} alt="Shoes" /></figure>

                </div>
                <div className="card w-96 ">
                    <figure><img src={cat3} alt="Shoes" /></figure>

                </div>
            </div>

            {/* <div className='grid md:grid-cols-4'></div> */}

            {/* <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src={cat1} alt="Jewelery Category 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat2} alt="Jewelery Category 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat3} alt="Jewelery Category 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat4} alt="Jewelery Category 4" />
                </SwiperSlide>
               <SwiperSlide>
                    <img src={cat5} alt="Jewelery Category 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat} alt="Jewelery Category" />
                </SwiperSlide> 

            </Swiper> */}

        </div>
    );
};

export default Category;