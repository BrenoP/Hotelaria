import styled from "styled-components";

export const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding: 1.5rem;
   background-color: #006eff;
   color: white;
   cursor: pointer;

   h4 {
      text-align: left;
      font-size: 1.5rem;
   }

   div {
      margin-right: 3%;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
         text-decoration: underline;
      }

      span {
         margin-right: .5rem;
      }
   }
`;