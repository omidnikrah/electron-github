// @flow
import styled from "styled-components";
import RightArrowIcon from "./assets/right.svg";

export default styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 250px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.01);
  padding: 50px 20px;
  .user-avatar {
    margin: 0;
    width: 150px;
    height: 150px;
    border-radius: 10rem;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.03);
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
    border-top: 1px dashed rgba(0, 0, 0, 0.05);
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
      span,
      a {
        margin-left: 10px;
        text-align: left;
        color: #444;
        font-size: 14px;
        font-weight: 100;
      }
    }
  }
  .back-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    appearance: none;
    border: 0;
    padding: 15px;
    width: 100%;
    background-color: #f9f9f9;
    font-size: 12px;
    color: #555;
    cursor: pointer;
    outline: 0;
    &::after {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      left: 20px;
      top: 50%;
      transform: translateY(-50%) scaleX(-1);
      background-image: url(${RightArrowIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.5;
    }
  }
  .user-followers--wrapper {
    position: absolute;
    bottom: 45px;
    right: 0;
    left: 0;
    display: flex;
    & > a {
      flex: 1;
      text-align: center;
      padding: 10px 0;
      font-size: 12px;
      font-weight: 100;
      color: #c1c1c1;
      transition: color 200ms ease;
      &:hover {
        color: #848484;
        span {
          color: #848484;
        }
      }
      &.active {
        color: #848484;
        pointer-events: none;
        span {
          color: #848484;
        }
      }
      &:not(:last-child) {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 50%;
          background-color: #ececec;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      span {
        display: block;
        color: #b9b9b9;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: color 200ms ease;
      }
    }
  }
`;
