import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import React  from "react";
 

const SignUp = () => {
  const navigate = useNavigate();

  const [credential, setcrediential] = useState({name:"", email: "", password: "" , repeatpassword:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
     

    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    localStorage.setItem('token' ,json.authtoken);
    navigate("/")
  };

  const onchange = (e) => {
    setcrediential({ ...credential, [e.target.name]: e.target.value });
    
  };




  return (
    <>
   <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Welcome
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit} >
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={onchange} name = "name" required />
                      </Form.Group>





                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={onchange} name="email" required minLength={5}/>
                      </Form.Group>





                      <Form.Group
                        className="mb-3"
                        controlId="Password"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={onchange} name ="password" required minLength={5}/>
                      </Form.Group>





                      <Form.Group
                        className="mb-3"
                        controlId="Reprat Password"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={onchange} name="repeatpassword" required minLength={5}/>
                      </Form.Group>





                      
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <Link to='/Login' className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default SignUp;
