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
});
