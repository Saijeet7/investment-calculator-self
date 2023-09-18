import React from "react";
import styled from "styled-components";

const Result = () => {
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
        <TabelBody>
          <Row>
            <Content>1</Content>
            <Content>227</Content>
            <Content>7</Content>
            <Content>7</Content>
            <Content>220</Content>
          </Row>
          <Row>
            <Content>1</Content>
            <Content>227</Content>
            <Content>7</Content>
            <Content>7</Content>
            <Content>220</Content>
          </Row>
          <Row>
            <Content>1</Content>
            <Content>227</Content>
            <Content>7</Content>
            <Content>7</Content>
            <Content>220</Content>
          </Row>
        </TabelBody>
      </Wrapper>
    </React.Fragment>
  );
};

export default Result;

const Wrapper = styled.table``;

const TableHead = styled.thead``;

const Row = styled.tr``;

const Head = styled.th``;

const TabelBody = styled.tbody``;

const Content = styled.td``;
