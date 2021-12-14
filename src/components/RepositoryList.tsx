import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState("");
  const state = useSelector((state) => state);
  console.log("state --> ", state);
  const { searchRepositories } = useActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
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
