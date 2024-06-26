import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import banner1 from "../../banner3.png";
import banner2 from "../../valiz.png";
import banner3 from "../../odaparfüm.png";

const Sliders = () => {
  // Rastgele fotoğraf URL'leri için bir dizi oluştur
  const imageUrls = [banner1, banner2, banner3];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Otomatik geçiş süresini artırdık
    fade: true, // Geçiş efektini "fade" olarak ayarladık
    pauseOnHover: true, // Fare üzerine gelindiğinde otomatik geçişi durdur
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Fotoğraf URL'lerini kullanarak slider'a ekleyin */}
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
