import React, { useState, useEffect, useReducer } from "react";
import AppPresenter from "./AppPresenter";
import axios from "axios";
import { MASTER_NODE, SELF_P2P, SELF_NODE } from "../../constant";

interface IProps {
  sharedPort: number;
}

interface ISendData {
  address: string;
  amount: number;
}

const AppContainer = (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [sendData, setSendData] = useReducer(
    (prev, next): ISendData => ({ ...prev, ...next }),
    { address: "", amount: 0 }
  );

  useEffect(() => {
    registOnMaster(props.sharedPort);
    getAddress(props.sharedPort).then(result => setAddress(result));
    setInterval(() => getBalance(props.sharedPort), 1000);
  }, [props.sharedPort]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSendData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendSubmit(props.sharedPort, sendData);
  };

  return (
    <AppPresenter
      loading={loading}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
};

const sendSubmit = async (port: number, data: ISendData) => {
  const res = await axios.post(`${SELF_NODE(port)}/transactions`, data);
};

const registOnMaster = async (port: number) => {
  const res = await axios.post(`${MASTER_NODE}/peers`, {
    peer: SELF_P2P(port)
  });
  console.log(res);
};

const getAddress = async (port: number) => {
  const res = await axios.get(`${SELF_NODE(port)}/me/address`);
  return res.data;
};

const getBalance = async (port: number) => {
  const res = await axios.get(`${SELF_NODE(port)}/me/balance`);
  return res.data;
};

export default AppContainer;
