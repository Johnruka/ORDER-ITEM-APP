export const fastFoods = [
    {
      id: 1,
      name: 'Burger',
      image: "src\\assets\\burger.jpg"  ,
      price: 79.99,
      description: 'A delicious burger with all the fixings.',
    },
    {
      id: 2,
      name: 'Pizza',
      image: "src\\assets\\Pizza.jpg" ,
      price: 99.99,
      description: 'Classic pizza with your favorite toppings.',
    },
    {
      id: 3,
      name: 'Fries',
      image: "src\\assets\\fries.jpg" ,
      price: 59.99,
      description: 'Crispy golden fries served hot and fresh.',
    },
  ];
  

  // Function to return the list of fast foods
export const getFastFoods = () => {
  return fastFoods;
};