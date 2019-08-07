import React, { Dispatch, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import {
  Card,
  Key,
  KeyName,
  Title,
  // Notification,
  Button,
  SharedInput
} from "../Shared";

const Header = styled.div`
  margin: 50px 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppContainer = styled.div`
  background-color: #f2f6fa;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SendTxForm = styled.form`
  margin-top: 25px;
`;

const Submit = styled(SharedInput)`
  margin-right:10px;
  border: 2px solid #305371;
  box-shadow:none;
  &:hover{
      box-shadow:none;
      transform:none;
  }
  &:disabled{
      color:#999;
      border: 2px solid #999;
      cursor:not-allowed;
      box-shadow:none;
  }
`;

const Input = styled(Submit)`
  width: 200px;
  padding-left: 10px;
  &:active {
    background-color: transparent;
  }
  color: ${(props: any) => (props && props.hasError ? "#e74c3c" : "inherit")};
  border-color: ${(props: any) => (props && props.hasError ? "#e74c3c" : "inherit")};
`;

interface IProps {
  loading: boolean;
  address: string;
  balance: number;
  isMining: boolean;
  mineBlock: () => void;
  handleInput: Dispatch<ChangeEvent<HTMLInputElement>>;
  handleSubmit: Dispatch<FormEvent<HTMLFormElement>>;
  data: ISendData;
}

const AppPresenter = (props: IProps) => {
  return (
    <AppContainer>
      <Header>
        <Title>{props.loading ? "Loading..." : "Nomadcoin Wallet"}</Title>
        <Button disabled={props.isMining} onClick={props.mineBlock}>
          {props.isMining ? "Mining" : "Mine"}
        </Button>
      </Header>
      <Card>
        <Key>
          <KeyName>Your address:</KeyName> <Key>{props.address}</Key>
        </Key>
        <Key>
          <KeyName>Your balance:</KeyName> {props.balance} NMD
      </Key>
      </Card>
      <Card>
        <Key>Send NMD: </Key>
        <SendTxForm onSubmit={props.handleSubmit}>
          <Input
            as="input"
            placeholder={"Address"}
            required
            name="address"
            value={props.data.address}
            onChange={props.handleInput}
          />
          <Input
            as="input"
            placeholder={"Amount"}
            required
            name="amount"
            type="number"
            value={props.data.amount || ""}
            onChange={props.handleInput}
            max={props.balance}
          />
          <Submit
            value={"Send"}
            type={"submit"}
            readOnly
            disabled={!props.data.address || !props.data.amount}
          />
        </SendTxForm>
      </Card>
    </AppContainer>
  );
};

export default AppPresenter;
