import styled from "styled-components";

export const LoginContainer = styled.div`
   height: 90vh;
`;

export const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;

   h3 {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-bottom: 1.5rem;
   }

   button {
      border: 0px;
      border-radius: 5px;
      background-color: #0537ff;
      color: white;
      padding: .7rem 2.5rem;
      font-size: .85rem;
      margin-top: 3rem;
      cursor: pointer;
   }
`;