import About from "./About/About";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import OurPromise from "./OurPromise/OurPromise";
import Shop from "./Shop/Shop";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Shop></Shop>
            <About></About>
            <OurPromise></OurPromise>



        </div>
    );
};

export default Home;