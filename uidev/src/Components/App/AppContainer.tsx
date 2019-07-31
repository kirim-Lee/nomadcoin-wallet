import React, { useState, useEffect } from "react";
import AppPresenter from "./AppPresenter";
import axios from "axios";
import { MASTER_NODE, SELF_P2P, SELF_NODE } from "../../constant";

interface IProps {
  sharedPort: number;
}

const AppContainer = (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");

  useEffect(() => {
    registOnMaster(props.sharedPort);
    getAddress(props.sharedPort).then(result => setAddress(result));
  }, [props.sharedPort]);

  return <AppPresenter loading={loading} />;
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

export default AppContainer;
