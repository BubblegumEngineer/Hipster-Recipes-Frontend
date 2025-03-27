import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import foodImg from "../assets/foodRecipe.png";
import { BsStopwatchFill } from "react-icons/bs";
import { IoHeartCircle } from "react-icons/io5";

export default function RecipeItems() {
  const allRecipes = useLoaderData(); // fetch the data from that loader
  console.log(allRecipes);
  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={foodImg} width="120px" height="100px"></img>
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <BsStopwatchFill />
                    25 min
                  </div>
                  <IoHeartCircle />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
