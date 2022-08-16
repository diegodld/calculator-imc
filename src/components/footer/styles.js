import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 2rem;
  background-color: var(--primary);

  & p {
    color: white;
  }
`;
