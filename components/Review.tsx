"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">Apa Tanggapan Masyarakat Wakanda</h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive} showDots>
          <ReviewCard name="Gojo Satoru" image="/images/gojo.jpg" title="Wah Pemerintah Wakanda Proses nya sangat cepat dalam Menyelenggarakan Program " />
          <ReviewCard name="Pak Vincent" image="/images/vincent.jpg" title="Proses nya sangat cepat Admin nya ramah" />
          <ReviewCard name="Budi Prasetyo" image="/images/orang.jpg" title="Proses nya sangat cepat" />
          <ReviewCard name="Jack Sparoow" image="/images/jack.jpg" title="mantap" />
        </Carousel>
      </div>
    </div>
  );
}

export default Review