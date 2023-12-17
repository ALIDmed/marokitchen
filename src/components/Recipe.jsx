import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

export const Recipe = ({recipeImg,serves,time,ingredients,nutrition}) => {
  return (
    <div className="container">
        <NavBar />

        <div className="back-block">
            <Link className="back-link" to="/">
                <i className="fa-solid fa-arrow-left"></i>
                Back to recipes
            </Link>
        </div>
        <div className='recipe-block'>
            <h2>title</h2>
            <div className='recipe-img'>
                <img src={recipeImg}/>
            </div>
            <div className='recipe-info'>
                <div className='recipe-guidance'>
                <ul class="list-guidance">
                    <li>
                        <span>
                            <img src="" />
                        </span>
                        <span>{serves}</span>
                    </li>
                    <li>
                        <span>
                            <img src="" />
                        </span>
                        <span>{time}</span>
                    </li>
                </ul>
                </div>
            
            </div>
            <div className='recipe-ingredients'>
                <p>{ingredients}</p>
            </div>
            <div className='recipe-nutrition'>
                //laka wassi3 anadar
            </div>
        </div>

    </div>
    
  )
}
