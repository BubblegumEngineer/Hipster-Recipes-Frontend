import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLoaderData } from "react-router-dom";
import foodImg from "../assets/foodRecipe.jpg";
import { BsStopwatchFill } from "react-icons/bs";
import { IoHeartCircle } from "react-icons/io5";

export default function RecipeItems() {
    const allRecipes = useLoaderData(); // fetch the data from that loader
    console.log(allRecipes);
    return (
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="card">
              <Link to={`/recipe/${item._id}`}> {/* Add Link to navigate to recipe details */}
                <img src={foodImg} width="120px" height="100px" alt="Recipe Image" />
                <div className="card-body">
                  <div className="title">{item.title}</div>
                  <div className="icons">
                    <div className="timer">
                      <BsStopwatchFill />
                      {item.time} min
                    </div>
                    <IoHeartCircle />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }