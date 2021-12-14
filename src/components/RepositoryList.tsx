import React, { useState } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

const RepositoryList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = useTypeSelector(
    (state: any) => state.repositories
  );
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
      {error && error}
      {loading && <p>loading...</p>}
      {!error &&
        !loading &&
        data.map((item: string) => <div key={item}>{item}</div>)}
    </div>
  );
};

export default RepositoryList;
