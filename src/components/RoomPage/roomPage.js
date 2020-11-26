import React from "react"
import { Link } from "gatsby"
import RoomDetails from "./room-details"
import RoomImages from "./room-images"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChild,
  faAward,
  faHeart,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
const StyledSection = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  place-items: center;
  background: white;
  padding: 80px 0;
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
`
const Card = styled.div`
  display: grid;
  position: relative;
  place-items: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background: #21cbf3;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  color: hsla(0, 0%, 0%, 0.9);
  border: none;
  transition: background 0.5s ease;
  &:hover {
    background: #0099ff;
  }
  border-radius: 1rem;
  margin-right: 1.5rem;
  font-size: 3rem;
  color: white;

  @media (max-width: 350px) {
    height: 60px;
    width: 60px;
  }
`
const CardGrid = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
`
const MyButton = styled.button`
  background: #21cbf3;
  margin-top: 2rem;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  border: none;
  border-radius: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.6rem 1.5rem;
  outline: none !important;
  color: white;
  transition: background 0.5s ease;
  &:hover {
    background: #0099ff;
    color: white;
  }
`
class RoomPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      room: 1,
    }
  }

  componentDidMount() {
    this.setState({ room: this.props.location.state.room })
  }

  render() {
    return (
      <div>
        <div id="item-section" className="my-section">
          <StyledSection className="container">
            <div className="container">
              <RoomDetails params={this.state.room} />
              <CardGrid>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Najlepsze słoneczniki w mieście
                    </Tooltip>
                  }
                >
                  <Card>
                    <FontAwesomeIcon icon={faHeart} />
                  </Card>
                </OverlayTrigger>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Najlepsze słoneczniki w mieście
                    </Tooltip>
                  }
                >
                  <Card>
                    <FontAwesomeIcon icon={faAward} />
                  </Card>
                </OverlayTrigger>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Najlepsze słoneczniki w mieście
                    </Tooltip>
                  }
                >
                  <Card>
                    <FontAwesomeIcon icon={faChild} />
                  </Card>
                </OverlayTrigger>
              </CardGrid>

              <Link to="/#offert-section">
                <MyButton className="btn">
                  <FontAwesomeIcon icon={faArrowLeft} /> Powrót
                </MyButton>
              </Link>
            </div>
            <div className="container">
              <RoomImages params={this.state.room} />
            </div>
          </StyledSection>
        </div>
      </div>
    )
  }
}

export default RoomPage
