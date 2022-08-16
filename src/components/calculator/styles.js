import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #eee7df;
  border-radius: 1rem;

  label {
    margin-bottom: 2px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-width: 0.5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0 auto;
  width: 10rem;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.5rem;
  background-color: var(--primary);
  cursor: pointer;
`;
