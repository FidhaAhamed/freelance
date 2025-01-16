import { useState } from "react";
import project1Image from "../../components/fusion.jpeg";
import project2Image from "../../components/image.jpeg";
import project3Image from "../../components/sparc.jpeg";
import project4Image from "../../components/kc.jpeg";
import "./PortfolioGallery.css";

const PortfolioGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Website Design + Development",
      preview: project1Image,
      fullImage: project1Image,
      type: "website",
    },
    {
      id: 2,
      title: "Healthcare Platform",
      preview: project2Image,
      fullImage: project2Image,
      type: "software",
    },
    {
      id: 3,
      title: "Therapy Management System",
      preview: project3Image,
      fullImage: project3Image,
      type: "app",
    },
    {
      id: 3,
      title: "Therapy Management System",
      preview: project4Image,
      fullImage: project4Image,
      type: "app",
    },

  
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  return (
    <section id="design" className="section">

    <div className="mainsection max-w-[1400px] mx-auto px-4">
      {/* Designs Heading */}
      <h2 className=" design text-3xl font-bold text-gray-900 mb-8 text-center">
        DESIGNS
      </h2>
      <p className="design-subtitle">
      From concept to launch, we design digital experiences that elevate brands and create seamless user journeys
        </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project-content">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer project-card"
           
          >
            <div className="portfolio-image-container group h-full w-full">
              <div
                className="portfolio-image w-full h-full"
                style={{
                  backgroundImage: `url(${project.preview})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Full Image Overlay */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto bg-transparent">
            <img
              src={projects[selectedImageIndex].fullImage}
              alt="Full Project"
              className="w-full h-auto"
              draggable="false"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
            >
              ✕
            </button>
            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handlePrev}
            >
              ◀
            </button>
            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handleNext}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div></section>
  );
};

export default PortfolioGallery;
