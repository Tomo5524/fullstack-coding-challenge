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

  // make api Call here
  // const handleSubmit = () => {}
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // all the other important data is all checked at this point except for selected option. if data was modified on front end (for example, using react dev tool to change component state), we still check it on backend so we will still be able to catch such errors.
    if (selectedOption !== "") {
      const outputData = { selectedProduct, userInfo, selectedOption };
      try {
        const data = await fetch(
          `${process.env.REACT_APP_ENDPOINT}/api/users`,
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ outputData }),
          }
        );
        const res = await data.json();
        if (res) {
          setCurrentStage(3);
        } else {
          console.log("data was sent to backend but error occurred");
          setErrorMessage("お客様の個人情報が正確に保存されませんでした。");
        }
      } catch (e) {
        setErrorMessage(
          "サーバの不具合が生じてるため後ほどお手数ですが改めてお願いします。"
        );
      }
    } else {
      setErrorMessage("オプションを選択してください。");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* use form here? */}
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
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleNextStage={handleNextStage}
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
