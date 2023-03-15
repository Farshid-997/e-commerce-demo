import React, { useEffect, useState } from "react";
import "./Items.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import ItemCard from "./ItemCard/ItemCard";
import electronicimg from "../../Assests/Rectangle 414.png";
import fashionimg from "../../Assests/Rectangle 414 (1).png";
import appliences from "../../Assests/Rectangle 414 (2).png";
import clothing from "../../Assests/Rectangle 414 (3).png";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
export default function Items() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // api.unive.com.bd
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <Container className="main-cont">
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="main-item-div">
            <img src={electronicimg} alt="electronic-img"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-item-div">
            <img src={fashionimg}></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-item-div">
            <img src={appliences}></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-item-div">
            <img src={clothing}></img>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="row g-4">
        {categories.map((items) => (
          <div className="col-12 col-md-3 p-4">
            <ItemCard items={items}></ItemCard>
          </div>
        ))}
      </div>
    </Container>
  );
}
