import styled from "styled-components";

export const ContainerCards = styled.div`
   display: grid;
   grid-template-columns: 5fr 1fr;
   grid-gap: 3rem;
   padding: 3rem;
   width: 35%;
   margin: 0 auto;
`;

export const Title = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3%;

   h2 {  
      font-size: 2rem;
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

export const CardCalc = styled.div`
   width: 10rem;
   height: 5rem; 
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 1rem;
   padding: 1rem;
   background: #ffffff;
   border-radius: ${(props) => props.profile ? "20px" : "10px"};
   box-shadow: ${(props) => props.profile ? 
   "16px 16px 33px #c2c2c2, -16px -16px 33px #ffffff" : 
   "0px 0px 15px #c2c2c2, 0px 0px 0px #ffffff"};
   cursor: pointer;

   &:hover {
      background: ${(props) => props.profile ? "#ffffff" : "linear-gradient(145deg, #ffffff, #e6e6e6)"};
   }
`;