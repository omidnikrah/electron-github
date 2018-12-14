// @flow

import styled, { keyframes } from 'styled-components';

const pulseEffect = keyframes`
  to {
		transform: scale(0.8);
		opacity: 0.5;
	}
`;

export default styled.div`
  color: #444;
  font-weight: bold;
  font-size: 5vh;
  opacity: 0.8;
  text-align: center;
  span {
    display: inline-block;
    animation: ${pulseEffect} 0.4s alternate infinite ease-in-out;
    &:nth-child(odd) {
      animation-delay: 0.4s;
    }
  }
`;
