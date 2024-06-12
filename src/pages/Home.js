import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../utils/Slider";
import "./styles.css"; // CSS dosyasını içe aktarın

const Home = () => {
  return (
    <div>
      <div className="ad-container">
        <div className="ad ad-left">
          {/* Google AdSense sol üst reklam kodu */}
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-xxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        <div className="ad ad-right">
          {/* Google AdSense sağ üst reklam kodu */}
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-xxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </div>
      <Sliders />
    </div>
  );
};

export default Home;