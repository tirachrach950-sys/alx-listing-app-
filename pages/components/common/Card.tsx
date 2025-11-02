import React from "react";

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

