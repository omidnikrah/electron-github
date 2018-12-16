// @flow
import React, { Component } from "react";
import StarIcon from "./assets/star.svg";
import ForkIcon from "./assets/fork.svg";
import RepositoryItemStyles from "./styles";

export default ({ data }: any) => (
  <RepositoryItemStyles>
    <div>
      <h2 className="repository-name">{data.name}</h2>
      <p className="repository-description">{data.description}</p>
    </div>
    <div>
      <span className="repo-stat">
        <img src={StarIcon} alt="Stars" /> {data.stargazers.totalCount}
      </span>
      <span className="repo-stat">
        <img src={ForkIcon} alt="Forks" /> {data.forkCount}
      </span>
    </div>
    {data.primaryLanguage && (
      <span
        className="repository-language"
        style={{ backgroundColor: data.primaryLanguage.color }}
      >
        {data.primaryLanguage.name}
      </span>
    )}
  </RepositoryItemStyles>
);
