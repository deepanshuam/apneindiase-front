import React from "react";
import { useNavigate } from "react-router-dom";
import pickle from "../../assets/pickle.png";
import auto from "../../assets/automobile.png";
import artitect from "../../assets/architect.png";
import ayurveda from "../../assets/ayurveda.png";
import building from "../../assets/building.png";
import b2b from "../../assets/b2b.png";
import dairy from "../../assets/dairy.png";
import dry from "../../assets/dryFruits.png";
import ev from "../../assets/solarEV.png";
import education from "../../assets/education.png";
import electronic from "../../assets/electronics.png";
import estate from "../../assets/EstateAgent.png";
import farming from "../../assets/farm.png";
import financial from "../../assets/accounting.png";
import fmc from "../../assets/grocery.png";
import gud from "../../assets/jaggery.png";
import truck from "../../assets/truck.png";
import health from "../../assets/health_nutrition.png";

const categories = [
  { name: "Achar & Murabbe", src: pickle, link: "/category/achar-murabbe" },
  { name: "Architect", src: artitect, link: "/category/architect" },
  { name: "Automobile", src: auto, link: "/category/automobile" },
  {
    name: "Ayurveda & Medicines",
    src: ayurveda,
    link: "/category/ayurveda-medicines",
  },
  {
    name: "Building Material",
    src: building,
    link: "/category/building-material",
  },
  { name: "B2B", src: b2b, link: "/category/b2b" },
  { name: "Courier Service", src: truck, link: "/category/courier-service" },
  { name: "Dairy Products", src: dairy, link: "/category/dairy-products" },
  { name: "Dry Fruits", src: dry, link: "/category/dry-fruits" },
  { name: "Education", src: education, link: "/category/education" },
  {
    name: "Electronics & Home Appliance",
    src: electronic,
    link: "/category/electronics-home-appliance",
  },
  { name: "Estate Agent", src: estate, link: "/category/estate-agent" },
  { name: "EV & Solar", src: ev, link: "/category/ev-solar" },
  {
    name: "Farming Products",
    src: farming,
    link: "/category/farming-products",
  },
  {
    name: "Financial Services",
    src: financial,
    link: "/category/financial-services",
  },
  { name: "FMCG", src: fmc, link: "/category/fmcg" },
  { name: "Gud & Shakkar", src: gud, link: "/category/gud-shakkar" },
  { name: "Health Nutrition", src: health, link: "/category/health-nutrition" },
];

const CardsGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="pl-50 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => navigate(category.link)} // This will navigate to the category details page
          >
            <div className="flex justify-center mb-4">
              <img
                src={category.src}
                alt={category.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-center text-lg font-bold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
