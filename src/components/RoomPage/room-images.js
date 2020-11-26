import React from "react"
import { Carousel } from "react-bootstrap"
import FirstRoom from "../images/firstRoom"
import SecondRoom from "../images/secondRoom"
import ThirdRoom from "../images/thirdRoom"
import FourthRoom from "../images/fourthRoom"
import styled from "styled-components"

const StyledImages = styled.div`
  border-radius: 4rem;
  box-shadow: 10px 10px 5px 2px rgba(33, 203, 243, 0.5),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  height: 500px;
  width: 100%;
  background: #21cbf3;
  @media (max-width: 768px) {
    height: 400px;
    order: 1;
  }
`

const RoomImages = ({ params }) => {
  return (
    <StyledImages>
      {params == 1 ? (
        <Carousel className="carousel-fade">
          <Carousel.Item>
            <FirstRoom image={5} />
          </Carousel.Item>
          <Carousel.Item>
            <FirstRoom image={0} />
          </Carousel.Item>
          <Carousel.Item>
            <FirstRoom image={3} />
          </Carousel.Item>
          <Carousel.Item>
            <FirstRoom image={1} />
          </Carousel.Item>
          <Carousel.Item>
            <FirstRoom image={4} />
          </Carousel.Item>
          <Carousel.Item>
            <FirstRoom image={6} />
          </Carousel.Item>
        </Carousel>
      ) : params == 2 ? (
        <Carousel className="carousel-fade">
          <Carousel.Item>
            <SecondRoom image={3} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={9} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={10} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={2} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={6} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={4} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={5} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={7} />
          </Carousel.Item>
          <Carousel.Item>
            <SecondRoom image={8} />
          </Carousel.Item>
        </Carousel>
      ) : params == 3 ? (
        <Carousel className="carousel-fade">
          <Carousel.Item>
            <ThirdRoom image={4} />
          </Carousel.Item>
          <Carousel.Item>
            <ThirdRoom image={3} />
          </Carousel.Item>
          <Carousel.Item>
            <ThirdRoom image={5} />
          </Carousel.Item>
          <Carousel.Item>
            <ThirdRoom image={6} />
          </Carousel.Item>
          <Carousel.Item>
            <ThirdRoom image={1} />
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel className="carousel-fade">
          <Carousel.Item>
            <FourthRoom image={3} />
          </Carousel.Item>
          <Carousel.Item>
            <FourthRoom image={4} />
          </Carousel.Item>
          <Carousel.Item>
            <FourthRoom image={5} />
          </Carousel.Item>
          <Carousel.Item>
            <FourthRoom image={7} />
          </Carousel.Item>
          <Carousel.Item>
            <FourthRoom image={8} />
          </Carousel.Item>
          <Carousel.Item>
            <FourthRoom image={6} />
          </Carousel.Item>
          <Carousel.Item>
            <FourthRoom image={9} />
          </Carousel.Item>
        </Carousel>
      )}
    </StyledImages>
  )
}

export default RoomImages
