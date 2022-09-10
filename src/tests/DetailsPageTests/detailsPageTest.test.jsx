/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { customersAPI } from '../../pages/DetailsPage';
import customersMock from '../mocks/customersMock';
import phoneNumberFormatter from '../../helpers/phoneNumberFormatter';

describe('Testes da página de detalhes de um cliente', () => {
  beforeEach(() => {
    jest.spyOn(customersAPI, 'getCustomerById').mockResolvedValue(customersMock[0]);
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  describe('Testes das informações do cliente', () => {
    it('Verifica se o nome do cliente é visível na página', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const customerName = await screen.findByTestId('details-customer-name');

      expect(customerName).toBeInTheDocument();
    });

    it('Verifica se o email do cliente é visível na página', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const expectedEmail = `Email: ${customersMock[0].email}`;
      const customerEmail = await screen.findByTestId('details-customer-email');

      expect(customerEmail.textContent).toBe(expectedEmail);
    });

    it('Verifica se o número de telefone do cliente é visível na página', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const expectedPhone = `Telefone: ${phoneNumberFormatter(customersMock[0].phone)}`;
      const customerPhone = await screen.findByTestId('details-customer-phone');

      expect(customerPhone.textContent).toBe(expectedPhone);
    });
  });
});
