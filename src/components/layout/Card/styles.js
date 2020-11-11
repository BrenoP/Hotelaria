import styled from "styled-components";

export const CardContainer = styled.div`
   width: 40%;
   height: 12rem;
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

   h4 {
      text-align: left;
   }
`;