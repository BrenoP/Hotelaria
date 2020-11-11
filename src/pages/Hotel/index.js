import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Swal from "sweetalert2";

import {
   ContainerCards,
   Title,
   ButtonCalc,
   ContainerCalcs,
   CardCalc
} from "./styles";

import Header from "~/components/layout/Header";
import api from "~/services/api";

export default function Hotel() {

   const [receita, setReceita] = useState(0);
   const [lucro, setLucro] = useState(0);
   const [quartosVendidos, setQuartosVendidos] = useState(0);

   function addCalculation(calcApi, form) {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('id', 1);
      formData.append('value', form);

      api.post(`/hotel/${calcApi}.php`, formData)
      .then((res) => {
         debugger
         Swal.fire('Any fool can use a computer');      
      })
      .catch((err) => {
         debugger
      })
   }

   function Calculation(calcApi) {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('id', 1);

      api.post(`/hotel/${calcApi}.php`, formData)
      .then((res) => {
         debugger
         Swal.fire('Any fool can use a computer');      
      })
      .catch((err) => {
         debugger
      })
   }

   return (
      <div>
         <Header />
         <Title>
            <h2>Atualize os dados</h2>
         </Title>
         <ContainerCards>
            <TextField
               id="outlined-required"
               label="Receita"
               variant="outlined"
               style={{ marginBottom: "1.5rem" }}
               onChange={(e) => setReceita(e.target.value)}
            />
            <ButtonCalc onClick={() => addCalculation("updateReceita", receita)}>
               <AddIcon />
               Atualizar
            </ButtonCalc>
            <TextField
               id="outlined-required"
               label="Lucro"
               variant="outlined"
               style={{ marginBottom: "1.5rem" }}
               onChange={(e) => setLucro(e.target.value)}
            />
            <ButtonCalc onClick={() => addCalculation("updateLucro", lucro)}>
               <AddIcon />
               Atualizar
            </ButtonCalc>
            <TextField
               id="outlined-required"
               label="Quartos vendidos"
               variant="outlined"
               style={{ marginBottom: "1.5rem" }}
               onChange={(e) => setQuartosVendidos(e.target.value)}
            />
            <ButtonCalc onClick={() => addCalculation("updateQuartosVendidos",quartosVendidos)}>
               <AddIcon />
               Atualizar
            </ButtonCalc>
         </ContainerCards>
         <Title>
            <h2>Calculos</h2>
         </Title>
         <ContainerCalcs>
            <CardCalc onClick={() => Calculation("revPar")}>RevPar</CardCalc>
            <CardCalc onClick={() => Calculation("netRevPar")}>Net RevPar</CardCalc>
            <CardCalc onClick={() => Calculation("diariaMedia")}>Diária Média</CardCalc>
            <CardCalc onClick={() => Calculation("taxaOcupacao")}>Taxa de ocupação</CardCalc>
         </ContainerCalcs>
      </div>
   );
}