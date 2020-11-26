import { Link } from "gatsby"
import React from "react"
import Image from "./images/image"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const StyledNavbar = styled(Navbar)`
  margin: 0;
  padding: 0;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: ${({ visible }) => (visible ? 0 : "-70px")};
  transition: top 0.4s;
  @media (max-width: 767.98px) {
    top: ${({ visible, expanded }) => (expanded ? 0 : visible ? 0 : "-70px")};
  }
`
const StyledDiv = styled.div`
  margin-left: 2rem;
  @media (max-width: 767.98px) {
    margin-bottom: 20px;
    margin-left: 0px;
  }
`
const NavText = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgba(40, 40, 40, 0.8);
  :hover {
    color: #35baf6 !important;
    text-decoration: none;
    transition: color 0.2s;
  }
  @media (max-width: 767.98px) {
    font-size: 2.4rem;
  }
`

const NavToggler = styled(Navbar.Toggle)`
  border: none;
  :focus {
    outline: none;
  }
`

const NavIcons = styled.div`
  display: flex;
  margin: 4rem;
  width: 100%;
  @media (max-width: 767.98px) {
    font-size: 2.4rem;
  }
`
const NavIcon = styled(Nav.Link)`
  margin-left: 2rem;
  :hover {
    color: #35baf6 !important;
    text-decoration: none;
    transition: color 0.5s;
  }
  :first-of-type {
    margin-left: 0rem;
  }
`

const MyNav = styled(Nav)`
  @media (max-width: 767.98px) {
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScrollpos: 9999,
      visible: true,
      expanded: false,
    }
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }
  render() {
    return (
      <header>
        <StyledNavbar
          expanded={this.state.expanded}
          expand="md"
          visible={this.state.visible}
        >
          <Container>
            <StyledDiv style={{ margin: 0, padding: 0 }}>
              <Link to="/#strona-główna">
                <StyledNavbar.Brand>
                  <div style={{ width: `60px` }}>
                    <Image />
                  </div>
                </StyledNavbar.Brand>
              </Link>
            </StyledDiv>
            <NavToggler
              aria-controls="basic-navbar-nav"
              onClick={() =>
                this.setState({
                  expanded:
                    window.innerWidth <= 767.98
                      ? this.state.expanded
                        ? false
                        : "expanded"
                      : "expanded",
                })
              }
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <MyNav className="ml-auto">
                <StyledDiv>
                  <NavText
                    to="/#o-nas"
                    onClick={() =>
                      this.setState({
                        expanded:
                          window.innerWidth <= 767.98
                            ? this.state.expanded
                              ? false
                              : "expanded"
                            : "expanded",
                      })
                    }
                  >
                    O nas
                  </NavText>
                </StyledDiv>
                <StyledDiv>
                  <NavText
                    to="/#oferta"
                    onClick={() =>
                      this.setState({
                        expanded:
                          window.innerWidth <= 767.98
                            ? this.state.expanded
                              ? false
                              : "expanded"
                            : "expanded",
                      })
                    }
                  >
                    Oferta
                  </NavText>
                </StyledDiv>
                <StyledDiv>
                  <NavText
                    to="/#wyposażenie"
                    onClick={() =>
                      this.setState({
                        expanded:
                          window.innerWidth <= 767.98
                            ? this.state.expanded
                              ? false
                              : "expanded"
                            : "expanded",
                      })
                    }
                  >
                    Wyposażenie
                  </NavText>
                </StyledDiv>
                <StyledDiv>
                  <NavText
                    to="/#kontakt"
                    onClick={() =>
                      this.setState({
                        expanded:
                          window.innerWidth <= 767.98
                            ? this.state.expanded
                              ? false
                              : "expanded"
                            : "expanded",
                      })
                    }
                  >
                    Kontakt
                  </NavText>
                </StyledDiv>

                <div className={"d-block d-md-none"}>
                  <NavIcons>
                    <NavIcon>
                      <FontAwesomeIcon icon={faPhone} />
                    </NavIcon>
                    <NavIcon>
                      <FontAwesomeIcon icon={faFacebook} />
                    </NavIcon>
                    <NavIcon>
                      <FontAwesomeIcon icon={faInstagram} />
                    </NavIcon>
                  </NavIcons>
                </div>
              </MyNav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
      </header>
    )
  }
}

export default Header
