import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 3px;
  max-width: 450px;
`;
export const ThemeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  margin: 8px 0 0 10px ;
  padding: 10px 10px 0 10px;
   border-radius: 5px;
   color: ${({ theme }) => theme.colors.quoteTitle};

 `;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.quoteTitle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.quoteBody};
  padding: 10px;
`;
export const CardsContainer = styled.section`
  margin: 50px;
`;
