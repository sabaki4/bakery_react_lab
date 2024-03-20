import React from 'react';
import Cake from '../components/Cake';

const cakes = [
  {
    cakeName: "Victoria Sponge",
    ingredients: [
      "eggs",
      "butter",
      "sugar",
      "self-raising flour",
      "baking powder",
      "milk"
    ],
    price: 5,
    rating: 5
  },
  {
    cakeName: "Tea Loaf",
    ingredients: [
      "eggs",
      "oil",
      "dried fruit",
      "sugar",
      "self-raising flour",
      "strong tea"
    ],
    price: 2,
    rating: 3
  },
  {
    cakeName: "Carrot Cake",
    ingredients: [
      "carrots",
      "walnuts",
      "oil",
      "cream cheese",
      "flour",
      "sugar"
    ],
    price: 8,
    rating: 5
  }
];

const CakeContainer = () => {
  const averageRating = cakes.reduce((acc, cake) => acc + cake.rating, 0) / cakes.length;

  return (
    <div>
      <h2>Cake List</h2>
      <p>Average Rating: {averageRating}</p>
      {cakes.map((cake, index) => (
        <Cake key={index} cake={cake} />
      ))}
    </div>
  );
}

export default CakeContainer;