import React from "react";
import { Button, ProductsCardContainer } from "./Styles";

export const ProductsCard = ({ name, price, image, category }) => {
    return (
        <ProductsCardContainer>
                <img src={image} alt={category} />
                <h3>{name}</h3>
                <span>${price}</span>
                <Button>Agregar al Carrito</Button>
        </ProductsCardContainer>
    )
}
