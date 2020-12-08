import React from "react";
import "./LandingPage.css";
import { Jumbotron, Container, Card, CardDeck, Form, Button } from "react-bootstrap";




function LandingPageComp() {

    return (

        <>  
            {/* header  */}
            <Jumbotron className="headerBgrndWhite centerHeader jumbotronHeader" fluid>
                <Container>

      

                <br />
                <br />
                <br/>
                <br />
                <h1 className="display-4 wow animate__animated animate__fadeIn animate__slower responsiveH1Font whited">Table<span className="redded responsiveSpanFont">Turner</span></h1>
                <br />
                <h3 className=" blacked wow animate__animated animate__fadeIn animate__slower responsiveH3Font">Turn Your Tables. Quickly.</h3>
                <br />
                <br />
                <span className="fa wow animate__animated animate__bounce animate__delay-1s"><span className="fa wow animate__animated animate__fadeIn animate__slower"><a><i className="fas fa-angle-down fa-2x wow animate__animated animate_slower animate__backInUp" aria-hidden="true" /></a></span></span>
                <br />
                <br /> 
                <br />
            
                </Container>
            </Jumbotron>

            {/* hero image  */}
        
            <div className="heroIMAGE">
            <img className="heroHEIGHT" />
            </div>

            {/* breathing room  */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
             {/* breathing room  */}

            {/* informational cards  */}
            <Container>
             <CardDeck lg={2}>


              <Card style={{ border: 'none' }}>
              
              <i className="fas fa-tachometer-alt fa-7x wow animate__animated animate__fadeIn animate__slower" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

                <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

                <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Expedite Order Fulfillment</Card.Title>

                  
                <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Enter in order information quickly: tap or type to add menu items to your table orders. Quickly add order specifics and have your guests requests immediately viewable by the kitchen. Busy days have never been easier.
                </Card.Text>

                </Card.Body>
              </Card>



              <Card style={{ border: 'none' }}>
              
              <i className="fas fa-comment-medical fa-7x wow animate__animated animate__fadeIn animate__slower" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Allergy Labeling</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Tag any order with a specific category to notify the kitchen beforehand of your guests allergy concerns. Each order will include this categorical label to help minimize re-fires and keep your guests happy + healthy.
            </Card.Text>

            </Card.Body>
            </Card>



            <Card style={{ border: 'none' }}>
        
            <i className="fas fa-hand-sparkles fa-7x wow animate__animated animate__fadeIn animate__slower" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Special Request Tracking</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Help keep the communication line between front + back of house clear, with our specific requests input field. Whether it's a medium-rare steak request or the omission of cilantro, your kitchen staff will always be in the know.
            </Card.Text>

            </Card.Body>
            </Card>

            {/* row 2  */}

            <Card style={{ border: 'none' }}>

              <i className="fas fa-users fa-7x wow animate__animated animate__fadeIn animate__slower" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

                <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

                <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Fully Integrated System</Card.Title>

                  
                <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Sign up/Sign on under three positions to customize your experience: Wait Staff, Manager, or Kitchen. Each view will have access to the same data, but different capabilities in terms of: menu updating, adding + viewing tables, and viewing current orders.
                </Card.Text>

                </Card.Body>
              </Card>



              <Card style={{ border: 'none' }}>
              
              <i className="far fa-eye fa-7x wow animate__animated animate__fadeIn animate__slower" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>View All Orders + Tables</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Increase transparency by viewing all tables and each guest's orders in one place. Easily add and delete new orders on the fly or entire tables if your restaraunt layout changes. Simultaneously view allergy concerns, course numbers, and special requests.
            </Card.Text>

            </Card.Body>
            </Card>



            <Card style={{ border: 'none' }}>
            
            <i className="fas fa-search fa-7x wow animate__animated animate__fadeIn animate__slower" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody wow animate__animated animate__fadeIn animate__slower">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Live Search Feature</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Speed up your order adding process when receiving information from guests with the live search feature. Menu items are automatically sorted to the top of the page and easily accessible as soon as you begin typing, helping you keep up with fast paced requests. 
            </Card.Text>

            </Card.Body>
            </Card>

            
          </CardDeck>
        </Container>

        {/* breathing room  */}
        <br/>
        <br/>
        <br/>
        {/* breathing room  */}

        
        <Container className="centerHeader">
        <span className="fa wow animate__animated animate__fadeIn animate__slower"><a><i className="fas fa-angle-down fa-2x wow animate__animated animate__bounce animate__delay-1s" aria-hidden="true" /></a></span>
        <br/>
        <br/>
        </Container>


        {/* get started button */}

        <Form className="formControlGetStarted">

         <a href="/register"><Button variant="outline-dark" className="my-2 my-lg-0 formControlGetStarted add addNewTableButton" block>Get Started.</Button></a>

        </Form>

        {/* breathing room  */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* breathing room  */}

        </>


    );
}

export default LandingPageComp;
