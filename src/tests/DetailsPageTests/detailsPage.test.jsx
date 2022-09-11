/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { customersAPI } from '../../pages/DetailsPage';
import customersMock from '../mocks/customersMock';
import phoneNumberFormatter from '../../helpers/phoneNumberFormatter';
import getCurrencyFormat from '../../helpers/getCurrencyFormat';

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

    const getCorrectMonth = (month) => {
      if (month.toString().length === 1) return `0${month}`;

      return month;
    };

    it('Verifica se todas as datas das parcelas aparecem com a informação correta', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const installmentDatesPromises = [];

      for (let index = 0; index < customersMock[0].installments.length; index += 1) {
        const installmentDate = screen.findByTestId(`details-customer-date-${index}`);

        installmentDatesPromises.push(installmentDate);
      }

      const installmentDates = await Promise.all(installmentDatesPromises);

      installmentDates.forEach((date, index) => {
        const customerDate = new Date(customersMock[0].installments[index].date);
        const formattedDate = `${customerDate.getDate()}/${getCorrectMonth(customerDate.getMonth() + 1)}/${customerDate.getFullYear()}`;

        expect(date.textContent).toBe(`Data: ${formattedDate}`);
      });
    });

    it('Verifica se todos os valores das parcelas aparecem com a informação correta', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const installmentValuesPromises = [];

      for (let index = 0; index < customersMock[0].installments.length; index += 1) {
        const installmentValue = screen.findByTestId(`details-customer-value-${index}`);

        installmentValuesPromises.push(installmentValue);
      }

      const installmentValues = await Promise.all(installmentValuesPromises);

      installmentValues.forEach((value, index) => {
        const installmentValue = customersMock[0].installments[index].value;
        const formattedValue = getCurrencyFormat(installmentValue, 'pt-BR', 'currency', 'BRL');

        expect(value.textContent).toBe(`Valor: ${formattedValue}`);
      });
    });

    it('Verifica se o total das parcelas aparece com a informação correta', async () => {
      act(() => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const installmentsTotal = customersMock[0].installments.reduce(
        (acc, curr) => acc + curr.value,
        0,
      );

      const expectedTotal = getCurrencyFormat(installmentsTotal, 'pt-BR', 'currency', 'BRL');

      const customerTotal = await screen.findByTestId('details-customer-total');

      expect(customerTotal.textContent).toBe(`Total: ${expectedTotal}`);
    });
  });
});
