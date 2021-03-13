import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Navigation, Controller } from "swiper/core";
import { PhotoSwipe } from "react-photoswipe";
import { Box, IconButton, Button, Image } from "@chakra-ui/react";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiMaximize2,
} from "react-icons/fi";
import GatsbyImage from "gatsby-image";

import "swiper/swiper-bundle.css";
import "react-photoswipe/lib/photoswipe.css";

SwiperCore.use([Thumbs, Navigation, Controller]);

function AdvertCarousel({ advert }) {
  const [swiper, setSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  let zoomIndex = 0;

  const buttons = {
    variant: "ghost",
    size: "lg",
    fontSize: "4xl",
    position: "absolute",
    top: "50%",
    zIndex: "1",
    transform: "translateY(-50%)",
    colorScheme: "whatsapp",
  };

  const zoomItems = advert.zooms.map((img) => ({
    src: img.url,
    w: img.width,
    h: img.height,
  }));

  const zoomOptions = {
    index,
    closeEl: true,
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    closeOnScroll: false,
  };

  return (
    <>
      <Box bg="#e0e0e0" mt="8" position="relative">
        <Swiper
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={({ activeIndex }) => setIndex(activeIndex)}
          onSwiper={setSwiper}
        >
          {advert.images.map(({ id, childImageSharp }) => (
            <SwiperSlide
              key={id}
              onClick={() => setZoom(true)}
              style={{ cursor: "zoom-in" }}
            >
              <Image as={GatsbyImage}
                fluid={childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
                height={{ base: "250px", md: "640px" }}
                width="100%"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          colorScheme="blackAlpha"
          position="absolute"
          top="2"
          right="2"
          zIndex="1"
          rightIcon={<FiMaximize2 />}
          onClick={() => setZoom(true)}
        >
          Tam ekran
        </Button>
        <IconButton
          className="button-prev"
          icon={<FiArrowLeftCircle />}
          left={{ base: "2", xl: "-16" }}
          isDisabled={index === 0}
          {...buttons}
        />
        <IconButton
          className="button-next"
          icon={<FiArrowRightCircle />}
          right={{ base: "2", xl: "-16" }}
          isDisabled={index === advert.images.length - 1}
          {...buttons}
        />
      </Box>
      <Box mt="8">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          grabCursor
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
        >
          {advert.thumbnails.map(({ id, childImageSharp }, idx) => (
            <SwiperSlide key={id} style={{ width: "180px", height: "120px" }}>
              <Box
                border="2px solid"
                borderColor={index === idx ? "whatsapp.400" : "transparent"}
                height="120px"
              >
                <Image as={GatsbyImage}
                  fluid={childImageSharp.fluid}
                  imgStyle={{ objectFit: "cover" }}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <PhotoSwipe
        isOpen={zoom}
        items={zoomItems}
        options={zoomOptions}
        onClose={() => {
          swiper.slideTo(zoomIndex);
          setZoom(false);
        }}
        afterChange={(props) => (zoomIndex = props.getCurrentIndex())}
      />
    </>
  );
}

export default AdvertCarousel;
