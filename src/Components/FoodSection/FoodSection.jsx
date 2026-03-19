import React, { use } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const FoodSection = ({foodDataPromise}) => {
    const foodData = use(foodDataPromise);
    const data = foodData.meals;
    console.log(data)
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-5'>
            {
                data.map((food) => <FoodCard food={food}></FoodCard>)
            }
        </div>
    );
};

export default FoodSection;