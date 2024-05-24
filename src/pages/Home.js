import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 },
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div>
      {" "}
      <Slider {...settings}>
        {" "}
        <div>
          {" "}
          <a href="https://www.trendyol.com/">
            <div className="product-card">
              {" "}
              <img src="product1.jpg" alt="Ürün Resmi" />{" "}
              <h3 className="product-title">Ürün Adı</h3>{" "}
              <p className="product-price">Ürün Fiyatı</p>{" "}
            </div>
          </a>{" "}
        </div>{" "}
        <div>
          {" "}
          <a href="https://www.trendyol.com/">
            <div className="product-card">
              {" "}
              <img src="product2.jpg" alt="Ürün Resmi" />{" "}
              <h3 className="product-title">Ürün Adı</h3>{" "}
              <p className="product-price">Ürün Fiyatı</p>{" "}
            </div>
          </a>{" "}
        </div>{" "}
        <div>
          {" "}
          <a href="https://www.trendyol.com/">
            <div className="product-card">
              {" "}
              <img src="product3.jpg" alt="Ürün Resmi" />{" "}
              <h3 className="product-title">Ürün Adı</h3>{" "}
              <p className="product-price">Ürün Fiyatı</p>{" "}
            </div>
          </a>{" "}
        </div>{" "}
        <div>
          {" "}
          <a href="https://www.trendyol.com/">
            <div className="product-card">
              {" "}
              <img src="product4.jpg" alt="Ürün Resmi" />{" "}
              <h3 className="product-title">Ürün Adı</h3>{" "}
              <p className="product-price">Ürün Fiyatı</p>{" "}
            </div>
          </a>{" "}
        </div>{" "}
        <div>
          {" "}
          <a href="https://www.trendyol.com/">
            <div className="product-card">
              {" "}
              <img src="product5.jpg" alt="Ürün Resmi" />{" "}
              <h3 className="product-title">Ürün Adı</h3>{" "}
              <p className="product-price">Ürün Fiyatı</p>{" "}
            </div>
          </a>{" "}
        </div>{" "}
      </Slider>{" "}
    </div>
  );
};

export default Home;
