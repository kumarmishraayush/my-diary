import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [credential, setcrediential] = useState({ Email: "", Password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.Email,
        password: credential.Password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if(json.success)
    {
        localStorage.setItem('token' ,json.authtoken);
        navigate("/")
    }
    else{
        alert("Invalid credential");
    }
  };

  const onchange = (e) => {
    setcrediential({ ...credential, [e.target.name]: e.target.value });
    
  };
  return (
    <>
      <Form className="mb-3 w-50  d-block m-auto">
        <Form.Group className="mb-3" controlId="Email" name="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={credential.Email}
            name="Email"
            onChange={onchange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password" name="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={credential.Password}
            name="Password"
            onChange={onchange}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="mb-3  w-50  d-block m-auto"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
