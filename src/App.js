import React, { Suspense, Fragment, lazy }  from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import './App.css'
import MyComponent from "./component";
 
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import gadjianLogo from "./assets/gadjian-logo.PNG";
import gadjianUser from "./assets/gadjian-user.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, 
    faUsers, 
    faCalendar
} from '@fortawesome/free-solid-svg-icons';
import error from "./assets/404.png";
// import Welcome from "./component/home";
// import Users from "./component/users";
// import Others from "./component/others"; 
import './app.scss'
const Users = lazy(() => import("./component/users"));
const Welcome = lazy(() => import("./component/home"));
const Others = lazy(() => import("./component/others"));

const LazyLoader=()=>{
  return(
    <div className='container-fluid' > 
      <Alert variant="info" className="mt-2">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </Alert>
    </div>
  )
}

const App = (props)=> {
  const pathname = window.location.pathname;
  const [active, setActive] = React.useState(pathname); 

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={
            <>
              <LazyLoader/>
            </>
          }>
          <MyComponent>
            <Router>
              <Fragment>
                <Navbar collapseOnSelect expand="lg">
                <Container fluid>
                  <div className="d-block d-md-none">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav activeKey={active} className="mr-auto">
                        <Nav.Link href="/" eventKey="/"><FontAwesomeIcon icon={faHome} />{' '} Beranda</Nav.Link>
                        <Nav.Link href="/users" eventKey="/users"><FontAwesomeIcon icon={faUsers} />{' '} Personal List</Nav.Link>
                        <Nav.Link href="/others" eventKey="/others"><FontAwesomeIcon icon={faCalendar} />{' '} Data Attendent</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </div>
                  <Navbar.Brand 
                    href="/" 
                    style={{
                      display: 'flex',
                      alignSSelf: 'flex-start',
                      flex: 'auto'}}>
                    <img
                      alt=""
                      src={gadjianLogo}
                      width="100"
                      height="50"
                      className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      Hallo, <a href="#login" style={{
                        color: '#5abfb6',
                        fontWeight: 'bold'
                      }}>Gadjian User</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                  <Nav className="me-auto">
                    <Nav.Link href="/">
                    <img
                      alt=""
                      src={gadjianUser}
                      width="40"
                      height="50"
                      className="d-inline-block align-top"
                    />  
                    </Nav.Link> 
                  </Nav>
                </Container>
                </Navbar>

                <Container fluid>
                <Row>
                  <Col sm={3} lg={2} className="d-none d-sm-block">
                    <Navbar>
                      <Nav activeKey={active} className="d-block mr-auto" onSelect={(selectedKey) => setActive(selectedKey)}>
                        <Nav.Link href="/" eventKey="/"><FontAwesomeIcon icon={faHome} />{' '} Beranda</Nav.Link>
                        <Nav.Link href="/users" eventKey="/users"><FontAwesomeIcon icon={faUsers} />{' '} Personal List</Nav.Link>
                        <Nav.Link href="/others" eventKey="/others"><FontAwesomeIcon icon={faCalendar} />{' '} Data Attendent</Nav.Link>
                      </Nav>
                    </Navbar>
                    
                  </Col>
                  <Col sm={9} lg={10} className="bg-light">
                    <Switch>
                      <Route exact path ="/" render={()=>(
                          <Welcome name="Gadjian" />
                      )} />
                      <Route exact path="/users" component={Users} />
                      <Route exact path="/others" component={Others} />
                      <Route component={notFound} />
                    </Switch>
                  </Col>
                </Row>
                </Container>
              </Fragment>
            </Router>
          </MyComponent>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;   

const notFound = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src={error} alt="notFound" height={550} width={900} />
      </div>
      <div className="col text-center">
        <Link to="/">
          <Button variant="outline-primary">Back To Home</Button>
        </Link>
      </div>
    </div>
  );
}; 
