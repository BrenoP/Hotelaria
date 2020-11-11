import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";


import {
   HeaderContainer
} from "./styles";

export default function Header() {
   const history = useHistory();

   return (
      <HeaderContainer>
         <h4 onClick={() => history.push("/inicio")}>Hotelaria</h4>
         <div onClick={() => history.push("/")}>
            <span>Sair</span> 
            <ExitToAppIcon />
         </div>
      </HeaderContainer>
   );
}