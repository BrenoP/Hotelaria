import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import HotelIcon from '@material-ui/icons/Hotel';
import { toast } from 'react-toastify';

import {
   ContainerCards,
   Title,
   ButtonCalc,
   GridUserInfo,
   BedroomContainer,
} from "./styles";

import Header from "~/components/layout/Header";
import api from "~/services/api";

export default function Bedrooms() {
   const hotelReducer = useSelector((state) => state.hotelReducer);

   const [tipo, setTipo] = useState(null);
   const [diaria, setDiaria] = useState(null);
   const [lucro, setLucro] = useState(null);

   function getQuartoInfo() {
      let formData = new FormData();
      formData.append('id', parseInt(hotelReducer.hotel.qtdeQuartos));

      api.post("/quarto/getQuarto.php", formData)
      .then((res) => {
         setTipo(res.data.quarto.tipo);
         setDiaria(res.data.quarto.valorDiaria);
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   function addQuarto() {
      let formData = new FormData();
      formData.append('hotel', hotelReducer.hotel.id);
      formData.append('tipo', tipo);
      formData.append('valorDiaria', diaria);

      api.post("/quarto/includeQuarto.php", formData)
      .then((res) => {
         toast.success("Quarto adicionado com sucesso")
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   function addLucro() {
      let formData = new FormData();
      formData.append('id', parseInt(hotelReducer.hotel.qtdeQuartos));
      formData.append('value', lucro);

      api.post("/quarto/includeLucro.php", formData)
      .then((res) => {
         toast.success(res.data.message)
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }


   useEffect(() => {
      getQuartoInfo();
   }, []);

   return (
      <div>
         <Header />
         <Title>
            <HotelIcon style={{
               fontSize: "2.2rem",
               marginRight: ".5rem"
            }} />
            <h2>Quarto</h2>
         </Title>
         <BedroomContainer>
            <div>
               <Title>
                  <h3>Último quarto</h3>
               </Title>
               <ContainerCards>
                  <GridUserInfo>
                     <span>
                        <label>Tipo: </label>
                        {tipo ? tipo : null}
                     </span>
                     <span>
                        <label>Valor Diária: </label>
                        {diaria ? diaria : null}
                     </span>
                     <span>
                        <label>Lucro: </label>
                        {lucro ? lucro : "Sem lucro cadastrado"}
                     </span>
                  </GridUserInfo>
               </ContainerCards>
            </div>
            <div>
               <Title>
                  <h3>Cadastrar um quarto novo</h3>
               </Title>
               <ContainerCards>
                  <TextField
                     id="outlined-required"
                     label="Tipo"
                     variant="outlined"
                     style={{ marginBottom: "1.5rem" }}
                     onChange={(e) => setTipo(e.target.value)}
                  />
                  <TextField
                     id="outlined-required"
                     label="Valor diária"
                     variant="outlined"
                     style={{ marginBottom: "1.5rem" }}
                     onChange={(e) => setDiaria(e.target.value)}
                  />
                  <ButtonCalc onClick={() => addQuarto()}>
                     <AddIcon />
                     Adicionar
                  </ButtonCalc>
               </ContainerCards>

               <Title>
                  <h3>Incluir lucro ao último quarto</h3>
               </Title>
               <ContainerCards>
                  <TextField
                     id="outlined-required"
                     label="Lucro"
                     variant="outlined"
                     style={{ marginBottom: "1.5rem" }}
                     onChange={(e) => setLucro(e.target.value)}
                     value={lucro}
                  />
                  <ButtonCalc onClick={() => addLucro()}>
                     <AddIcon />
                     Adicionar
                  </ButtonCalc>
               </ContainerCards>
            </div>
         </BedroomContainer>
      </div>
   );
}