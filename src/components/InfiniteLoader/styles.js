// @flow

import styled from 'styled-components';

export default styled.div`
  overflow-y: scroll;
  height: 100%;
  position: relative;
  .loading {
    height: 95px;
    display: inline-block;
    width: 100%;
    /* position: absolute;
    left: 0;
    right: 0;
    width: auto;
    bottom: 0px;
    background: -moz-linear-gradient(top, rgba(250,250,250,0) 0%, rgba(250,250,250,0.02) 1%, rgba(250,250,250,0.85) 48%, rgba(250,250,250,1) 100%);
    background: -webkit-linear-gradient(top, rgba(250,250,250,0) 0%,rgba(250,250,250,0.02) 1%,rgba(250,250,250,0.85) 48%,rgba(250,250,250,1) 100%);
    background: linear-gradient(to bottom, rgba(250,250,250,0) 0%,rgba(250,250,250,0.02) 1%,rgba(250,250,250,0.85) 48%,rgba(250,250,250,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00fafafa', endColorstr='#fafafa',GradientType=0 ); */
    padding: 25px 50px;
    line-height: 1;
  }
`;
