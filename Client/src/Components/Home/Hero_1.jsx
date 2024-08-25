import React, { useRef, useState } from "react";

//Import Images
import image1 from "../../assets/banner_mens.png";
import image2 from "../../assets/banner_women.png";
import image3 from "../../assets/banner_kids.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const HeroSection = () => {
  const projects = [
    {
      name: "banner 1",
      img: image1,
      link: "#",
    },
    {
      name: "banner 2",
      img: image2,
      link: "#",
    },
    {
      name: "banner 3",
      img: image3,
      link: "#",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{ delay: 7000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {projects?.map((project, i) => {
          return (
            <SwiperSlide>
              <div
                key={i}
                className=" h-fit w-full rounded-xl md:mt-40 mt-60 mx-4"
              >
                <img
                  src={project.img}
                  alt=""
                  className=" rounded-xl w-[100%] h-[40%]"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSection;
