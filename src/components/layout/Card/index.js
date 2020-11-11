import React from "react";
import { useHistory } from "react-router-dom";

import {
   CardContainer
} from "./styles";

export default function Card(props) {
   const history = useHistory();

   return (
      <CardContainer profile={props.profile} onClick={() => history.push(props.page)}>
         {props.children}
      </CardContainer>
   );
}