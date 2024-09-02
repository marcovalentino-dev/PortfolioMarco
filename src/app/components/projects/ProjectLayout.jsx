"use client";
import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const ProjectLayout = ({ name, description, date, demoLink, images }) => {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    const handleProjectClick = () => {
        if (demoLink) {
            window.location.href = demoLink;
        } else {
            setIsCarouselOpen(true);
        }
    };

    const handleCloseCarousel = () => {
        setIsCarouselOpen(false);
    };

    return (
        <>
            <div
                onClick={handleProjectClick}
                className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg cursor-pointer"
            >
                <div className="flex items-center justify-between w-full space-x-6">
                    <h2 className="text-foreground flex-shrink-0">{name}</h2>
                    <p className="text-muted flex-1">{description}</p>
                    <p className="text-foreground flex-shrink-0">{new Date(date).toDateString()}</p>
                </div>
            </div>

            {isCarouselOpen && images && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 custom-bg">
                    <div className="fixed w-full max-w-2xl">
                        <Carousel showThumbs={false} dynamicHeight={true} className="custom-carousel">
                            {images.map((image, index) => (
                                <div key={index} className="image-container">
                                    <img src={image} alt={`${name} - ${index + 1}`} className="scaled-image" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <button
                        className="fixed top-20 left-20 text-white text-6xl"
                        onClick={handleCloseCarousel}
                    >
                        &times;
                    </button>
                </div>
            )}
        </>
    );
};

export default ProjectLayout;
