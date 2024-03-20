import React from 'react';

const Cake = ({ cake }) => {
  return (
    <div>
      <h3>{cake.cakeName}</h3>
      <p>Ingredients: {cake.ingredients.join(', ')}</p>
      <p>Price: £{cake.price}</p>
      <p>Rating: {cake.rating}</p>
    </div>
  );
}

export default Cake;