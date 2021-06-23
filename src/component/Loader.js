import React from 'react'; 
import {Alert, Spinner} from "react-bootstrap";

function Loader() {
  return (
    <div>
      <Alert variant="info" className="mt-2">
        <Alert.Heading><Spinner animation="grow" />{' '}Fetching Users Personnels...</Alert.Heading>
        
      </Alert>
    </div>
  );
}

export default Loader;