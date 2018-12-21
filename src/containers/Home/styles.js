// @flow
import styled from 'styled-components';
import RightArrowIcon from './assets/right.svg';

export default styled.div`
  text-align: center;
  padding: 50px;
  position: relative;
  height: 100%;
  .github--logo {
    width: 150px;
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
    opacity: 0.05;
  }
  .title {
    font-size: 16px;
    color: #929292;
    font-weight: 100;
    cursor: default;
    margin-bottom: 20px;
  }
  .search--form {
    width: 300px;
    display: block;
    margin: 0 auto;
    .input-wrapper {
      position: relative;
      .search--submit {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(0, -50%);
        appearance: none;
        border: 0;
        outline: 0;
        width: 20px;
        height: 17px;
        opacity: 0.3;
        cursor: pointer;
        transition: all 200ms ease;
        background: url(${RightArrowIcon}) no-repeat center/cover transparent;
      }
      .search--input {
        width: 100%;
        padding: 15px 35px;
        border: 0;
        background: #efefef;
        border-radius: 5px;
        font-size: 13px;
        text-align: center;
        outline: 0;
        color: #444;
        &[value=""] {
          & + .search--submit {
            opacity: 0;
            transform: translate(-5px, -50%);
            visibility: hidden;
          }
        }
      }
    }
  }
  .search-result {
    overflow-y: scroll;
    height: 360px;
    max-width: 400px;
    margin: 30px auto 0;
  }
`;
