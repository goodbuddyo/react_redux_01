import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const StepThreeContent = () => (
  <div className="container so-midSection so-whiteBG">

<Row className="justify-content-md-center">
    <Col xs lg="2"> </Col>
    <Col md="auto justify-content-center">
    <Link to="stepone" className="">
     1
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="steptwo" className="">
     2
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepthree" className="">
     3
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepfour" className="">
    4
    </Link>
    <span className="so-pipe"> | </span>
    <Link to="stepfive" className="">
     5
    </Link>
    </Col>
    <Col xs lg="2">  </Col>
  </Row>

  <h2>Step Three: Performance and Security</h2>
  <p>
Because they encourage looking at your website as a whole, sitemaps and styleguids are a good starting point for website maintenance.  Some feel they are unnecessary (especially for smaller sites), but the process of creating and reviewing these tools help with other site maintenance areas, like SEO and Business Integration.

If you have not yet created either of these tools, or if your site has changed significantly since they were last been updated, consider adding a Course of Action item to create or update them. 

The references below offer more specific information regarding these tools. 


  </p>
  <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    <h2>Performance</h2>
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
      
    <h2>Security</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        

      Lorem ipsum dolar sit paques mobiscum o  Lorem ipsum dolar sit paques mobiscum o  




      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

</div>
);

export default StepThreeContent;
