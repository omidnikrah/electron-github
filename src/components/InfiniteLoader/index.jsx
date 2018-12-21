// @flow

import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loading from "../../components/Loading";
import InfiniteLoaderStyles from "./styles";

type Props = {
  children: any,
  hasNextPage: boolean,
  onLoadMore: any
};
type State = {
  loading: boolean
};

export default class InfiniteLoader extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      loading: false
    };
    this.infiniteElem = React.createRef();
  }

  componentDidMount() {
    if (this.infiniteElem.current) {
      this.infiniteElem.current.addEventListener(
        "scroll",
        this.handleScrolling,
        false
      );
    }
  }

  componentWillUnmount() {
    this.infiniteElem.current.removeEventListener(
      "scroll",
      this.handleScrolling
    );
  }

  componentDidUpdate(np: any) {
    const { children } = this.props;
    if (np.children !== children) {
      this.setState({ loading: false });
    }
  }

  handleScrolling = ({ target }: any) => {
    const { scrollHeight, scrollTop } = target;
    const { loading } = this.state;
    const { hasNextPage, onLoadMore } = this.props;
    if (hasNextPage && !loading && scrollTop >= scrollHeight - 1000) {
      this.setState({ loading: true });
      onLoadMore();
    }
  };

  infiniteElem: any;

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <InfiniteLoaderStyles ref={this.infiniteElem}>
        {children}
        <TransitionGroup component={null}>
          {loading && (
            <CSSTransition timeout={350} classNames="fade">
              <div className="loading">
                <Loading />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </InfiniteLoaderStyles>
    );
  }
}
