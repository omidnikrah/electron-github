// @flow

import styled from 'styled-components';

export default styled.div`
  width: 100%;
  padding: 20px;
  max-width: 450px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.03);
  cursor: pointer;
  .user-info {
    display: flex;
    align-items: center;
    &--avatar {
      width: 50px;
      height: 50px;
      border-radius: 10rem;
      overflow: hidden;
      margin: 0;
      float: left;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--name {
      float: left;
      font-size: 15px;
      color: #444;
      margin-left: 20px;
    }
  }
  .repositories-count {
    background-color: #ff5959;
    padding: 10px;
    border-radius: 10rem;
    color: #fff;
    font-size: 13px;
    line-height: 1;
    min-height: 35px;
    display: inline-block;
    min-width: 35px;
  }
`;
