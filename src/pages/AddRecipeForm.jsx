import React, { useState } from "react";
import axios from "axios";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [time, setTime] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients, instructions, time, coverImage };
    try {
      const response = await axios.post("/recipe", newRecipe);
      console.log(response.data); // New recipe created
    } catch (error) {
      console.error("Error adding recipe", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /> 
      </label> <br/>
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </label><br/>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </label><br/>
      <label>
        Time:
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label><br/>
      <label>
        Add Your Recipe Picture:
        <input
          type="file"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />
      </label><br/>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;