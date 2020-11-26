import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"
import contactStyle from "./contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faAt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const StyledSection = styled.footer`
  padding: 0 0 60px 0;
  display: flex;
  align-items: center;

  h3{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
  }
  p{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2rem;
  }
  a{
    font-size: 1.2rem;
    color: rgb(40,40,40,0.9);
    font-family: 'Source Sans Pro', sans-serif;
    transition: color 0.2s;
  }
  span {
    font-weight: 700;
  }
`

const contactSection = () => (
  <div id="kontakt">
    <StyledSection>
      <div className="container">
        <div className={contactStyle.myGrid}>
          <div>
            <div>
              <h2>Skontaktuj się z nami</h2>
            </div>
            <div className={contactStyle.endingLink}>
              <h3>Godziny otwarcia:</h3>
              <p>
                pon-pt, godz. 13.00 – 20.00 <br />
                sobota, godz. 8.00 – 15.00
              </p>
            </div>

            <div className={contactStyle.endingLink}>
              <a href="tel:570570655" rel="noreferrer">
                <FontAwesomeIcon icon={faPhone} /> <span>Telefon:</span> 570 570 655
              </a>
            </div>
            <div className={contactStyle.endingLink}>
              <a href="mailto:liebner15@gmail.com" rel="noreferrer">
                <FontAwesomeIcon icon={faAt} /> <span>Email:</span> liebner15@gmail.com
              </a>
            </div>
            <div className={contactStyle.endingLink}>
              <a
                href="https://www.google.com/maps/place/Centrum+Rozwoju+Terapii/@51.2818757,17.9878702,14.52z/data=!4m8!1m2!2m1!1scentrum+rozwoju+i+terapii!3m4!1s0x47100b7fb19bbc15:0x862d812c979fe750!8m2!3d51.2895444!4d17.9940616?hl=pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Adres:</span> Solidarności
                30/1, 63-600 Kępno
              </a>
            </div>
            <div className={contactStyle.endingLink}>
              <a
                href="https://www.facebook.com/CentrumRozwojuTerapii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} /> <span>Facebook</span>
              </a>
            </div>
            <div className={contactStyle.endingLink}>
              <a
                href="https://www.instagram.com/liebner12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className={contactStyle.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19964.715653436484!2d17.9878702!3d51.2818757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47100b7fb19bbc15%3A0x862d812c979fe750!2sCentrum%20Rozwoju%20Terapii!5e0!3m2!1spl!2spl!4v1600113195342!5m2!1spl!2spl"
              frameborder="0"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              aria-hidden="false"
              tabindex="0"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </StyledSection>

    <div>
      <p className={contactStyle.ending}>© 2020 Centrum Rozwoju i Terapii</p>
    </div>
  </div>
)

export default contactSection
