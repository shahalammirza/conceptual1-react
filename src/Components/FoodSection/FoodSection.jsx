import React, { use, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import Cart from '../Cart/Cart';

const FoodSection = ({foodDataPromise}) => {
    const foodData = use(foodDataPromise);
    const data = foodData.meals;

    const [cart, setCart] = useState([]);
    const foodCart = (foodsData)=>{
        setCart([...cart, foodsData]);
    }
    return (
        <div className='container mx-auto flex gap-7'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-5 w-10/12'>
                {
                    data.map((food) => <FoodCard foodCart={foodCart}  food={food}></FoodCard>)
                }
            </div>

            <div className='w-2/12 mt-5 border-red-400'>
                <h2 className='text-2xl'>Cart</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default FoodSection;