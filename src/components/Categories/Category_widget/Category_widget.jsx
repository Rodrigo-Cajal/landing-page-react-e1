import { categories } from "../../../data/categories"
import { CategoryCard } from "../Category_card/Category_card"
import { CategoryCardTitle, CategoryWidgetCard, CategoryWidgetContainer } from "./Styles"

export const CategoryWidget = () => {
    return (
        <CategoryWidgetContainer>
            <CategoryCardTitle>Categorias</CategoryCardTitle>
            <CategoryWidgetCard>
                {
                    categories.map((item) => <CategoryCard key={item.id} {...item}/>)
                }
            </CategoryWidgetCard>
        </CategoryWidgetContainer>
    )
}