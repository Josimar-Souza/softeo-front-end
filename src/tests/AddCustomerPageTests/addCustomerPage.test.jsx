/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';

describe('Testes da página para adicionar um novo cliente', () => {
  describe('Testes do header', () => {
    it('Verifica se existe um título escrito "Adicionar novo cliente"', async () => {
      act(() => {
        renderWithRouter(<pages.AddCustomerPage />);
      });

      const headerTitle = await screen.findByRole('heading', { name: 'Adicionar novo cliente' });

      expect(headerTitle).toBeInTheDocument();
    });

    it('Verifica se existe um botão para voltar a página', async () => {
      act(() => {
        renderWithRouter(<pages.AddCustomerPage />);
      });

      const backButton = await screen.findByTestId('header-back-button');

      expect(backButton).toBeInTheDocument();
    });
  });

  describe('Testes do formulário', () => {
    it('Verifica se existe um título escrito "Nome" e um input', async () => {
      act(() => {
        renderWithRouter(<pages.AddCustomerPage />);
      });

      const nameTitle = await screen.findByRole('heading', { name: 'Nome' });
      const nameInput = await screen.findByTestId('add-customer-name-input');

      expect(nameTitle).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
    });

    it('Verifica se existe um título escrito "Email" e um input', async () => {
      act(() => {
        renderWithRouter(<pages.AddCustomerPage />);
      });

      const emailTitle = await screen.findByRole('heading', { name: 'Email' });
      const emailInput = await screen.findByTestId('add-customer-email-input');

      expect(emailTitle).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });

    it('Verifica se existe um título escrito "Celular" e um input', async () => {
      act(() => {
        renderWithRouter(<pages.AddCustomerPage />);
      });

      const phoneTitle = await screen.findByRole('heading', { name: 'Celular' });
      const phoneInput = await screen.findByTestId('add-customer-phone-input');

      expect(phoneTitle).toBeInTheDocument();
      expect(phoneInput).toBeInTheDocument();
    });
  });
});
