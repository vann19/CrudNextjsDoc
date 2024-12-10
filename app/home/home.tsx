import React, { useEffect } from 'react'
import HeroSection from '@/components/hero'
import Choose from '@/components/choose'
import Offer from '@/components/offer'
import Review from '@/components/Review'
import Footer from '@/components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles


const HomePage = () => {
   useEffect(() => {
     const initAOS = async () => {
       await import("aos");
       Aos.init({
         duration: 1000,
         easing: "ease",
         once: true,
         anchorPlacement: "top-bottom",
       });
     };
     initAOS();
   }, []);


  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <Choose />
      <Offer />
      <Review />
      <Footer />
    </div>
  )
}

export default HomePage