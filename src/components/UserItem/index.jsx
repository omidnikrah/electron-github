// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import UserItemStyles from './styles';

type Props = {
  data: any
};

export default (props: Props) => (
  <Link to={`/user/${props.data.login}`}>
    <UserItemStyles>
      <div className="user-info">
        <figure className="user-info--avatar">
          <img src={props.data.avatarUrl} alt={props.data.name} />
        </figure>
        <div className="user-info--name">
          <span>{props.data.name}</span>
          <span>@{props.data.login}</span>
        </div>
      </div>
      {(props.data.repositories && props.data.repositories.totalCount) ? (
        <span className="repositories-count">
          {props.data.repositories.totalCount}
        </span>
      ): null}
    </UserItemStyles>
  </Link>
);
