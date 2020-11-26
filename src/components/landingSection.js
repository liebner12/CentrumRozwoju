import { Link } from "gatsby"
import React from "react"
import { Carousel } from "react-bootstrap"
import styled, { keyframes } from "styled-components"
import CarouselImages from "../components/images/carouselImages"

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6rem;
  align-items: center;
  text-align: right;
  justify-content: space-between;
  padding-top: 110px;
  padding-bottom: 113px;
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    text-align: center;
    padding-bottom: 50px;
  }
`
const FirstButton = styled.button`
  border: 2px rgba(33, 203, 243, 0.9) solid;
  border-radius: 50px;
  padding: 0.6rem 1rem;

  outline: none !important;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  transition: background 0.5s ease;
  &:hover {
    background: #c5e3f6;
  }
`
const MyButton = styled.button`
  background: #21cbf3;
  margin: 0 0 1rem 1rem;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.6rem 1.5rem;
  outline: none !important;
  color: white;
  transition: background 0.5s ease;
  &:hover {
    background: #0099ff;
    color: white;
  }
  @media (max-width: 767.98px) {
    margin: 0 0.5rem 0 0.5rem;
    margin-bottom: 1rem;
  }
`
const SecondButton = styled.button`
  background: #21cbf3;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  border: none;
  margin: 0 0 1rem 1rem;
  border-radius: 1rem;
  padding: 0.6rem 1rem;
  outline: none !important;
  color: rgb(30,30,30,0.9);
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.5s ease;
  :hover {
    background: #0099ff;
  }
  @media (max-width: 767.98px) {
    margin: 0 0.5rem 0 0.5rem;
    margin-bottom: 1rem;
  }
`
const ThirdButton = styled.button`
  background: #21cbf3;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  border: none;
  margin: 0 0 1rem 1rem;
  border-radius: 1rem;
  padding: 0.6rem 1.5rem;
  outline: none !important;
  color: rgb(30,30,30,0.9);
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.5s ease;
  :hover {
    background: #0099ff;
  }
  @media (max-width: 767.98px) {
    margin: 0 0.5rem 0 0.5rem;
    margin-bottom: 1rem;
  }
`
const StyledCarousel = styled(Carousel)`
  border-radius: 4rem;
  box-shadow: 10px 10px 5px 2px rgba(33, 203, 243, 0.5),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
  @media (max-width: 767.98px) {
    order: 1;
    margin-top: 50px;
    box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086);
  }
`

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 2rem;
  }
`

const landingSection = () => (
  <div>
    <StyledSection id="strona-główna" className="container">
      <StyledCarousel className="carousel-fade">
        <Carousel.Item>
          <CarouselImages image={1} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImages image={3} />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImages image={2} />
        </Carousel.Item>
      </StyledCarousel>
      <StyledDiv>
        <h1>Centrum Rozwoju i Terapii</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <SecondButton className="btn">Aktualności!</SecondButton>
          <Link to="/#oferta">
            <SecondButton className="btn">Oferta!</SecondButton>
          </Link>
          <br />
          <Link to="/#kontakt">
            <ThirdButton className="btn">Skontaktuj się!</ThirdButton>
          </Link>
        </div>
      </StyledDiv>
    </StyledSection>
  </div>
)

export default landingSection
