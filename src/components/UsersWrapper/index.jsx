// @flow
import React, { Component } from "react";
import RepositoryItem from "../RepositoryItem";
import InfiniteLoader from "../InfiniteLoader";
import UserItem from "../UserItem";

type Props = {
  data: any,
  hasLoadMore: boolean,
  onLoadMore: any
};
type State = {};

export default class UsersWrapper extends Component<Props, State> {
  render() {
    const { data, hasLoadMore, onLoadMore } = this.props;
    return (
      <div id="users--item">
        <InfiniteLoader hasNextPage={hasLoadMore} onLoadMore={onLoadMore}>
          {data.map((user: any, index: number) => (
            <UserItem data={user} key={`user-item--${index}`} />
          ))}
        </InfiniteLoader>
      </div>
    );
  }
}
