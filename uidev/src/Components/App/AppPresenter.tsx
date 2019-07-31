import React, { Dispatch } from "react";

interface IProps {
  loading: boolean;
  handleInput: Dispatch<React.ChangeEvent<HTMLInputElement>>;
  handleSubmit: Dispatch<React.FormEvent<HTMLFormElement>>;
}

const AppPresenter = (props: IProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>react !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          {props.loading}
        </a>
      </header>
    </div>
  );
};

export default AppPresenter;
