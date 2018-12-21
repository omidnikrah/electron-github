// @flow
import React, { Component } from "react";
import RepositoryItem from "../../../../components/RepositoryItem";
import InfiniteLoader from "../../../../components/InfiniteLoader";

type Props = {
  data: any,
  hasLoadMore: boolean,
  onLoadMore: any
};
type State = {};

export default class RepositoriesWrapper extends Component<Props, State> {
  render() {
    const { data, hasLoadMore, onLoadMore } = this.props;
    return (
      <div id="repositories--item">
        <InfiniteLoader hasNextPage={hasLoadMore} onLoadMore={onLoadMore}>
          {data.map((repository: any, index: number) => (
            <RepositoryItem data={repository} key={index} />
          ))}
        </InfiniteLoader>
      </div>
    );
  }
}
