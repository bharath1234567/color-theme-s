import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 10px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;