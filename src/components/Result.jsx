import React from "react";
import styled from "styled-components";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Result = (props) => {
  const output = props.result.map((result) => (
    <Row key={result.year}>
      <Content>{result.year}</Content>
      <Content>{formatter.format(result.savingsEndOfYear)}</Content>
      <Content>{formatter.format(result.yearlyInterest)}</Content>
      <Content>
        {formatter.format(
          result.savingsEndOfYear -
            props.intialInvestment -
            result.yearlyContribution * result.year
        )}
      </Content>
      <Content>
        {formatter.format(
          props.intialInvestment + result.yearlyContribution * result.year
        )}
      </Content>
    </Row>
  ));

  return (
    <React.Fragment>
      <Wrapper>
        <TableHead>
          <Row>
            <Head>Year</Head>
            <Head>Total Saving</Head>
            <Head>Interest (Year)</Head>
            <Head>Total Interest</Head>
            <Head>Investmented Capital</Head>
          </Row>
        </TableHead>
        <TabelBody>{output}</TabelBody>
      </Wrapper>
    </React.Fragment>
  );
};

export default Result;

const Wrapper = styled.table`
  padding: 30px;
  border-radius: 5px;
  background: #24262a;
`;

const TableHead = styled.thead`
  margin-bottom: 10px;
  firs
`;

const Row = styled.tr`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 15px;
`;

const Head = styled.th`
  color: #eceff2;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  width: 150px;
  text-align: right;
  &:first-of-type {
    width: 40px;
  }
`;

const TabelBody = styled.tbody``;

const Content = styled.td`
  color: #eceff2;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: 150px;
  text-align: right;
  &:first-of-type {
    width: 40px;
  }
`;
