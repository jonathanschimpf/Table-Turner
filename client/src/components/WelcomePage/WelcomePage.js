import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./WelcomePage.css";


function WelcomePageComp () {

    return (


        <>
<Container className="vertical-center">

<br />
<br />
<br />    

<Jumbotron className="jumbotronWelcome" >
  <h2 className="text-center responsiveH2Font">Add A New Table</h2>
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  <hr style={{height: '4px'}} />
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

  <Form className="add">
    
    <Button className="my-2 my-lg-0 formControl"  block>+</Button>
    
  </Form>

</Jumbotron>

<br />

<Jumbotron className="jumbotronWelcome">
  <h2 className="text-center responsiveH2Font">View All Tables</h2>
  <hr style={{height: '4px'}} />
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}
  
  <Form className="add">
    
    <Button className="my-2 my-lg-0 formControl"  block>+</Button>
    
  </Form>

</Jumbotron>

</Container>
<br />
<br />
<br />
        




        </>


    );

};

export default WelcomePageComp;