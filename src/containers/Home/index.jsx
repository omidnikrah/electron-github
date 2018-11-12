// @flow
import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import githubLogo from './assets/logo.svg';
import HomeStyles from './styles';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <HomeStyles>
        <img className="github--logo" src={githubLogo} alt="GitHub logo" />
        <h2 className="title">Type Username, Press Enter</h2>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit} className="search--form">
              <div className="input-wrapper">
                {/* $FlowFixMe */}
                <Field
                  name="firstName"
                  className="search--input"
                  component="input"
                  placeholder="Enter Username"
                />
                <button type="submit" className="search--submit" disabled={pristine || invalid} />
              </div>
            </form>
          )}
        />
      </HomeStyles>
    );
  }
}
