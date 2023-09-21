import React, { useState } from "react";
import styled from "styled-components";

const defaultValue = {
  current: 10000,
  yearly: 1200,
  expected: 7,
  duration: 3,
};

const InvestmentForm = (props) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(inputValue);
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setInputValue(defaultValue);
  };

  const changeHandler = (input, value) => {
    setInputValue((prevValue) => {
      return { ...prevValue, [input]: +value };
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormBody>
        <FormItem>
          <Label htmlFor="current">Current Savings($)</Label>
          <Input
            onChange={(event) => changeHandler("current", event.target.value)}
            type="number"
            id="current"
            value={inputValue["current"]}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="yearly">Yearly Savings($)</Label>
          <Input
            onChange={(event) => changeHandler("yearly", event.target.value)}
            type="number"
            id="yearly"
            value={inputValue["yearly"]}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="Expected">Expected Interest(%/year)</Label>
          <Input
            onChange={(event) => changeHandler("expected", event.target.value)}
            type="number"
            id="expected"
            value={inputValue["expected"]}
          />
        </FormItem>
        <FormItem>
          <Label htmlFor="duration">Investment Duration(Year)</Label>
          <Input
            type="number"
            id="duration"
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={inputValue["duration"]}
          />
        </FormItem>
      </FormBody>
      <FormFooter>
        <ButtonAlt type="reset" onClick={resetHandler}>
          Reset
        </ButtonAlt>
        <Button type="submit">Calculate</Button>
      </FormFooter>
    </Form>
  );
};

export default InvestmentForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  gap: 40px;
  margin-bottom: 60px;
`;

const FormBody = styled.div`
  background-color: #2a2e31;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 20px 15px 20px 0px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 240px 240px;
  gap: 30px 35px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Label = styled.label`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weigjt: 400;
  margin-bottom: 3px;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  color: #fff;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  border-radius: 10px;
  background: #212326;
  border: none;
`;

const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Button = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #eceff2;
  background: #e04b46;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: #212326;
  }
`;

const ButtonAlt = styled(Button)`
  color: #212326;
  border: 1px solid #e04b46;
  background: #eceff2;
  &:hover {
    background: #212326;
    color: #fff;
  }
`;
