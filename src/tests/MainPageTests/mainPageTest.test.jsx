/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { customersAPI } from '../../pages/MainPage';
import customersMock from '../mocks/customersMock';
import phoneNumberFormatter from '../../helpers/phoneNumberFormatter';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';

describe('Testes da página principal', () => {
  beforeEach(() => {
    jest.spyOn(customersAPI, 'getAllCustomers').mockResolvedValue(customersMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Testes do header', () => {
    it('Verifica se existe um título escrito "Clientes"', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const pageTitle = await screen.findByRole('heading', { name: 'Clientes' });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe('Testes do filtro por período', () => {
    it('Verifica se existe um título escrito "Ganhos por períodos"', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const filterTitle = await screen.findByRole('heading', { name: 'Ganhos por período' });

      expect(filterTitle).toBeInTheDocument();
    });

    it('Verifica se existem 2 inputs para as datas', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const inputFrom = await screen.findByTestId('filter-input-from');
      const inputTo = await screen.findByTestId('filter-input-to');

      expect(inputFrom).toBeInTheDocument();
      expect(inputTo).toBeInTheDocument();
    });

    it('Verifica se existe um botão escrito "Filtrar"', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const filterButton = await screen.findByRole('button', { name: 'Filtrar' });

      expect(filterButton).toBeInTheDocument();
    });

    it('Verifica se existe um parágrafo mostrando o valor do filtrado', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const filterTotal = await screen.findByTestId('filter-total');

      expect(filterTotal).toBeInTheDocument();
      expect(filterTotal.textContent.normalize('NFKD')).toBe('R$ 0,00');
    });

    it('Verifica se o filtro está funcionando corretamente', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

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

  describe('Testes da tabela de clientes', () => {
    it('Verifica se todos os nomes dos clientes aparecem normalmente', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const namePromises = [];

      for (let index = 0; index < customersMock.length; index += 1) {
        const rowName = screen.findByTestId(`customer-row-name-${index}`);

        namePromises.push(rowName);
      }

      const rowNames = await Promise.all(namePromises);

      customersMock.forEach(({ name }, index) => {
        expect(rowNames[index].textContent).toBe(name);
      });
    });

    it('Verifica se todos os emails dos clientes aparecem normalmente', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const emailPromises = [];

      for (let index = 0; index < customersMock.length; index += 1) {
        const rowEmail = screen.findByTestId(`customer-row-email-${index}`);

        emailPromises.push(rowEmail);
      }

      const rowEmails = await Promise.all(emailPromises);

      customersMock.forEach(({ email }, index) => {
        expect(rowEmails[index].textContent).toBe(email);
      });
    });

    it('Verifica se todos os números dos clientes aparecem normalmente', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const phonePromises = [];

      for (let index = 0; index < customersMock.length; index += 1) {
        const rowPhone = screen.findByTestId(`customer-row-phone-${index}`);

        phonePromises.push(rowPhone);
      }

      const rowPhones = await Promise.all(phonePromises);

      customersMock.forEach(({ phone }, index) => {
        expect(rowPhones[index].textContent).toBe(phoneNumberFormatter(phone));
      });
    });

    it('Verifica se o total das parcelas dos clientes aparecem normalmente', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const totalPromises = [];

      for (let index = 0; index < customersMock.length; index += 1) {
        const rowTotal = screen.findByTestId(`customer-row-total-${index}`);

        totalPromises.push(rowTotal);
      }

      const rowTotals = await Promise.all(totalPromises);

      customersMock.forEach(({ installments }, index) => {
        const total = installments.reduce((acc, curr) => acc + curr.value, 0);
        const formatterTotal = getCurrencyFormat(total, 'pt-BR', 'currency', 'BRL');

        expect(rowTotals[index].textContent).toBe(formatterTotal);
      });
    });

    it('Verifica se existe todos os botões de ação dos clientes', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const removeButtons = await screen.findAllByRole('button', { name: 'Remover' });
      const detailsButtons = await screen.findAllByRole('button', { name: 'Detalhes' });

      expect(removeButtons.length).toBe(customersMock.length);
      expect(detailsButtons.length).toBe(customersMock.length);
    });

    it('Verifica se ao clicar no botão "Remover", uma tela de confimação aparece', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const removeButtons = await screen.findAllByRole('button', { name: 'Remover' });

      act(() => {
        userEvent.click(removeButtons[0]);
      });

      const modalTitle = `Tem certeza que deseja remover o cliente "${customersMock[0].name}"`;
      const modalTitleElement = await screen.findByRole('heading', { name: modalTitle });

      expect(modalTitleElement).toBeInTheDocument();
    });
  });

  describe('Testes da tela de confirmação', () => {
    it('Verifica se existe um botão de cancelar', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const removeButtons = await screen.findAllByRole('button', { name: 'Remover' });

      act(() => {
        userEvent.click(removeButtons[0]);
      });

      const cancelButton = await screen.findByRole('button', { name: 'Cancelar' });

      expect(cancelButton).toBeInTheDocument();
    });

    it('Verifica se existe um botão de remover na tela de confirmação', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const removeButtons = await screen.findAllByRole('button', { name: 'Remover' });

      act(() => {
        userEvent.click(removeButtons[0]);
      });

      const removeButton = await screen.findByTestId('remove-modal-button');

      expect(removeButton).toBeInTheDocument();
    });

    it('Verifica se ao clicar no botão "Cancelar", a tela de confirmalção desaparece', async () => {
      act(() => {
        renderWithRouter(<pages.MainPage />);
      });

      const removeButtons = await screen.findAllByRole('button', { name: 'Remover' });

      act(() => {
        userEvent.click(removeButtons[0]);
      });

      const cancelButton = await screen.findByRole('button', { name: 'Cancelar' });

      act(() => {
        userEvent.click(cancelButton);
      });

      const modalTitle = `Tem certeza que deseja remover o cliente "${customersMock[0].name}"`;
      const modalTitleElement = screen.queryByRole('heading', { name: modalTitle });

      expect(modalTitleElement).not.toBeInTheDocument();
    });
  });
});
