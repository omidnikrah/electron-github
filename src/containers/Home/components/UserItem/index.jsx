// @flow
import React, { Component } from 'react';
import UserItemStyles from './styles';

type Props = {
  data: any,
};

export default (props : Props) => (
  <UserItemStyles>
    <div className="user-info">
      <figure className="user-info--avatar">
        <img src={props.data.avatarUrl} alt={props.data.name} />
      </figure>
      <span className="user-info--name">{props.data.name}</span>
    </div>
    <span className="repositories-count">{props.data.repositories.totalCount}</span>
  </UserItemStyles>
);
