import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const StepFiveContent = () => (
  <div className="container so-midSection so-whiteBG">

<Row className="justify-content-md-center">
    <Col xs lg="2"> </Col>
    <Col md="auto justify-content-center">
    <Link to="stepone" className="">
     1
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepone" className="">
     2
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepone" className="">
     3
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepone" className="">
    4
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepone" className="">
     5
    </Link>
    </Col>
    <Col xs lg="2">  </Col>
  </Row>

    <h2>Step Five: Review Your List and Submit</h2>
    <p>
The previous steps include common maintanance areas for most websites. There are others, including _______ . Step 5 you are encouraged to consider any additional maintenance areas that apply to your site and add appropriate course action items. 

Once you have the  maintenance items you feel are necessary to complete, consider a reasonable target date for completing them. Select a target date that is not in the too distant future (say less than a month) but far enough realistically complete your list. With this target date in mine, review your list again, make sure the priority ratings are appropriate and remove or add items to suit your target date. Make a note of any items removed for the next 5 step maintenance review. 

    </p>

    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    <h2>Other Maintenance Considerations</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      
      Lorem ipsum dolar sit paques mobiscum o  Lorem ipsum dolar sit paques mobiscum o  Lorem ipsum dolar sit paques mobiscum o  

      Lorem ipsum dolar sit paques mobiscum o  Lorem ipsum dolar sit paques mobiscum o  

      </Card.Body>
    </Accordion.Collapse>
  </Card>
 

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      
    <h2>Set a Target Date and Revise List</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        

      Lorem ipsum dolar sit paques mobiscum o  Lorem ipsum dolar sit paques mobiscum o  




      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      
    <h2>Save Copy Print!</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        

     Please save your list as soon as you finish assembling it. You are working on a locally saved version that may be cleared when you close your browser




      </Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>


  </div>
);

export default StepFiveContent;
