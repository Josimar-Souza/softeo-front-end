/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { customersAPI } from '../../pages/MainPage';
import customersMock from '../mocks/customersMock';

describe('Testes da página principal', () => {
  beforeEach(() => {
    jest.spyOn(customersAPI, 'getAllCustomers').mockResolvedValue(customersMock);
    renderWithRouter(<pages.MainPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Tests do header da página', async () => {
    const pageHeader = await screen.findByRole('heading', { name: 'Clientes' });
    expect(pageHeader).toBeInTheDocument();
  });
});
