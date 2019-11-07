import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const StepOneContent = () => (
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

  <h2>Step One: Sitemaps and Styleguides</h2>
  <p>
  Because they encourage looking at your website as a whole, sitemaps and styleguids are a good starting point for website maintenance.  Some feel they are unnecessary (especially for smaller sites), but the process of creating and reviewing these tools help with other site maintenance areas, like SEO and Business Integration.
  </p>

  <p>
  If you have not yet created either of these tools, or if your site has changed significantly since they were last been updated, consider adding a Course of Action item to create or update them.  The references below offer more specific information regarding these tools. 
  </p>

  <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    <h2>Sitemaps</h2>
    
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <p className="so-details-p">
      Different types of sitemaps serve different purposes, these include:
      </p>
      <ul className="so-details-list">
      <li>XML sitemaps offer search engines direction to better index your site.</li>
      <li>HTML sitemaps provide users a comprehensive site navigation option.</li>
      <li>Visual sitemaps can be a helpful tool for business planning.</li>
      </ul>

      <p className="so-details-p">
        <a href="https://support.google.com/webmasters/answer/156184" target="_blank" rel="noopener noreferrer">Google Sitemap Recommendations</a>
      </p>


      <p className="so-details-p">
        <a href="http://www.thesempost.com/advantages-to-using-multiple-sitemaps-in-google-search-console" target="_blank" rel="noopener noreferrer">The SEM Post: Advantages To Use Mulitple Sitemaps</a>
      </p>


      <p className="so-details-p">
      For large sites, it may help to split up your xml sitemap. If your site has 10k pages and the Search Console says only 6k have been indexed, you do not know which 6k. Splitting up your xml sitemap files by page type, section or in another way can help troubleshoot which types of pages are not being indexed. 
      </p>

      <p className="so-details-p">
        <a href="https://moz.com/blog/xml-sitemaps" target="_blank" rel="noopener noreferrer">Moz: XML Sitemap Suggestions</a>
      </p>

      <ul className="so-details-list">
      <li>Be consistent! Make sure robots.txt, meta robots and sitemap are in sync.</li>
      <li>For large sites, use dynamic XML sitemaps</li>
      <li>Block indexing of files used as rewards/incentives for action (i.e. provide email, etc.)</li>
      </ul>


      <p className="so-details-p">
        <a href="https://hostingmirror.com/best-free-sitemap-generators#2-types-of-sitemaps" target="_blank" rel="noopener noreferrer">Hostingmirror:  Types Of Sitemaps </a>
      </p>


      <p className="so-details-p">
        <a href="https://www.sistrix.com/ask-sistrix/sitemaps/are-there-different-kinds-of-sitemaps/" target="_blank" rel="noopener noreferrer">Sistrix: Different Kinds of Sitemaps</a>
      </p>



      <p className="so-details-p">
        <a href="https://moz.com/blog/xml-sitemaps" target="_blank" rel="noopener noreferrer">Moz: XML Sitemap Suggestions</a>
      </p>


      <p className="so-details-p">
      <strong>Popular Sitemap Tools </strong><br />
      Note: This is just a partial list offering some idea of what is available. Some tools (not all) offer a free trial. 5-5s.com does not recommend a specific tool.      </p>




      <p className="so-details-p">
        <a href="https://dynomapper.com/blog/16-sitemap-generator/164-top-50-sitemap-generators-for-creating-sitemaps " target="_blank" rel="noopener noreferrer">Dynomapper: Top 50 Sitemap Generator Tools for Creating Visual Sitemap</a>
      </p>


      <p className="so-details-p">
        <a href="https://nvision.co/design/why-is-a-site-map-so-important/" target="_blank" rel="noopener noreferrer">nvision.co: Why Is a Site Map Important</a>
      </p>

      <p className="so-details-p">
        <a href="https://www.webconfs.com/1286/7-best-sitemap-generator-tools/" target="_blank" rel="noopener noreferrer">Webconfs.com: Sitemap Generator Tools</a>
      </p>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    <h2>Style Guides</h2>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>H
        
      <p className="so-details-p">
      UI Style Guides are a design and development tool that brings cohesion to a digital product&apos;s user interface and experience. At their core, they: Record all of the design elements and interactions that occur within a product. List crucial UI components such as buttons, typography, color, navigation menus, etc.
      </p>




<p className="so-details-p">
        <a href="https://www.toptal.com/designers/ui/ui-styleguide-better-ux" target="_blank" rel="noopener noreferrer">Creating a UI Style Guide for Better UX | Toptal</a>
      </p>


      <p className="so-details-p">
        <a href="https://www.forbes.com/sites/propointgraphics/2016/07/24/brand-style-guides/#5a83f8fe61a5" target="_blank" rel="noopener noreferrer">Forbes: Why Your Brand Needs A Real Style Guide</a>
      </p>


      <p className="so-details-p">
        <a href="http://styleguides.io/examples.html" target="_blank" rel="noopener noreferrer">styleguides.io Examples</a>
      </p>



      <p className="so-details-p">
        <a href="http://styleguides.io/tools.html" target="_blank" rel="noopener noreferrer">styleguides.io Tools</a>
      </p>


      <p className="so-details-p">
        <a href="https://alistapart.com/event/responsive-style-guides/" target="_blank" rel="noopener noreferrer">Alistapart Guides</a>
      </p>




      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

</div>
);

export default StepOneContent;
