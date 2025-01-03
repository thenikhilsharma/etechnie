"use client";

import React, { useState, useEffect } from "react";
import "./style.css"; // Create this CSS file for styling
import Link from "next/link";
import EventCard from "@/components/EventCard";

const ImageCarousel = () => {
  const images = [
    { src: "images/image1.jpg", link: "/page1" },
    { src: "images/image2.jpg", link: "/page2" },
    { src: "images/image3.jpg", link: "/page3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("card: ", card);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetch("/api/getData");
        // console.log("data: ", data);
        setCard(await data.json());
      } catch (err) {
        console.error("Error fetching Data: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBubbleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
    { loading ? (<h1>Loading...</h1>) : (
      <>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        >
          <div className="bubbles">
            {images.map((_, index) => (
              <Link
                key={index}
                href={images[index].link}
                className={`bubble ${index === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleBubbleClick(index);
                }}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="upcoming-events mt-8 font-bold text-2xl text-gray-600">
        <div className="events-heading flex justify-center mb-5">
          <h1>UPCOMING EVENTS</h1>
        </div>
        <div className="events-card flex gap-5 p-1 overflow-scroll">
          <div className="event m-0 p-0">
            <EventCard />
          </div>
          <div className="event m-0 p-0">
            <EventCard />
          </div>
          <div className="event m-0 p-0">
            <EventCard />
          </div>
          <div className="event m-0 p-0">
            <EventCard />
          </div>
          <div className="event m-0 p-0">
            <EventCard />
          </div>
        </div>
      </div>
    </>
    )}
    </div>
  );
};

export default ImageCarousel;
