import React from "react"
import { InView } from "react-intersection-observer"
import styled, { keyframes } from "styled-components"
import PersonelImages from "./images/personelImages"
import natureFun from "../images/undraw_nature_fun_n9lv.svg"
import { Carousel } from "react-bootstrap"
import FirstWave from "../images/firstWave.svg"
import SecondWave from "../images/secondWave.svg"
const animateWave = keyframes`
  0% {
    transform: scale(1,0);
  }
  100% {
    transform: scale(1,1);
  }
`
const Svg = styled.div`
  display: block;
  transform-origin: bottom;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? animateWave : "null")} 1000ms
    cubic-bezier(0.23, 1, 0.32, 1) forwards;
  position: relative;
  bottom: -2px;
`

const SvgBottom = styled.div`
  display: block;
  transform-origin: top;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? animateWave : "null")} 2000ms
    cubic-bezier(0.23, 1, 0.32, 1) forwards;
  position: relative;
  top: -2px;
`

const StyledSection = styled.section`
  background: #21cbf3;
`
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: end;
  align-items: center;
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 2rem;
  }
`
const StyledH2 = styled.h2`
  margin-bottom: 2rem;
`

const StyledCarousel = styled.div`
  width: 100%;
  padding: 1rem;
  background: #c5e3f6;
  border-radius: 4rem;
  text-align: center;
  -moz-border-radius: 4rem;
  -webkit-border-radius: 4rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.12);
  margin-bottom: 3rem;
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 100px;
    width: 100px;
    background-size: 100%, 100%;
    border-radius: 50%;
    background-image: none;
  }

  .carousel-control-next-icon:after {
    content: ">";
    font-size: 55px;
    color: #21cbf3;
    font-weight: 1000;
  }

  .carousel-control-prev-icon:after {
    content: "<";
    font-size: 55px;
    color: #21cbf3;
    font-weight: 1000;
  }
  h3 {
    font-size: 2rem;
    line-height: 1;
    color: rgba(40, 40, 40,0.9);
    font-weight: 900;
    margin: 0;
  }
`
const SliderItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  background: #eee;
  border-radius: 4rem;
  margin: 1rem;
  padding: 2rem;
  transition: transform 0.2s;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.05);
  }
`

const Placeholder = styled.div`
  height: 300px;
`


function aboutSection() {
  return (
    <div>
      <InView as="div">
        {({ inView, ref, entry }) => (
          <Svg inView={inView} ref={ref}>
            <img src={FirstWave} width="100%"></img>
          </Svg>
        )}
      </InView>
      <StyledSection id="o-nas">
        <div className="container">
          <StyledContainer>
            <div>
              <StyledH2>Zajmujemy się waszym zdrowiem!</StyledH2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <img height="300" width="300" src={natureFun}></img>
            </div>
            <StyledCarousel>
              <h3>Nasz zespół</h3>
              <Carousel indicators={false} interval={2500}>
                <Carousel.Item>
                  <SliderItem>
                    <Placeholder/>
                    <h4>Ania</h4>
                    <p>Integracja Sensoryczna</p>
                  </SliderItem>
                </Carousel.Item>
                <Carousel.Item>
                  <SliderItem>
                    <Placeholder/>
                    <h4>Marta</h4>
                    <p>Logopeda</p>
                  </SliderItem>
                </Carousel.Item>
                <Carousel.Item>
                  <SliderItem>
                    <Placeholder/>
                    <h4>Magda </h4>
                    <p>Integracja Sensoryczna</p>
                  </SliderItem>
                </Carousel.Item>
                <Carousel.Item>
                  <SliderItem>
                    <Placeholder/>
                    <h4>Patrycja</h4>
                    <p>Fizjoterapeuta</p>
                  </SliderItem>
                </Carousel.Item>
              </Carousel>
            </StyledCarousel>
          </StyledContainer>
        </div>
      </StyledSection>
      <InView as="div">
        {({ inView, ref, entry }) => (
          <SvgBottom inView={inView} ref={ref}>
            <img src={SecondWave} width="100%"></img>
          </SvgBottom>
        )}
      </InView>
    </div>
  )
}

export default aboutSection
