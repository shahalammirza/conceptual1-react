import React from 'react';

const FoodCard = ({food,foodCart}) => {
    return (
        <div className='border-2 border-red-400 rounded-2xl p-3'>
            <h1 className='text-2xl font-black pb-4'>{food.strMeal}</h1>
            <img src={food.strMealThumb} alt="" />
            <p className='py-3.5'>Food Category: {food.strCategory}</p>
            <p className='line-clamp-2'>{food.strInstructions}</p>
            <button className='btn bg-amber-500 mt-5' onClick={()=> foodCart(food)}>Add to Cart</button>
        </div>
    );
};

export default FoodCard;