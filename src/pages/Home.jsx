import React from 'react'
import creamyGarlicPasta from '../assets/creamyGarlicPasta.jpg'
import RecipeItems from '../components/RecipeItems'
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    
      <section className='home'>
        <div className='left'>
          <h1>Hipster Recipes</h1>
        <h2>Quick Enjoyable and Presentable Dishes!</h2> <br/>
        <h4>Meals Made Simple...For Foodie Fanatics, by Foodie Fanatics
        Hipster Recipes founded by Tatiana Emmanuel, is all about creating a
        platform foodie creators to look and share their food options and ideas.</h4>
        <button><Link to="/addrecipeform"  >
                  Share Your Recipe
                </Link></button>
        </div>
        <div className='right'>
            <img src= {creamyGarlicPasta} width="320px" height="300px"></img>
        </div>
      </section>
      <div className='bg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L15,261.3C30,267,60,277,90,240C120,203,150,117,180,117.3C210,117,240,203,270,202.7C300,203,330,117,360,117.3C390,117,420,203,450,224C480,245,510,203,540,192C570,181,600,203,630,208C660,213,690,203,720,176C750,149,780,107,810,101.3C840,96,870,128,900,144C930,160,960,160,990,165.3C1020,171,1050,181,1080,160C1110,139,1140,85,1170,69.3C1200,53,1230,75,1260,112C1290,149,1320,203,1350,229.3C1380,256,1410,256,1425,256L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg> 
      </div>

      <div className='recipe'>
        <RecipeItems/>
      </div>
      

    </>
  )
}

export default Home

