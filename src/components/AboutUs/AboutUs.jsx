import { AboutUsCards, AboutUsContainer, AboutUsDescription, AboutUsSubtitle, AboutUsWidget } from "./Styles"

export const AboutUs = () => {
    return (
        <AboutUsContainer>
      <h2>Sobre nosotros</h2>
      <AboutUsWidget>
        <AboutUsCards>
          <img
            src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/zfkfi6bmpcsob0wsp6vq.png"
            alt="Selección Curada de Alta Calidad"
          />
          <AboutUsSubtitle>Selección de Alta Calidad</AboutUsSubtitle>
          <AboutUsDescription>
            Nuestros productos están cuidadosamente seleccionados para ofrecerte
            productos de alta calidad que se ajusten a tus necesidades de juego
            y estilo.
          </AboutUsDescription>
        </AboutUsCards>
        <AboutUsCards>
          <img
            src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/v39yuyedh16auytpvcwz.jpg"
            alt="Experiencia Especializada"
          />
          <AboutUsSubtitle>Experiencia Especializada</AboutUsSubtitle>
          <AboutUsDescription>
            Cualquier detalle que necesites acorde a tus características,
            nuestros especialistas están aquí para ayudarte a tomar decisiones
            informadas.
          </AboutUsDescription>
        </AboutUsCards>
        <AboutUsCards>
          <img
            src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232049/landing-react/q2f960shs7xpbkfpwqao.jpg"
            alt="Compromiso con la Excelencia del Cliente"
          />
          <AboutUsSubtitle>Compromiso con el Cliente</AboutUsSubtitle>
          <AboutUsDescription>
            Estamos comprometidos a brindarte un servicio de alta calidad que
            refleje nuestro compromiso con los clientes apasionados por el
            baloncesto.
          </AboutUsDescription>
        </AboutUsCards>
      </AboutUsWidget>
        </AboutUsContainer>
    )
}