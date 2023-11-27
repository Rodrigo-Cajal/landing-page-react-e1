import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContactoContainer, ContactoSection, FormButton, FormContainer, FormField, FormInput, FormTitle, SectionDos, SectionUno } from "./styles";


export const Contact = () => {
    return (
      <>
    <Header/>
    <ContactoSection>
      <h2>Contacto</h2>
      <ContactoContainer>
        <SectionDos>
          <h3>
            ¿Tienes preguntas sobre nuestros productos o el proceso de compra?
          </h3>
          <p>
            ¡No dudes en utilizar nuestro formulario de contacto! Estamos aquí
            para ayudarte en cada paso del camino. Nuestro equipo se compromete
            a atender tus consultas con prontitud y brindarte toda la
            información que necesitas. ¡Tu satisfacción es nuestra prioridad!
            Completa el formulario y te contactaremos en breve para resolver
            todas tus inquietudes.
          </p>
        </SectionDos>
        <SectionUno>
          <FormContainer>
            <FormTitle>Formulario de consulta</FormTitle>
            <FormField>
              <span>Nombre</span>
              <FormInput
                type="text"
                id="name"
              />
              <small></small>
            </FormField>
            <FormField>
              <span>Apellido</span>
              <FormInput
                type="text"
                id="lastName"
              />
              <small></small>
            </FormField>
            <FormField>
              <span>Email</span>
              <FormInput
                type="email"
                id="email"
              />
              <small></small>
            </FormField>
            <FormField>
              <span>Teléfono</span>
              <FormInput
                type="text"
                id="phone"
              />
              <small></small>
            </FormField>
            <FormButton type="submit" value="Enviar" />
          </FormContainer>
        </SectionUno>
      </ContactoContainer>
    </ContactoSection>

    <Footer/>
    </>
    )
  };
