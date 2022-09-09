/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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

  describe('Testes do header', () => {
    it('Verifica se existe um título escrito "Clientes"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Clientes' });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe('Testes do filtro por período', () => {
    it('Verifica se existe um título escrito "Ganhos por períodos"', async () => {
      const filterTitle = await screen.findByRole('heading', { name: 'Ganhos por período' });

      expect(filterTitle).toBeInTheDocument();
    });

    it('Verifica se existem 2 inputs para as datas', async () => {
      const inputFrom = await screen.findByTestId('filter-input-from');
      const inputTo = await screen.findByTestId('filter-input-to');

      expect(inputFrom).toBeInTheDocument();
      expect(inputTo).toBeInTheDocument();
    });

    it('Verifica se existe um botão escrito "Filtrar"', async () => {
      const filterButton = await screen.findByRole('button', { name: 'Filtrar' });

      expect(filterButton).toBeInTheDocument();
    });

    it('Verifica se existe um parágrafo mostrando o valor do filtrado', async () => {
      const filterTotal = await screen.findByTestId('filter-total');

      expect(filterTotal).toBeInTheDocument();
      expect(filterTotal.textContent.normalize('NFKD')).toBe('R$ 0,00');
    });

    it('Verifica se o filtro está funcionando corretamente', async () => {
      const inputFrom = await screen.findByTestId('filter-input-from');
      const inputTo = await screen.findByTestId('filter-input-to');
      const filterButton = await screen.findByRole('button', { name: 'Filtrar' });

      act(() => {
        userEvent.type(inputFrom, '15/05/2022');
        userEvent.type(inputTo, '15/08/2022');
        userEvent.click(filterButton);
      });

      const filterTotal = await screen.findByTestId('filter-total');
      expect(filterTotal.textContent.normalize('NFKD')).toBe('R$ 3.360,00');
    });
  });
});
