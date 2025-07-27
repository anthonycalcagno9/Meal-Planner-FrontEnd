import React from "react";
import type { DayOfMeals } from "~/routes/home";

interface MealPlanOutlineProps {
  arrayOfMeals: DayOfMeals[];
}

// Define a functional component named MyComponent
function MealPlanOutline(props: MealPlanOutlineProps) {

  return (
<div>
    <div className="grid grid-cols-3 grid-rows-2 gap-2 p-4">
      {props.arrayOfMeals.map(meal => (<div className="bg-gray-200 p-4 text-center text-black">{meal.dayoftheweek}</div>))}
      {props.arrayOfMeals.map(meal => (<div className="bg-gray-200 p-4 text-center text-black">{meal.breakfast}</div>))}
      {props.arrayOfMeals.map(meal => (<div className="bg-gray-200 p-4 text-center text-black">{meal.lunch}</div>))}
      {props.arrayOfMeals.map(meal => (<div className="bg-gray-200 p-4 text-center text-black">{meal.dinner}</div>))}
      {props.arrayOfMeals.map(meal => (<div className="bg-gray-200 p-4 text-center text-black">{meal.rating}</div>))}

    </div>
  </div>
  );
}

// Export the component for use in other files
export default MealPlanOutline;
