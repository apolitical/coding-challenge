import React from 'react';
import styled from 'styled-components';
import Lightsaber from './assets/lightsaber-1.png';


const SpinningImage = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
  animation: rotation 2s infinite linear;
  @keyframes rotation {
    from {transform: rotate(0deg);}
    to   {transform: rotate(359deg);}
  }
`;


const LoadingImage = () => (
  <div style={{ textAlign: 'center' }}>
    <SpinningImage src={Lightsaber} />
  </div>
);



export default LoadingImage;
