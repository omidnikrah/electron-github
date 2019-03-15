// @flow
import styled from 'styled-components';

export default styled.div `
  text-align: center;
  padding: 50px;
  position: relative;
  height: 100%;
  #repositories-container {
    width: calc(100% - 250px);
    float: right;
    #repositories--header {
      display: inline-block;
      width: 100%;
      text-align: left;
      h3 {
        font-weight: 100;
        letter-spacing: 3px;
        font-size: 18px;
      }
      span {
        font-size: 13px;
        font-weight: 100;
        color: #afafaf;
        letter-spacing: 1.2px;
      }
    }
    #repositories--item {
      margin: 40px -10px;
      height: 81.4vh;
    }
  }
`;
