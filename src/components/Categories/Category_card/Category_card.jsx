import React from "react";
import { CategoryCardContainer } from "./Styles";

export const CategoryCard = ({ image, title, category }) => {
    return (
        <CategoryCardContainer>

                <img src={image} alt={category}></img>
                <h2>{title}</h2>
        </CategoryCardContainer>
    )
}