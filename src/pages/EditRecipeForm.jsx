import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`/recipe/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/recipe/${id}`, recipe);
      navigate(`/recipe/${id}`); // Navigate back to the recipe detail page
      if (response.status === 201) { 
        return console.log("The message sent successfully")}
      

    } catch (error) {
      console.error("Error updating recipe", error);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>Recipe Name:
      <input
        type="text"
        name="title"
        value={recipe.title}
        onChange={handleChange}
        required
      />
      </label> <br/>
       
       <label>Ingredients:
       <textarea
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        required
      />
       </label> <br/>
      
      <label>Instructions:
      <textarea
        name="instructions"
        value={recipe.instructions}
        onChange={handleChange}
        required
      />
      </label> <br/>
      
      <label>Time:
      <input
        type="text"
        name="time"
        value={recipe.time}
        onChange={handleChange}
      />
      </label> <br/>
      
      <label>Recipe Photo:
      <input
        type="file"
        name="coverImage"
        value={recipe.coverImage}
        onChange={handleChange}
      />
      </label><br/>

      <br/>
      <button type="submit">Save Changes</button>
      <br/>
      <br/>
      <button type="submit">Delete Recipe</button>


    </form>
  );
}

export default EditRecipeForm;