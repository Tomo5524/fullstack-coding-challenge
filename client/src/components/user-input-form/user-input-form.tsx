import React, { useState } from "react";
import ErrorMessageDisplay from "../commons/error-message/error-message";
import NavButton from "../commons/nav-button/nav-button";
import { ButtonContainer } from "../commons/nav-button/style";

import { gender, vehicles } from "./data";
import {
  Container,
  InputBox,
  FieldContainer,
  LabelTextBox,
  LabelText,
  Title,
} from "./style";

export interface UserInputFormType {
  firstName: string;
  lastName: string;
  fnameKana: string;
  lnameKana: string;
  gender: string;
  age: string;
  vehicleType: string;
  postCode: string;
  city: string;
  address: string; // including building names
  emailAddress: string;
}

interface UserInputFormProps {
  // handleUserInfo: () => void;
  userInfo: UserInputFormType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInputFormType>>;
  handleNextStage: () => void;
  handlePreviousStage: () => void;
}

const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const numericInputCheck = (value: string) => {
  return /^\d*\.?\d*$/.test(value);
};

const isHankaku = (value: string) => {
  return value.match(/^[ァ-ヶー　]+$/);
};

function UserInputForm({
  userInfo,
  setUserInfo,
  handleNextStage,
  handlePreviousStage,
}: UserInputFormProps) {
  const [errorMessage, setErrorMessage] = useState({
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

  const handleSetErrorMessage = (key: string, message: string) => {
    setErrorMessage((prevUserInfo) => ({
      ...prevUserInfo,
      [key]: message,
    }));
  };

  const handleUserInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePostCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 7) {
      if (numericInputCheck(e.target.value)) {
        handleSetErrorMessage(e.target.name, "");
        handleUserInfo(e);
      } else {
        handleSetErrorMessage(e.target.name, "数字で入力してください");
      }
    }
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numericInputCheck(e.target.value)) {
      if (errorMessage[e.target.value as keyof UserInputFormType] !== "") {
        handleSetErrorMessage(e.target.name, "");
      }
      // if value's length is bigger than 2, keep it 2.
      if (e.target.value.length > 2) {
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          [e.target.name]: e.target.value.slice(0, 2),
        }));
      } else {
        // first digit cannot be "0"
        if (e.target.value.length === 1) {
          if (e.target.value !== "0") {
            handleUserInfo(e);
          }
        } else {
          handleUserInfo(e);
        }
      }
    } else {
      if (e.target.value.length < 2) {
        handleSetErrorMessage(e.target.name, "数字で入力してください");
      }
    }
  };

  const handleHankaku = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isHankaku(e.target.value)) {
      handleSetErrorMessage(e.target.name, "");
    } else {
      // if there is no value, reset the error message
      if (e.target.value === "") {
        handleSetErrorMessage(e.target.name, "");
      } else {
        handleSetErrorMessage(e.target.name, "カタカナで入力してください");
      }
    }
    handleUserInfo(e);
  };

  const checkRequiredField = () => {
    // if flag stays true, that means all the fields are valid
    let flag = true;
    Object.keys(userInfo).forEach((key) => {
      if (userInfo[key as keyof UserInputFormType] === "") {
        flag = false;
        handleSetErrorMessage(key, "※必須");
      } else {
        if (key === "emailAddress" && !isValidEmail(userInfo.emailAddress)) {
          flag = false;
          handleSetErrorMessage(key, "正しいメールアドレスを入力してください");
        } else if (key === "fnameKana" && !isHankaku(userInfo.fnameKana)) {
          flag = false;
          handleSetErrorMessage(key, "カタカナで入力してください");
        } else if (key === "lnameKana" && !isHankaku(userInfo.lnameKana)) {
          flag = false;
          handleSetErrorMessage(key, "カタカナで入力してください");
        }
        // if all the files are valid, reset the existing error messages and keep the flag true.
        else if (errorMessage[key as keyof UserInputFormType] !== "") {
          handleSetErrorMessage(key, "");
        }
      }
    });
    return flag;
  };

  const handleGoToNext = () => {
    // check required filed
    if (checkRequiredField()) {
      handleNextStage();
    }
  };

  return (
    <Container>
      <Title>Please Enter User Information</Title>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>First Name</LabelText>
            <ErrorMessageDisplay text={errorMessage.firstName} />
          </LabelTextBox>
          <InputBox>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleUserInfo}
              value={userInfo.firstName}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Last Name</LabelText>
            <ErrorMessageDisplay text={errorMessage.lastName} />
          </LabelTextBox>
          <InputBox>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleUserInfo}
              value={userInfo.lastName}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>First Name (カタカナ)</LabelText>
            <ErrorMessageDisplay text={errorMessage.fnameKana} />
          </LabelTextBox>
          <InputBox>
            <input
              name="fnameKana"
              type="text"
              placeholder="First Name (カタカナ)"
              onChange={handleHankaku}
              value={userInfo.fnameKana}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Last Name (カタカナ)</LabelText>
            <ErrorMessageDisplay text={errorMessage.lnameKana} />
          </LabelTextBox>
          <InputBox>
            <input
              name="lnameKana"
              type="text"
              placeholder="Last Name (カタカナ)"
              onChange={handleHankaku}
              value={userInfo.lnameKana}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Gender</LabelText>
            <ErrorMessageDisplay text={errorMessage.gender} />
          </LabelTextBox>
          <InputBox>
            <select
              name="gender"
              onChange={(e) => handleUserInfo(e)}
              value={userInfo.gender}
            >
              {gender.map((item, index) => {
                return (
                  <option key={`${item}-${index}`} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Age</LabelText>
            <ErrorMessageDisplay text={errorMessage.age} />
          </LabelTextBox>
          <InputBox>
            <input
              type="text"
              name="age"
              value={userInfo.age}
              onChange={handleAge}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Vehicle Type</LabelText>
            <ErrorMessageDisplay text={errorMessage.vehicleType} />
          </LabelTextBox>
          <InputBox>
            <select
              name="vehicleType"
              onChange={(e) => handleUserInfo(e)}
              value={userInfo.vehicleType}
            >
              {vehicles.map((vehicle, index) => {
                return (
                  <option key={`${vehicle}-${index}`} value={vehicle}>
                    {vehicle}
                  </option>
                );
              })}
            </select>
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Post Code</LabelText>
            <ErrorMessageDisplay text={errorMessage.postCode} />
          </LabelTextBox>
          <InputBox>
            <input
              name="postCode"
              type="text"
              value={userInfo.postCode}
              onChange={handlePostCode}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>City</LabelText>
            <ErrorMessageDisplay text={errorMessage.city} />
          </LabelTextBox>
          <InputBox>
            <input
              name="city"
              type="text"
              onChange={handleUserInfo}
              value={userInfo.city}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Home Address</LabelText>
            <ErrorMessageDisplay text={errorMessage.address} />
          </LabelTextBox>
          <InputBox>
            <input
              name="address"
              type="text"
              onChange={handleUserInfo}
              value={userInfo.address}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <label>
        <FieldContainer>
          <LabelTextBox>
            <LabelText>Email</LabelText>
            <ErrorMessageDisplay text={errorMessage.emailAddress} />
          </LabelTextBox>
          <InputBox>
            <input
              name="emailAddress"
              type="email"
              value={userInfo.emailAddress}
              onChange={handleUserInfo}
            />
          </InputBox>
        </FieldContainer>
      </label>
      <ButtonContainer>
        <NavButton handleClick={handlePreviousStage} variant="left" />
        <NavButton handleClick={handleGoToNext} variant="right" />
      </ButtonContainer>
    </Container>
  );
}

export default UserInputForm;
