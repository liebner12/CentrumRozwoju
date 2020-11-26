import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"

const StyledSection = styled.section`
  display: flex;
  align-items: center;
`
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 2rem;
  @media (max-width: 991.98px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const StyledCard = styled.button`
  height: 80px;
  width: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  background: #21cbf3;
  box-shadow: 10px 10px 5px 2px rgba(33, 203, 243, 0.5),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086);
  border: 5px #a1eafb solid;
  border-radius: 1rem;
  color: rgba(40, 40, 40, 0.9);
  transition: background 0.5s ease;
  outline: none !important;
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    transition: font-size 0.5s ease;
    margin: 0;
  }
  &:hover {
    background: #0099ff;
    color: white;
    text-decoration: none !important;
    h3 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 991.98px) {
    h3 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 767.98px) {
    h3 {
      font-size: 1.2rem;
    }
    &:hover {
      h3 {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 575.98px) {
    h3 {
      font-size: 1.2rem;
    }
    &:hover {
      h3 {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 350px) {
    h3 {
      font-size: 1.2rem;
    }
    &:hover {
      h3 {
        font-size: 1.5rem;
      }
    }
    height: 60px;
  }
`
const ButtonTextLink = styled(Link)`
  color: rgba(40, 40, 40, 0.8);
  :hover {
    color: #35baf6 !important;
    text-decoration: none;
    transition: color 0.2s;
  }
`

const offertSection = () => (
  <div>
    <StyledSection id="oferta">
      <div className="container">
        <h2>Specjalistyczny Gabinet Terapeutyczny:</h2>
        <StyledList>
          <ButtonTextLink to="/oferta" state={{ item: 1 }}>
            <StyledCard>
              <h3>Integracja sensoryczna</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 2 }}>
            <StyledCard>
              <h3>Biofeedback</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 3 }}>
            <StyledCard>
              <h3>Logopedia / logopedia kliniczna</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 4 }}>
            <StyledCard>
              <h3>Terapia neurotaktylna</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 5 }}>
            <StyledCard>
              <h3>Gimnastyka sportowa</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 6 }}>
            <StyledCard>
              <h3>Gimnastyka korekcyjna</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 7 }}>
            <StyledCard>
              <h3>Sensoplastyka</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 8 }}>
            <StyledCard>
              <h3>Terapia ręki</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 9 }}>
            <StyledCard>
              <h3>Socjoterapia</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 10 }}>
            <StyledCard>
              <h3>Terapia pedagogiczna</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 11 }}>
            <StyledCard>
              <h3>Masaż Shantala</h3>
            </StyledCard>
          </ButtonTextLink>
          <ButtonTextLink to="/oferta" state={{ item: 12 }}>
            <StyledCard>
              <h3>Bloki zajęć dla dzieci i młodzieży</h3>
            </StyledCard>
          </ButtonTextLink>
        </StyledList>
      </div>
    </StyledSection>
  </div>
)

export default offertSection
