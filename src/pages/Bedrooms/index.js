import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import HotelIcon from '@material-ui/icons/Hotel';
import { toast } from 'react-toastify';

import {
   ContainerCards,
   Title,
   ButtonCalc,
   GridUserInfo,
   BedroomContainer,
   ContainerCalcs,
   CardCalc
} from "./styles";

import Header from "~/components/layout/Header";
import api from "~/services/api";

export default function Bedrooms() {
   const dispatch = useDispatch();
   const userReducer = useSelector((state) => state.userReducer);

   const [tipo, setTipo] = useState(null);
   const [diaria, setDiaria] = useState(null);
   const [lucro, setLucro] = useState(null);

   function getQuartoInfo() {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('id', 1);

      api.post("/quarto/getQuarto.php", formData)
      .then((res) => {
         debugger
         setTipo(res.data.quarto.tipo);
         setDiaria(res.data.quarto.valorDiaria);
      })
      .catch((err) => {
         debugger
      })
   }

   function addQuarto() {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('hotel', 1);
      formData.append('tipo', 1);
      formData.append('valorDiaria', 1);

      api.post("/quarto/includeQuarto.php", formData)
      .then((res) => {
         debugger
         toast.success("Quarto adicionado com sucesso")
      })
      .catch((err) => {
         debugger
      })
   }

   function addLucro() {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('id', 1);
      formData.append('value', lucro);

      api.post("/quarto/includeLucro.php", formData)
      .then((res) => {
         toast.success(res.data.message)
      })
      .catch((err) => {
         debugger
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
                  <h3>Cadastrar quarto</h3>
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
                  <h3>Incluir lucro</h3>
               </Title>
               <ContainerCards>
                  <TextField
                     id="outlined-required"
                     label="Lucro"
                     variant="outlined"
                     style={{ marginBottom: "1.5rem" }}
                     onChange={(e) => setLucro(e.target.value)}
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