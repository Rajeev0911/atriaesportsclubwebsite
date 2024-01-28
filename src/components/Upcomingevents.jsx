import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Upcomingevents.css";
import upcoming_events_img_1 from '../assets/images/upcoming_events_img_1.jpg'
import upcoming_events_img_2 from '../assets/images/upcoming_events_img_2.jpg'
import upcoming_events_img_3 from '../assets/images/upcoming_events_img_3.jpg'

const imageData = [
  {
    label: "Valorant LAN 2k24 (Bengaluru)",
    alt: "image1",
    url: upcoming_events_img_1
  },
  {
    label: "BGMI Inter Club- All India (Kolkata)",
    alt: "image2",
    url: upcoming_events_img_2
  },
  {
    label: "Free Fire Fall Event (Delhi)",
    alt: "image3",
    url: upcoming_events_img_3
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

const Upcomingevents = () => {

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="App">
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      selectedItem={imageData[currentIndex]}
      onChange={handleChange}
      className="carousel-container"
    >
      {renderSlides}
    </Carousel>
  </div>
  )
}

export default Upcomingevents