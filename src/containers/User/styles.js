// @flow
import styled from 'styled-components';
import RightArrowIcon from './assets/right.svg';

export default styled.div `
  text-align: center;
  padding: 50px;
  position: relative;
  height: 100%;
  #user-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 250px;
    box-shadow: 5px 0 10px rgba(0,0,0,0.01);
    padding: 50px 20px;
  }
  .user-avatar {
    margin: 0;
    width: 150px;
    height: 150px;
    border-radius: 10rem;
    box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user-details {
      text-align: center;
      margin-top: 20px;
      .user-name {
        font-weight: bold;
        font-size: 25px;
        line-height: 1;
      }
      .user-username {
        font-size: 13px;
        font-weight: 100;
        opacity: 0.5;
      }
     .user-bio {
       font-size: 14px;
       font-weight: 100;
       margin-top: 20px;
     }
     .user-website {
       display: block;
     }
    }
    ul.user-info {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px dashed rgba(0,0,0,0.05);
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      li {
        display: inline-flex;
        align-items: center;
        &:not(:last-child) {
          margin-bottom: 15px;
        }
        img {
          width: 15px;
        }
        span, a {
          margin-left: 10px;
          text-align: left;
          color: #444;
          font-size: 14px;
          font-weight: 100;
        }
      }
    }
`;
