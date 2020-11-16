import React, { useState, useEffect } from "react";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

import {
   ContainerCards,
   Title
} from "./styles";

import api from "~/services/api";
import Header from "~/components/layout/Header";
import Card from "~/components/layout/Card";

export default function Home() {
   const dispatch = useDispatch();
   const userReducer = useSelector((state) => state.userReducer);

   function getHotelnfo() {
      let formData = new FormData();
      formData.append('id', userReducer.user.id);

      api.post(`/hotel/getHotel.php`, formData)
      .then((res) => {
         dispatch({ type: "SET_HOTEL", hotel: res.data });
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   useEffect(() => {
      getHotelnfo()
   }, []);

   return (
      <div>
         <Header />
         <Title>
            <h2>Bem vindo ao sistema!</h2>
         </Title>
         <ContainerCards>
            <Card page="/hotel">
               <h1 style={{
                  display: "flex",
                  alignItems: "center"
                }}>
                  <MonetizationOnIcon style={{
                     marginRight: ".5rem",
                     fontSize: "2rem"
                  }} />
                  <span>Hotel</span>
               </h1>
            </Card>
            <Card page="/quartos">
               <h1 style={{
                  display: "flex",
                  alignItems: "center"
                }}>
                  <HotelIcon style={{
                     marginRight: ".5rem",
                     fontSize: "2rem"
                  }} />
                  <span>Quartos</span>
               </h1>
            </Card>
            <Card page="/minha-conta">
               <h1 style={{
                  display: "flex",
                  alignItems: "center"
                }}>
                  <PersonIcon style={{
                     marginRight: ".5rem",
                     fontSize: "2rem"
                  }} />
                  <span>Seu perfil</span>
               </h1>
            </Card>
         </ContainerCards>
      </div>
   );
}