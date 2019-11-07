import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const CardDecks = () => (
  <>
  <div className=" so-midSection so-whiteBG">
    
    <Row className="justify-content-md-center">
    
    <Col className="justify-content-md-center so-LRpad40_0">
    <div className="lead">
      Promote regular site maintenance using the 5-5s process. <span> </span>
      <span className="so-lgScreenTxt"> 
      Generate a prioritized list of the action items specific to the needs of your site. Consider each step below, or 
      </span>
    </div>
    </Col>

  </Row>

  <Row className="justify-content-md-center">
    <Col xs lg="2"> </Col>
    <Col md="auto justify-content-center">
    <Link to="stepone" className="btn btn-primary btn-lg so-lg-btn">
      Start Step 1
    </Link>
    </Col>
    <Col xs lg="2">  </Col>
  </Row>
</div>


<Row noGutters={true} >




<Col className=" so-midSection so-whiteBG" >
    
    <CardDeck>
    <Card className="text-center">
        <Card.Header>
        <h4 className="my-0 font-weight-normal">Step 1: Initial Assessment</h4>
        </Card.Header>
        <Card.Body>
        
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Assess</li>
            <li>Sitemaps &amp;</li>
            <li>Style Guides</li> 
          </ul>
         
          <Link to="stepone" className="">
          <Button variant="primary">Learn More</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Header>
        <h4 className="my-0 font-weight-normal">Step 2: Secondary Review</h4>
        </Card.Header>
        <Card.Body>
         
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>SEO</li>
            <li>User Feedback &amp;</li>
            <li>Accessibility</li> 
          </ul>
          <Link to="steptwo" className="">
          <Button variant="primary">Learn More</Button>

          </Link>
  
        
        </Card.Body>
      </Card>
      
      <Card className="text-center">
        <Card.Header>
        <h4 className="my-0 font-weight-normal">Step 3: Perfomrance Security</h4>
        </Card.Header>
        <Card.Body>
         
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Load Speed</li>
            <li>CDN Status &amp;</li>
            <li>Security Checks</li> 
          </ul>
          <Link to="stepthree" className="">
          <Button variant="primary">Learn More</Button>
          </Link>
         
        </Card.Body>
      </Card>
          
    </CardDeck>
  </Col>



</Row>






<Row noGutters={true} >


<Col className=" so-midSection so-whiteBG" >
    
    <CardDeck>
      <Card className="text-center">
        <Card.Header>
        <h4 className="my-0 font-weight-normal">Step 4: Business Integration</h4>
        </Card.Header>
        <Card.Body>
       
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Sync w/Marketing</li>
            <li>User Feedback &amp;</li>
            <li>Stocial Media</li> 
          </ul>
          <Link to="stepfour" className="">
          <Button variant="primary">Learn More</Button>
          </Link>
          
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Header>
        <h4 className="my-0 font-weight-normal">Step 5: Edit Your List and Distribute</h4>
        </Card.Header>
        <Card.Body>
      
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Other Maintenance Areas</li>
            <li>Review List &amp;</li>
            <li>Copy Print and Distribute</li> 
          </ul>
          <Link to="stepfive" className="">
          <Button variant="primary">Learn More</Button>
          </Link>
          
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Header>
        <h4 className="my-0 font-weight-normal">Save Your List!</h4>
        </Card.Header>
        <Card.Body>
         
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>This app is in beta</li>
            <li>Copy your Course of actions list </li> 
            <li>It will soon be deleted</li>
          </ul>

          
          <Link to="courses" className="">
          <Button variant="primary">Copy and Save!</Button>
          </Link>
          


         
        </Card.Body>
      </Card>
    
    </CardDeck>

  </Col>
 
 
</Row>

</>
);

export default CardDecks;



