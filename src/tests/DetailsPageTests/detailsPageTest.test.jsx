/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { customersAPI } from '../../pages/DetailsPage';
import customersMock from '../mocks/customersMock';

describe('Testes da página de detalhes de um cliente', () => {
  beforeEach(() => {
    jest.spyOn(customersAPI, 'getCustomerById').mockResolvedValue(customersMock[0]);
  });

  describe('Tests do header', () => {
    it('Verifica se existe um Título escrito "Detalhes do cliente <Nome do cliente>"', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const title = `Detalhes do cliente ${customersMock[0].name}`;
      const headerTitle = await screen.findByRole('heading', { name: title });

      expect(headerTitle).toBeInTheDocument();
    });

    it('Verifica se existe um botão para voltar', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const headerBackButton = await screen.findByTestId('header-back-button');

      expect(headerBackButton).toBeInTheDocument();
    });
  });
});
