import { products } from "../../../data/products"
import { ProductsCard } from "../Products_card/Products_card"
import { ProductsWidgetContainer, ProductsWidgetSection, ProductsWidgets } from "./Styles"

export const ProductsWidget = () => {
    return (
        <ProductsWidgetSection>
            <h2>Productos</h2>
            <ProductsWidgetContainer>
            <ProductsWidgets>
                {
                    products.map((item) => <ProductsCard key={item.id} {...item}/>)
                }
            </ProductsWidgets>
            </ProductsWidgetContainer>
        </ProductsWidgetSection>
    )
}