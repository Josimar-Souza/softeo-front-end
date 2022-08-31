/* eslint-disable no-console */
import axios from 'axios';

class CustomersAPI {
  constructor(baseURL, timeout) {
    this.api = axios.create({
      baseURL,
      timeout,
    });
  }

  async getAllCustomers() {
    try {
      const { data: { customers } } = await this.api.get('/customers');

      return customers;
    } catch (error) {
      console.log('Error ao pegar todos os clientes');
    }
  }

  async getCustomerById(id) {
    try {
      const { data: { customer } } = await this.api.get(`/customers/${id}`);

      return customer;
    } catch (error) {
      const { response: { status } } = error;

      if (status === 404) {
        return 'Cliente não encontrado.';
      }
    }
  }

  async createNewCustomer(customer) {
    try {
      await this.api.post('/customers', customer);

      return 'Cliente cadastrado com sucesso!';
    } catch (error) {
      const { response: { status } } = error;

      if (status === 400) {
        return 'Valores inválidos';
      }
    }
  }
}

export default CustomersAPI;
