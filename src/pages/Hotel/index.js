import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";

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
   const userReducer = useSelector((state) => state.userReducer);

   const [receita, setReceita] = useState(0);
   const [lucro, setLucro] = useState(0);
   const [quartosVendidos, setQuartosVendidos] = useState(0);
   const [hotel, setHotel] = useState(null);

   useEffect(() => {
      getHotelnfo()
   }, []);

   function addCalculation(calcApi, form) {
      let formData = new FormData();
      formData.append('id', userReducer.user.id);
      formData.append('value', form);

      api.post(`/hotel/${calcApi}.php`, formData)
      .then((res) => {
         toast.success(res.data.message);
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   function Calculation(calcApi) {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('id', 1);

      api.post(`/hotel/${calcApi}.php`, formData)
      .then((res) => {
         Swal.fire("Calculo realizado com sucesso, o resultado é: " + res.data.value);      
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   function getHotelnfo() {
      let formData = new FormData();
      // formData.append('id', userReducer.user.id);
      formData.append('id', 1);

      api.post(`/hotel/getHotel.php`, formData)
      .then((res) => {
         setHotel(res.data)
         setLucro(res.data.lucro)
         setReceita(res.data.receita)
         setQuartosVendidos(res.data.quartosVendidos)
      })
      .catch((err) => {
         toast.error("Ocorreu um erro com o servidor")
      })
   }

   return (
      <div>
         <Header />
         <Title>
            <h2>{hotel ? hotel.nome : "Hotel"}</h2>
         </Title>
         <ContainerCards>
            <TextField
               id="outlined-required"
               label="Receita"
               variant="outlined"
               style={{ marginBottom: "1.5rem" }}
               onChange={(e) => setReceita(e.target.value)}
               value={receita}
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
               value={lucro}
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
               value={quartosVendidos}
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