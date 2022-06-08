import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import Message from '../layouts/Message';
import Loader from '../layouts/Loader';
import { Auth } from 'aws-amplify';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await Auth.signIn(username, password);

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}

      <section className="login-section" aria-describedby="login">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <h1 className="text-center mb-3 mb-md-4 display-3 text-white">
                Sign In
              </h1>

              {error && <Message msg={error} />}

              <Form onSubmit={onSubmit}>
                <Form.Group controlId="username" className="mb-3 mb-md-4">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    name="username"
                    size="lg"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3 mb-md-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    size="lg"
                    minLength="9"
                    maxLength="128"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <ButtonGroup className="mt-3 mt-md-4">
                  <Button
                    type="button"
                    variant="light"
                    disabled={loading}
                    className="me-2 me-md-3"
                    size="lg"
                  >
                    Forgot Password
                  </Button>

                  <Button
                    type="submit"
                    variant="info"
                    size="lg"
                    disabled={loading}
                  >
                    Sign In
                  </Button>
                </ButtonGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
