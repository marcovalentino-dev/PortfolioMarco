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
                className="flex flex-col md:flex-row items-start md:items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg cursor-pointer"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full space-y-2 md:space-y-0 md:space-x-6">
                    <h2 className="text-foreground text-lg md:text-xl flex-shrink-0">{name}</h2>
                    <p className="text-muted text-sm md:text-base flex-1">{description}</p>
                    <p className="text-foreground text-sm md:text-base flex-shrink-0">{new Date(date).toDateString()}</p>
                </div>
            </div>

            {isCarouselOpen && images && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 custom-bg">
                    <div className="fixed w-full max-w-sm md:max-w-2xl">
                        <Carousel showThumbs={false} dynamicHeight={true} className="custom-carousel">
                            {images.map((image, index) => (
                                <div key={index} className="image-container">
                                    <img src={image} alt={`${name} - ${index + 1}`} className="scaled-image" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <button
                        className="fixed top-8 right-8 md:top-20 md:right-20 text-white text-4xl md:text-6xl"
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
