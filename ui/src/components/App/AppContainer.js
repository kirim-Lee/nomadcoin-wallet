import React, {
  useState,
  useEffect
} from "react";
import AppPresenter from "./AppPresenter";
import axios from "axios";
import {
  MASTER_NODE,
  SELF_P2P,
  SELF_NODE
} from "../../constant";

const AppContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");

  useEffect(() => {
    registOnMaster(props.sharedPort);
    getAddress(props.sharedPort).then(result => setAddress(result));
    setInterval(() => getBalance(props.sharedPort), 1000);
  }, [props.sharedPort]);

  return <AppPresenter loading = {
    loading
  }
  />;
};

const registOnMaster = async (port) => {
  const res = await axios.post(`${MASTER_NODE}/peers`, {
    peer: SELF_P2P(port)
  });
  console.log(res);
};

const getAddress = async (port) => {
  const res = await axios.get(`${SELF_NODE(port)}/me/address`);
  return res.data;
};

const getBalance = async (port) => {
  const res = await axios.get(`${SELF_NODE(port)}/me/balance`);
  return res.data;
};

export default AppContainer;