import { FormEvent, useCallback, useState } from "react";
import useErrorMessage from "../../utils/use-error-message";
import InsuranceOptions from "../insurance-options/insurance-options";
import Payment from "../payment/payment";
import ProductOptions from "../product-options/product-options";
import UserInputForm from "../user-input-form/user-input-form";

function Home() {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    fnameKana: "",
    lnameKana: "",
    gender: "",
    age: "",
    vehicleType: "",
    postCode: "",
    city: "",
    address: "", // including building names
    emailAddress: "",
  });
  const { errorMessage, setErrorMessage } = useErrorMessage();

  const handleNextStage = useCallback(() => {
    setCurrentStage(currentStage + 1);
  }, [currentStage]);

  const handlePreviousStage = useCallback(() => {
    setCurrentStage(currentStage - 1);
  }, [currentStage]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // all the other important data is all checked at this point except for selected option. if data was modified on front end (for example, using react dev tool to change component state), we still check it on backend so we will still be able to catch such errors.
    if (selectedOption !== "") {
      // const outputData = { selectedProduct, userInfo, selectedOption };
      // try {
      //   const data = await fetch(
      //     `${process.env.REACT_APP_ENDPOINT}/api/users`,
      //     {
      //       mode: "cors",
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ outputData }),
      //     }
      //   );

      try {
        const data = await fetch(
          `${process.env.REACT_APP_ENDPOINT}/api/users`,
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product: selectedProduct,
              option: selectedOption,
              user: userInfo,
            }),
          }
        );
        const res = await data.json();
        console.log("🚀 ~ file: home.tsx:56 ~ handleSubmit ~ res", res);
        if (res.message) {
          setErrorMessage(res.message);
        }
        // backend's validation catches errors
        else if (res.code === "invalid_type" || res.message === "Required") {
          console.log("data was sent to backend but error occurred");
          setErrorMessage(
            "お客様の個人情報に誤りが確認されました。もう一度情報のご確認をお願いします"
          );
        } else {
          setCurrentStage(3);
        }
      } catch (error: any) {
        console.log(error.data.message);
        setErrorMessage(
          "サーバの不具合が生じてるため後ほどお手数ですが改めてお願いします。"
        );
      }
    }
    // no option is selected
    else {
      setErrorMessage("オプションを選択してください。");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {currentStage === 0 && (
          <ProductOptions
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            handleNextStage={handleNextStage}
          />
        )}
        {currentStage === 1 && (
          <UserInputForm
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            handleNextStage={handleNextStage}
            handlePreviousStage={handlePreviousStage}
          />
        )}
        {currentStage === 2 && (
          <InsuranceOptions
            setSelectedOption={setSelectedOption}
            handlePreviousStage={handlePreviousStage}
            errorMessageDB={errorMessage}
          />
        )}
      </form>
      {currentStage === 3 && <Payment selectedOption={selectedOption} />}
    </>
  );
}

export default Home;
