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
                <a><i className="fas fa-angle-down fa-2x wow animate__animated animate_slower animate__backInUp" aria-hidden="true" /></a>
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

              <i className="fa fa-github-square fa-7x" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

                <Card.Body className="infoCardBody">

                <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Info Item</Card.Title>
                  
                <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Card.Text>

                </Card.Body>
              </Card>



              <Card style={{ border: 'none' }}>

              <i className="fa fa-github-square fa-7x" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Info Item</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Card.Text>

            </Card.Body>
            </Card>



            <Card style={{ border: 'none' }}>

            <i className="fa fa-github-square fa-7x" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Info Item</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Card.Text>

            </Card.Body>
            </Card>



            {/* <Card style={{ border: 'none' }}>

            <i className="fa fa-github-square fa-7x" aria-hidden="true" style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }}></i>

            <Card.Body className="infoCardBody">

            <Card.Title className="" style={{ paddingTop: '10px', textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Info Item</Card.Title>
            
            <Card.Text className="" style={{ paddingTop: '1px', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Card.Text>

            </Card.Body>
            </Card> */}
            
          </CardDeck>
        </Container>

        {/* breathing room  */}
        <br/>
        <br/>
        <br/>
        {/* breathing room  */}

        
        <Container className="centerHeader">
        <a><i className="fas fa-angle-down fa-2x wow animate__animated animate__bounce" aria-hidden="true" /></a>
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
