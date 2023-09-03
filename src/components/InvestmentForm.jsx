import React from "react";
import styled from "styled-components";

const InvestmentForm = () => {
  return (
    <Form>
      <FormBody>
        <FormItem>
          <Label for="current">Current Savings($)</Label>
          <Input type="number" id="current" placeholder="100" />
        </FormItem>
        <FormItem>
          <Label for="yearly">Yearly Savings($)</Label>
          <Input type="number" id="yearly" placeholder="120" />
        </FormItem>
        <FormItem>
          <Label for="Expected">Expected Interest(%/year)</Label>
          <Input type="number" id="Expected" placeholder="3" />
        </FormItem>
        <FormItem>
          <Label for="duration">Investment Duration(Year)</Label>
          <Input type="number" id="duration" placeholder="3" />
        </FormItem>
      </FormBody>
      <FormFooter>
        <ButtonAlt>Reset</ButtonAlt>
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
