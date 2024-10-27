import React, { useState } from "react";
import "./index.css"; // Make sure to style the buttons and layout in your CSS
import { Form, Row, Col } from "react-bootstrap";

const Form1 = () => (
  <div>
    <h2>Add Requirements</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Customer</Form.Label>
        <Form.Control as="select">
          <option>Select Customer</option>
          <option>Customer 1</option>
          <option>Customer 2</option>
          <option>Customer 3</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Property Type</Form.Label>
        <Form.Control as="select">
          <option>Select Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Land</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Requirement</Form.Label>
        <Form.Control type="text" placeholder="e.g.: Hussan" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Detailed Requirement</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  </div>
);

const Form2 = () => (
  <div>
    <h2>Property Location</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control as="select">
          <option>Select City</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
          <option>Houston</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Area</Form.Label>
        <Form.Control type="text" placeholder="e.g.: Downtown" />
      </Form.Group>
    </Form>
  </div>
);

const Form3 = () => (
  <div>
    <h2>Property Features</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control type="number" placeholder="Number of Bedrooms" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control type="number" placeholder="Number of Bathrooms" />
      </Form.Group>
    </Form>
  </div>
);

const Form4 = () => (
  <div>
    <h2>Area Details</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Area Size</Form.Label>
        <Form.Control type="text" placeholder="e.g., 1200 sqft" />
      </Form.Group>
    </Form>
  </div>
);

const Form5 = () => (
  <div>
    <h2>Price Details</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Price Range</Form.Label>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Min" />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Max" />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  </div>
);

const Form6 = () => (
  <div>
    <h2>Add Photos</h2>
    <Form>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Photos</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
    </Form>
  </div>
);

const forms = [Form1, Form2, Form3, Form4, Form5, Form6];

const MultiSteps = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < forms.length) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const FormComponent = forms[step - 1];
  return (
    <div className="container">
      <div className="progress_container">
        {forms.map((_, index) => (
          <div key={index} className={`circle ${index < step ? "active" : ""}`}>
            {index + 1}
          </div>
        ))}
      </div>
      <div className="progress_co" >
        {forms.map((_, index) => (
          <div style={{marginBottom:"500%",marginLeft:"-250%"}} key={index} className={`circle ${index < step ? "active" : ""}`}>
            {index + 1}
          </div>
        ))}
      </div>
      
      <div className="content" style={{ border: "2px solid blue", padding: "20px", marginTop: "50px", maxWidth: "600px" ,borderRadius:"5%",backgroundColor:" #ddd"}}>
        <FormComponent />
        <div className="btns">
          {step === 1 ? (
            <button className="btn" onClick={handleNext} style={{ backgroundColor: "red", color: "white" }}>
              Next
            </button>
          ) : (
            <>
            
            
              
              
              <button className="btn" onClick={handleNext} style={{ backgroundColor: "red", color: "white" }}>
                Next
              </button><button className="btn" onClick={handlePrev} style={{ backgroundColor: "red", color: "white" }}>
                previous
              </button>
            </>
          )}</div>
        </div>
       
    </div>
  );
};

export default MultiSteps;