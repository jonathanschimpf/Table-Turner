import { Container, Jumbotron, Form, Button, Col, Row } from "react-bootstrap";
import "../WelcomePage/WelcomePage.css";
import "../ViewAllTables/ViewAllTables"

function ManagerComp () {

    return (


        <>
<Container className="vertical-center">

<br />
<br />
<br />    
<Row>
    <Col>
<Jumbotron className="jumbotronWelcome" >
  <h2 className="text-center responsiveH2Font">Add A New Table</h2>
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  <hr style={{height: '4px'}} />
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

  <Form className="add">
    
   <a href="/startTable"><Button className="my-2 my-lg-0 formControl welcomeButtons"  block>+Add</Button></a>
    
  </Form>

</Jumbotron>
    </Col>
<br />
<Col>
<Jumbotron className="jumbotronWelcome">
  <h2 className="text-center responsiveH2Font">View All Tables</h2>
  <hr style={{height: '4px'}} />
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}
  
  <Form className="add">
    
  <a href="/viewRestaurant"><Button className="my-2 my-lg-0 formControl welcomeButtons" block>View</Button></a>
    
  </Form>

</Jumbotron>
</Col>
</Row>

<Row>

<Col>
<Jumbotron className="jumbotronWelcome">
  <h2 className="text-center responsiveH2Font">Update Menu</h2>
  <hr style={{height: '4px'}} />

  
  <Form className="add">
    
  <a href="/importMenu"><Button className="my-2 my-lg-0 formControl welcomeButtons" block>Update</Button></a>
    
  </Form>

</Jumbotron>
</Col>

<Col>
<Jumbotron className="jumbotronWelcome">
  <h2 className="text-center responsiveH2Font">View Kitchen</h2>
  <hr style={{height: '4px'}} />
  {/* <h4 className="text-center">Plaeholder Description</h4> */}
  {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}
  
  <Form className="add">
    
  <a href="/kitchen"><Button className="my-2 my-lg-0 formControl welcomeButtons" block>View</Button></a>
    
  </Form>

</Jumbotron>
</Col>

</Row>

</Container>
<br />
<br />
<br />
        




        </>


    );

};

export default ManagerComp;