import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

function renderWithRouter(component) {
  return {
    ...render(
      <BrowserRouter>
        { component }
      </BrowserRouter>,
    ),
  };
}

export default renderWithRouter;
