function printDishPrices(includeTax) {
    const dishes = [
      { name: 'Italian pasta', price: 9.55 },
      { name: 'Rice with veggies', price: 8.65 },
      { name: 'Chicken with potatoes', price: 15.55 },
      { name: 'Vegetarian Pizza', price: 6.45 },
    ];
  
    const taxRate = 0.20;
    const taxMessage = includeTax ? ' (incl.tax)' : '';
  
    console.log(`Prices ${includeTax ? 'with' : 'without'} 20% tax:`);
    dishes.forEach((dish) => {
      const price = includeTax ? dish.price * (1 + taxRate) : dish.price;
      console.log(`Dish: ${dish.name} Price${taxMessage}: $ ${price.toFixed(2)}`);
    });
  }
  
  printDishPrices(true);
  printDishPrices(false);