import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CourseList = ({ courses, onDeleteClick }) => (
  <>
    <Row className="testcols12">
      <Col xs="7" sm="7" md="3" className="so-courseListCol so-heading so-col so-col3" > Action Title</Col>
      <Col xs="2" sm="2" md="1" className="so-courseListCol so-heading so-col so-col1" > Level </Col>
      <Col xs="3" sm="3" md="7" className="so-courseListCol so-heading so-col so-col7" > Reference </Col>
    </Row>

    {courses.map(course => {
      return (

        
        <Row className="testcols12 so-courseRow" key={course.id}>
          <Col xs="7" sm="7" md="3" className="so-courseListCol so-col so-col3" > 
          <Link to={"/course/" + course.slug}>{course.title}</Link>
          </Col>
          <Col xs="2" sm="2" md="1" className="so-courseListCol so-col so-col1" > {course.authorName} </Col>
          <Col xs="3" sm="3" md="1" className="so-courseListCol so-col so-col2" > 
            <a
              className="btn btn-light"
              href={course.category}
              
            >
              URL 
               {/* href={"http://pluralsight.com/courses/" + course.slug} */}
            </a> 
          </Col>
          <Col xs="9" sm="9" md="5" className="so-courseListCol so-col so-col5" > Note: {course.category}</Col>
          <Col xs="3" sm="3" md="2" className="so-courseListCol so-col so-colDelete" >  
            <button
                className="btn so-delete-btn"
                onClick={() => onDeleteClick(course)}
              >
                Delete
            </button> 
          </Col>
        </Row>
      );
    })}
 </>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
