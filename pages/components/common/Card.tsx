// components/common/Card.tsx
import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
