import type { Route } from "./+types/home";
import MealPlanOutline from "~/components/meal-plan-outline";
import { useState, useEffect } from "react";

export interface DayOfMeals {
  breakfast: string;
  lunch: string;
  dinner: string;
  rating: number;
  dayoftheweek: string;
}


export default function Home() {

  const [arrayOfMeals, setArrayOfMeals] = useState<DayOfMeals[]>([]);
  console.log(arrayOfMeals)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json()
        console.log("==================== result = ", result)
        setArrayOfMeals(result)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div>
        <MealPlanOutline arrayOfMeals={arrayOfMeals} />
      </div>
      <div>
        <button
          onClick={() => {
            const sorted = [...arrayOfMeals].sort((a, b) => b.rating - a.rating);
            console.log("===========", sorted)
            setArrayOfMeals(sorted);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          sort meals
        </button>
      </div>
    </div>
  );
}
