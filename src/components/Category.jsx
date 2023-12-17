import React from 'react'
import { categories } from "../../constants/index";

export const Category = () => {
  return (
    <div>
        <h2>Categories</h2>
        <div className='category-container'>
            {categories.map((category) => {
                return (
                    <div className='category-card'>{category.name}</div>
                );
                })}
        </div>
    </div>
  )
}
