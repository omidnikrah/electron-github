// @flow
import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Form, Field } from 'react-final-form';
import gql from 'graphql-tag';
import { Query, withApollo } from 'react-apollo';
import Loading from '../../components/Loading';
import githubLogo from './assets/logo.svg';
import HomeStyles from './styles';
import UserItem from './components/UserItem';

type Props = {
  client : any
};

type State = {
  loading : boolean,
  searchTerm : string,
  searchList : any,
  pagination : any,
};

const SEARCH_USER = gql`
  query($username: String!, $nextPage: String) {
    search(query: $username, type: USER, first: 100, after: $nextPage) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ... on User {
            name
            login
            avatarUrl
            repositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;

class HomePage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      searchTerm: '',
      searchList: [],
      pagination: [],
    };
    this.resultElem = React.createRef();
  }

  componentDidMount() {
    if (this.resultElem.current) {
      this.resultElem.current.addEventListener('scroll', this.handleResultScrolling);
    }
  }

  handleSubmit = ({ username }) => {
    const { client } = this.props;
    this.setState({
      loading: true,
      searchTerm: username,
    });
    client
      .query({
        query: SEARCH_USER,
        variables: {
          username
        }
      })
      .then(({ data }) => {
        this.setState({
          loading: false,
          searchList: data.search.edges,
          pagination: data.search.pageInfo,
        });
      })
      .catch(err => {
        console.warn(err);
      });
  };

  loadMore = (username, nextPage) => {
    const { client } = this.props;
    this.setState({ loading: true });
    client
      .query({
        query: SEARCH_USER,
        variables: {
          username,
          nextPage,
        }
      })
      .then(({ data }) => {
        this.setState(({ searchList }) => ({
          loading: false,
          searchList: [...searchList, ...data.search.edges],
          pagination: data.search.pageInfo,
        }));
      })
      .catch(err => {
        console.warn(err);
      });
  };

  handleResultScrolling = ({ target } : any) => {
    const { scrollHeight, scrollTop } = target;
    const { pagination: { hasNextPage, endCursor }, loading, searchTerm } = this.state;
    if (hasNextPage && !loading && (scrollTop >= (scrollHeight - 500))) {
      this.loadMore(searchTerm, endCursor);
    }
  };

  resultElem : any;

  render() {
    const { loading, searchList } = this.state;
    return (
      <HomeStyles>
        <img className="github--logo" src={githubLogo} alt="GitHub logo" />
        <h2 className="title">Type Username, Press Enter</h2>
        <Form
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit} className="search--form">
              <div className="input-wrapper">
                {/* $FlowFixMe */}
                <Field
                  name="username"
                  className="search--input"
                  component="input"
                  placeholder="Enter Username"
                />
                <button
                  type="submit"
                  className="search--submit"
                  disabled={pristine || invalid}
                />
              </div>
            </form>
          )}
        />
        <TransitionGroup component={null}>
          {loading && (
            <CSSTransition timeout={350} classNames="fade">
              <div className="loading"><Loading /></div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div className="search-result" ref={this.resultElem}>
          {searchList.length > 0 &&
            searchList.map((searchItem: any, index: any) => (
              <UserItem data={searchItem.node} key={index} />
            ))}
        </div>

        {/* <Query query={SEARCH_USER} variables={{ username: 'omid' }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const userList = data.search.edges.map((user : any, index : any) => (
              <UserItem data={user.node} key={index} />
            ));
            
            return <div className="search-result">{userList}</div>;
          }}
        </Query> */}
      </HomeStyles>
    );
  }
}

export default withApollo(HomePage);
