import Banner from "./Banner";
import Personal from "./Personal";
import Rating from "./Rating";
import Review from "./Review";
import TouristPlace from "./TouristPlace";



const Home = () => {
    return (
        <div>
                 <Banner></Banner>
                 <TouristPlace></TouristPlace>
                 <Personal></Personal>
                 <Rating></Rating>
                 <Review></Review>
        
        </div>
    );
};

export default Home;