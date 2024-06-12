import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../utils/Slider/Slider"; // Doğru dosya yolunu kullandığınızdan emin olun
import FiltersCatalog from '../utils/FiltersCatalog/FiltersCatalog'; // FiltersCatalog bileşenini içe aktarın


const Home = () => {
 

  return (<div>
    <Sliders/>
    <FiltersCatalog /> {/* FiltersCatalog bileşenini ekleyin */}

    </div>
  );
};

export default Home;