import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"
import RoomsImages from "./images/roomsImages"
import SquadStyle from "../components/squad.module.css"
import { InView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ThirdWave from "../images/thirdWave.svg"
import FourthWave from "../images/fourthWave.svg"

const StyledSection = styled.section`
  background: #21cbf3;
`
const StyledGrid = styled.div`
  display: flex;
  overflow-x: auto;
  flex-shrink: 0;
  padding: 2rem 0;
  justify-content: space-between;
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`
const StyledCard = styled.div`
  width: 240px;
  height: 300px;
  margin-right: 2rem;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 8px 6px -6px black;
`
const Overlay = styled.div`
  position: absolute;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  height: 251px;
  width: 100%;
  opacity: 0;
  z-index: 1000;
  transition: 0.5s ease;
  display: grid;
  place-items: center;
  text-align: center;
  &:hover {
    opacity: 1;
    background-color: rgb(20, 20, 20, 0.9);
  }
  h3 {
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 800;
  }
`
const MyBtn = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: #f0f0f0;
  transition: 0.2s ease;
  &:hover {
    background-color: #c5e3f6;
  }
  text-align: center;
  
`

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
  animation: ${({ inView }) => (inView ? animateWave : "none")} 1000ms
    cubic-bezier(0.23, 1, 0.32, 1) forwards;
  position: relative;
  bottom: -2px;
`
const SvgBottom = styled.div`
  display: block;
  transform-origin: top;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) => (inView ? animateWave : "none")} 2000ms
    cubic-bezier(0.23, 1, 0.32, 1) forwards;
  position: relative;
  top: -2px;
`
const HandPointer = styled(FontAwesomeIcon)`
  color: #21cbf3;
`

const squadSection = () => (
  <div>
    <InView as="div">
      {({ inView, ref, entry }) => (
        <Svg inView={inView} ref={ref}>
          <img src={ThirdWave} width="100%"></img>
        </Svg>
      )}
    </InView>
    <StyledSection id="wyposażenie">
      <div className="container">
        <div>
          <h2>Zobacz nasze wyposażenie</h2>
          <p>każda nasza sala jest przystosowana do waszych potrzeb!</p>
        </div>
        <div>
          <StyledGrid>
            <div>
              <StyledCard className="card bg-dark text-white">
                <Link to="/sala" state={{ room: 1 }}>
                  <Overlay className="overlay text-white">
                    <div className="container">
                      <h3 className="card-title">Sala nr 1!</h3>
                      <p className="card-text">
                        Wspinaczka górska na polkie pasmo gór jest niezwykle
                        urokliwa warto się tam udać!
                      </p>
                    </div>
                  </Overlay>
                  <RoomsImages image={3} />
                  <div className="card-body">
                    <MyBtn>
                      <span className={SquadStyle.mybtnText}>
                        Sala nr 1 <HandPointer icon={faArrowRight} />
                      </span>
                    </MyBtn>
                  </div>
                </Link>
              </StyledCard>
            </div>
            <div>
              <StyledCard className="card bg-dark text-white">
                <Link to="/sala" state={{ room: 2 }}>
                  <Overlay className={SquadStyle.overlay + " text-white"}>
                    <div className="container">
                      <h3 className="card-title">Sala nr 2!</h3>
                      <p className="card-text">
                        Cudowna przygoda w stolicy Polski, zwiedzanie
                        najpiękniejszego miasta europy wschodniej!
                      </p>
                    </div>
                  </Overlay>
                  <RoomsImages image={1} />
                  <div className="card-body">
                    <MyBtn>
                      <span className={SquadStyle.mybtnText}>
                        Sala nr 2 <HandPointer icon={faArrowRight} />
                      </span>
                    </MyBtn>
                  </div>
                </Link>
              </StyledCard>
            </div>
            <div>
              <StyledCard className="card bg-dark text-white">
                <Link to="/sala" state={{ room: 3 }}>
                  <Overlay className="overlay text-white">
                    <div className="container">
                      <h3 className="card-title">Sala nr 3!</h3>
                      <p className="card-text">
                        Najlepsze miejsce do odpoczynku, podmuch wiatru i fale
                        sprawiają, że chce się tam być!
                      </p>
                    </div>
                  </Overlay>
                  <RoomsImages image={2} />
                  <div className="card-body">
                    <MyBtn>
                      <span className={SquadStyle.mybtnText}>
                        Sala nr 3 <HandPointer icon={faArrowRight} />
                      </span>
                    </MyBtn>
                  </div>
                </Link>
              </StyledCard>
            </div>
            <div>
              <StyledCard className="card bg-dark text-white">
                <Link to="/sala" state={{ room: 4 }}>
                  <Overlay className="overlay text-white">
                    <div className="container">
                      <h3 className="card-title">Sala nr 4!</h3>
                      <p className="card-text">
                        Wspinaczka górska na polkie pasmo gór jest niezwykle
                        urokliwa warto się tam udać!
                      </p>
                    </div>
                  </Overlay>
                  <RoomsImages image={0} />
                  <div className="card-body">
                    <MyBtn>
                      <span className={SquadStyle.mybtnText}>
                        Sala nr 4 <HandPointer icon={faArrowRight} />
                      </span>
                    </MyBtn>
                  </div>
                </Link>
              </StyledCard>
            </div>
          </StyledGrid>
        </div>
      </div>
    </StyledSection>
    <InView as="div">
      {({ inView, ref, entry }) => (
        <SvgBottom inView={inView} ref={ref}>
          <img src={FourthWave} width="100%"></img>
        </SvgBottom>
      )}
    </InView>
  </div>
)

export default squadSection
