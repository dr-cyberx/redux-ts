import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../state";

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreator.searchRepositories(term));
    console.log("term =>> ", term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Enter package name'
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoryList;
