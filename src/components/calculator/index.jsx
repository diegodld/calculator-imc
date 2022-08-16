import React, { useState } from "react";
import { Container, Form, Input, Button } from "./styles";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [IMC, setIMC] = useState(null);

  const handleWeightChange = ({ target }) => {
    setWeight(target.value);
  };

  const handleHeightChange = ({ target }) => {
    setHeight(target.value);
  };

  const calculateIMC = (event) => {
    event.preventDefault();
    if (!weight || !height) {
      window.alert("Preencha todos os campos!");
      return;
    }
    setIMC(Number(weight) / Math.pow(Number(height), 2));
  };

  return (
    <Container>
      <Form>
        <label htmlFor="weight">Peso(Kg): </label>
        <Input
          type="number"
          id="weight"
          placeholder="Ex:75"
          value={weight}
          onChange={handleWeightChange}
        />
        <label htmlFor="height">Altura(m): </label>
        <Input
          type="number"
          id="height"
          placeholder="Ex: 1.75"
          value={height}
          onChange={handleHeightChange}
        />
        <Button type="submit" onClick={calculateIMC}>
          Calcular
        </Button>
      </Form>
      <p>{IMC && `Seu IMC é: ${IMC.toFixed(2)}`}</p>
    </Container>
  );
}
