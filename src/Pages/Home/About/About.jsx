import team from '../../../assets/home/team.webp';

import './About.css';
import SharedTitle from '../../../components/SharedTitle/SharedTitle';

const About = () => {
    return (
        <div>
            <section>
                <SharedTitle
                    subHeading={"Shop with us and meet our amazing team"}
                    heading={"Our Team"}
                ></SharedTitle>
            </section>
            <div className='md:flex gap-2 px-5 mb-10'>
                <div className="card w-full lg:card-side about-bg">
                    <figure className='rounded-none lg:rounded-none m-5 md:m-0'><img src={team} alt="Album" /></figure>
                    <div className="card-body md:w-4/12 md:m-20 bg-white">
                        <h2 className="card-title text-3xl">Because Life's Too Short for Ordinary Jewelry</h2>
                        <p>Splash's Log Cabin is revered as one of the highest quality jewelers in the South and our customer service can’t be beat. Learn more about our history, family, and humble beginnings in Pine Bluff, Arkansas.</p>
                        <div className="card-actions justify-end">
                            <a className="link link-primary">About Splash!</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;