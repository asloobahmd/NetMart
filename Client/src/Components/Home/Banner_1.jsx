import React, { useRef, useState } from "react";

//Import Images
import image1 from "../../assets/banner_mens.png";
import image2 from "../../assets/banner_women.png";
import image3 from "../../assets/banner_03.jpg";
import image4 from "../../assets/banner_02.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Banner = () => {
  const projects = [
    {
      name: "banner 1",
      img: image4,
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
              <div key={i} className="h-fit w-full rounded-xl mx-auto my-3">
                <img
                  src={project.img}
                  alt=""
                  className="relative h-68 w-full rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
