import React, { useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { linkDB } from "../../constant";




export default function Dashbord() {
  
  useEffect(() => {
    axios.get(linkDB+"/rice").then((response) => {
      setValues(response.data);
    });
  }, []);

  const [values, setValues] = useState({});
  const RiceCategory = Object.keys(values).map((id) => values[id].RiceCategory);

  // console.log(RiceCategory);
  // console.log(values);

  return (
    <div>
      <Container>
      
      </Container>
    </div>
  );
}
