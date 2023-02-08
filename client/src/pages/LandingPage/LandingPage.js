import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";



export default function LandingPage() {



  const InfoCard = ({ iconClass, title, text }) => {

    const baseStyle = "fas fa-tachometer-alt fa-7x wow animate__animated animate__fadeIn animate__slower";

    return (
      <Card style={{ border: 'none' }}>

        <i className={`${iconClass} ${baseStyle}`} aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

        <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

          <Card.Title style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>{title}</Card.Title>

          <Card.Text style={{ paddingTop: '1px', textAlign: 'center' }}>{text}</Card.Text>

        </Card.Body>
      </Card>
    )
  }


  return (

    <>
      {/* Header  */}
      <div className="headerBgrndWhite centerHeader divHeader d-flex align-items-center">
        <Container>

          <h1 className="display-4 wow animate__animated animate__fadeIn animate__slower responsiveH1Font whited">Table<span className="redded responsiveSpanFont">Turner</span></h1>
          <h2 className=" blacked wow animate__animated animate__fadeIn animate__slower responsiveH3Font">Turn Your Tables. Quickly.</h2>

          <span className="fa wow animate__animated animate__bounce animate__delay-1s">
            <span className="fa wow animate__animated animate__fadeIn animate__slower">
              <i className="fas fa-angle-down fa-2x wow animate__animated animate_slower animate__backInUp" aria-hidden="true" />
            </span>
          </span>

        </Container>
      </div>


      {/* Hero image  */}
      <div className="heroIMAGE">
        <img className="heroHEIGHT" />
      </div>


      {/* Informational cards  */}
      <Container>
        <div className="mt-3">
          <Row>
            <Col md={6}>

              <InfoCard
                iconClass="fas fa-tachometer-alt"
                title="Expedite Order Fulfillment"
                text="Enter in order information quickly: tap or type to add menu items to your table orders. Quickly add order specifics and have your guests requests immediately viewable by the kitchen. Busy days have never been easier."
              />
            </Col>

            <Col md={6}>
              <InfoCard
                iconClass="fas fa-comment-medical"
                title="Allergy Labeling"
                text="Tag any order with a specific category to notify the kitchen beforehand of your guests allergy concerns. Each order will include this categorical label to help minimize re-fires and keep your guests happy + healthy."
              />

            </Col>
          </Row>


          <Row>
            <Col md={6}>
              <InfoCard
                iconClass="fas fa-hand-sparkles"
                title="Special Request Tracking"
                text="Help keep the communication line between front + back of house clear, with our specific requests input field. Whether it's a medium-rare steak request or the omission of cilantro, your kitchen staff will always be in the know."
              />
            </Col>
            <Col md={6}>

              <InfoCard
                iconClass="fas fa-users"
                title="Fully Integrated System"
                text="Sign up/Sign on under three positions to customize your experience: Wait Staff, Manager, or Kitchen. Each view will have access to the same data, but different capabilities in terms of: menu updating, adding + viewing tables, and viewing current orders."
              />
            </Col>
          </Row>



          <Row>
            <Col md={6}>
              <InfoCard
                iconClass="far fa-eye"
                title="View All Orders + Tables"
                text="Increase transparency by viewing all tables and each guest's orders in one place. Easily add and delete new orders on the fly or entire tables if your restaraunt layout changes. Simultaneously view allergy concerns, course numbers, and special requests."
              />
            </Col>
            <Col md={6}>
              <InfoCard
                iconClass="fas fa-search"
                title="Live Search Feature"
                text="Speed up your order adding process when receiving information from guests with the live search feature. Menu items are automatically sorted to the top of the page and easily accessible as soon as you begin typing, helping you keep up with fast paced requests."
              />
            </Col>
          </Row>

        </div>
      </Container>



      <Container className="centerHeader">
        <span className="fa wow animate__animated animate__fadeIn animate__slower"><a><i className="fas fa-angle-down fa-2x wow animate__animated animate__bounce animate__delay-1s" aria-hidden="true" /></a></span>
        <br />
        <br />
      </Container>


      <div className='text-center mb-5'>
        <Link to="/register">
          <Button variant="outline-dark" size="lg" className="my-2 my-lg-0 formControlGetStarted add addNewTableButton">Get Started.</Button>
        </Link>
      </div>

    </>


  );
}

