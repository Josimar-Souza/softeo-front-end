import React from 'react';
import styles from './loadingStyles';

function Loading() {
  const {
    LoadingStyle,
    LoadingTitle,
    LoadingContainer,
  } = styles;
  return (
    <LoadingStyle>
      <LoadingContainer>
        <LoadingTitle>Carregando...</LoadingTitle>
      </LoadingContainer>
    </LoadingStyle>
  );
}

export default Loading;
