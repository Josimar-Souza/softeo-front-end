import React from 'react';
import styles from './loadingStyles';

function Loading() {
  const {
    LoadingStyle,
    LoadingTitle,
  } = styles;
  return (
    <LoadingStyle>
      <LoadingTitle>Loading...</LoadingTitle>
    </LoadingStyle>
  );
}

export default Loading;
