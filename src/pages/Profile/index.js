import React, { useEffect, useState } from "react";
import PersonIcon from '@material-ui/icons/Person';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import {
   ContainerCards,
   Title,
   GridUserInfo,
   ButtonCalc,
   ProfileContainer,
   ComissionContent
} from "./styles";

import Header from "~/components/layout/Header";
import api from "~/services/api";

export default function Profile() {
   const userReducer = useSelector((state) => state.userReducer);
   const hotelReducer = useSelector((state) => state.hotelReducer);

   const [user, setUser] = useState(null);
   const [userComission, setUserComission] = useState(null);
   const [comission, setComission] = useState(null);

   function getUserInfo() {
      let formData = new FormData();
      formData.append('id', userReducer.user.id);

      api.post("/funcionario/getInfoFunc.php", formData)
      .then((res) => {
         let userResponse = JSON.parse(res.data.slice(176));
         setUser(userResponse);
         setUserComission(userResponse.comission);
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   function addComission() {
      let formData = new FormData();
      formData.append('id', userReducer.user.id);
      formData.append('value', comission);
      formData.append('hotel_id', hotelReducer.hotel.id);

      api.post("/funcionario/InsertComissionFunc.php", formData)
      .then((res) => {
         setUserComission(JSON.parse(res.data.slice(176)));
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   useEffect(() => {
      getUserInfo();
   }, []);

   return (
      <div>
         <Header />
         <ProfileContainer>
            <div>
               <Title>
                  <PersonIcon style={{
                     fontSize: "2.2rem",
                     marginRight: ".5rem"
                  }} />
                  <span>Sua conta</span>
               </Title>
               <ContainerCards>
                  <GridUserInfo>
                     <span>
                        <label>Nome: </label>
                        {user ? user.name : null}
                     </span>
                     <span>
                        <label>Email: </label>
                        {user ? user.email : null}
                     </span>
                     <span>
                        <label>Comissão: </label>
                        {user ? userComission === null ? "Sem comissão" : userComission: null}
                     </span>
                  </GridUserInfo>
               </ContainerCards>
            </div>
            <div>
               <Title>
                  <PersonIcon style={{
                     fontSize: "2.2rem",
                     marginRight: ".5rem"
                  }} />
                  <span>Adicionar comissão</span>
               </Title>
               <ComissionContent>
                  <TextField
                     id="outlined-required"
                     label="Comissão"
                     variant="outlined"
                     value={userComission === null ? "" : userComission}
                     style={{ marginBottom: "1.5rem" }}
                     onChange={(e) => setComission(e.target.value)}
                  />
                  <ButtonCalc onClick={() => addComission()}>
                     <AddIcon />
                     { userComission !== null ? "Editar" : "Adicionar" }
                  </ButtonCalc>
               </ComissionContent>
            </div>
         </ProfileContainer>
      </div>
   );
}