import styled from "styled-components";

export const ContainerCards = styled.div`
   display: flex;
   justify-content: center;
   grid-gap: 3rem;
   padding: 3rem;
   margin: 0 auto;
`;

export const Title = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 5%;

   h2 {  
      font-size: 2rem;
      letter-spacing: .3rem;
   }
   
   h3 {  
      font-size: 1.5rem;
      letter-spacing: .3rem;
   }
`;

export const ButtonCalc = styled.button`
   border: 0px;
   border-radius: 5px;
   background-color: #0537ff;
   color: white;
   padding: .7rem 2.5rem;
   font-size: .85rem;
   margin: 0rem 0rem 1.5rem 0rem;
   cursor: pointer;
   display: flex;
   align-items: center;   
`;

export const ContainerCalcs = styled.div`
   width: 95%;
   display: flex;
   justify-content: center;
   padding: 2rem;
   overflow-x: hidden;
`;

export const GridUserInfo = styled.div`
   display: grid;
   border-radius: 15px;
   background: #ffffff;
   box-shadow: 0px 1px 5px 1px #ededed, -3px -3px 16px #ffffff;
   padding: 2rem;

   span {
      padding: 1rem;
      font-size: 1.3rem;
   }

   label {
      font-size: 0.9rem;
      margin: 0 0 .1rem 0;
      font-weight: 550;
   }
`;

export const BedroomContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   width: 70%;
   margin: 4% auto;
`;
