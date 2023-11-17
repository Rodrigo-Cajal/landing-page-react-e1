import { MainButton, MainContainer, MainSectionOne, MainSectionTwo } from "./Styles"


export const Hero = () => {
  return (
      <div>
          <MainContainer>
    <MainSectionOne>
      <h1>Atlas, <span>tu mejor opción.</span></h1>
      <h2>¡Eleva tu juego con estilo y rendimiento!</h2>
      <p>
        Descubre la selección imparable de zapatillas de baloncesto en Atlas
        Basketball Shoes, donde la excelencia en calzado se encuentra con tu
        pasión por el basket.
      </p>
      <MainButton>
        <a href="/#">Ver productos</a>
      </MainButton>
    </MainSectionOne>
    <MainSectionTwo>
      <img
        src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232048/landing-react/j2fpuemjlfg6xav0cco5.png"
        alt="main-img"
      />
    </MainSectionTwo>
  </MainContainer>
      </div>
  )
}