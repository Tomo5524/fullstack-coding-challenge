import React, { useMemo, useState } from "react";
import CTAButton from "../commons/cta-button/cta-button";
import { insuranceList } from "../insurance-options/data";
import { Container } from "../product-options/style";

interface PaymentProps {
  selectedOption: string;
}

function Payment({ selectedOption }: PaymentProps) {
  const index = insuranceList.findIndex(
    (option) => option.insuranceOption === selectedOption
  );
  const price = insuranceList[index].price;
  const handlePayment = () => {
    // handle payment here
    console.log("payment has been completed");
  };
  return (
    <Container>
      <h2>合計金額： {price}</h2>
      <CTAButton text="会計" onClick={handlePayment}></CTAButton>
    </Container>
  );
}

export default Payment;
