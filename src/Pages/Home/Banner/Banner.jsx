import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
const Banner = () => {
    return (
        <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} swipeable="true" showThumbs={false}>
            <div>
                <img src={banner1} />

            </div>
            <div>
                <img src={banner2} />

            </div>

        </Carousel>
    );

    
};

export default Banner;