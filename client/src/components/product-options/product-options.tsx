import React, { useCallback, useMemo } from "react";
import useErrorMessage from "../../utils/use-error-message";
import Card from "../commons/card/card";
import ErrorMessageDisplay from "../commons/error-message/error-message";
import NavButton from "../commons/nav-button/nav-button";
import { productOptions } from "./data";
import { Container, ProductList } from "./style";

interface ProductOptionsProps {
  setSelectedProduct: (product: string) => void;
  handleNextStage: () => void;
  selectedProduct: string;
}

function ProductOptions({
  setSelectedProduct,
  handleNextStage,
  selectedProduct,
}: ProductOptionsProps) {
  const { errorMessage, setErrorMessage } = useErrorMessage();

  const handleClick = useCallback(
    (product: string) => {
      setSelectedProduct(product);
    },
    [setSelectedProduct]
  );

  const productLists = useMemo(() => {
    return productOptions.map((product, idx) => {
      return (
        <li key={`${product.id}-${product}`}>
          <Card
            text={product.text}
            imgPath={product.imgPath}
            handleClick={handleClick}
            productId={product.id}
            isActive={product.text === selectedProduct}
            idx={idx}
          />
        </li>
      );
    });
  }, [handleClick, selectedProduct]);

  const handleGoToNext = () => {
    if (selectedProduct === "") {
      setErrorMessage("製品を選んでください");
    } else {
      handleNextStage();
    }
  };

  return (
    <Container>
      <ProductList>{productLists}</ProductList>
      <ErrorMessageDisplay text={errorMessage} />
      <NavButton handleClick={handleGoToNext} variant="right" />
    </Container>
  );
}

export default ProductOptions;
