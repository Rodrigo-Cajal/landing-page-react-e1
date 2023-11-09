import { AboutUsCards, AboutUsContainer, AboutUsDescription, AboutUsSubtitle, AboutUsWidget } from "./Styles"

export const AboutUs = () => {
    return (
        <AboutUsContainer>
      <h2>Sobre nosotros</h2>
      <AboutUsWidget>
        <AboutUsCards>
          <img
            src="../../../src/images/luka-uno.PNG"
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
            src="../../../src/images/pg-6-hotw.jpg"
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
            src="../../../src/images/tatum-denim.jpeg"
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