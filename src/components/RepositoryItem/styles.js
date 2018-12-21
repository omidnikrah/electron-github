// @flow
import styled from 'styled-components';

export default styled.div`
  width: calc(50% - 20px);
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  margin: 10px;
  height: 200px;
  vertical-align: top;
  text-align: left;
  float: left;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  .repository-name {
    font-size: 18px;
    font-weight: 500;
    word-wrap: break-word;
    max-height: 50px;
    overflow: hidden;
  }
  .repository-description {
    font-size: 14px;
    font-weight: 100;
    margin-top: 10px;
    color: #757575;
    word-wrap: break-word;
    max-height: 55px;
    overflow: hidden;
  }
  .repo-stat {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    opacity: 0.7;
    transition: opacity 200ms ease;
    &:hover {
      opacity: 1;
    }
    img {
      height: 15px;
      margin-right: 10px;
    }
  }
  .repository-language {
    position: absolute;
    bottom: -20px;
    right: 0;
    left: 0;
    text-align: center;
    padding: 5px;
    font-size: 10px;
    color: #fff;
    transition: bottom 200ms ease;
    &:hover {
      bottom: 0;
    }
  }
`;
