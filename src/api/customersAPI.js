/* eslint-disable no-console */
import axios from 'axios';
import errorMessages from '../helpers/errorMessages';

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
      const { response: { status } } = error;

      return errorMessages[status];
    }
  }

  async getCustomerById(id) {
    try {
      const { data: { customer } } = await this.api.get(`/customers/${id}`);

      return customer;
    } catch (error) {
      const { response: { status } } = error;

      return errorMessages[status];
    }
  }

  async createNewCustomer(customer) {
    try {
      await this.api.post('/customers', customer);

      return 'Cliente cadastrado com sucesso!';
    } catch (error) {
      const { response: { status } } = error;

      return errorMessages[status];
    }
  }

  async updateCustomerById(id, newValues) {
    try {
      await this.api.put(`/customers/${id}`, newValues);

      return 'Cadastro atualizado com sucesso!';
    } catch (error) {
      const { response: { status } } = error;

      return errorMessages[status];
    }
  }

  async deleteCustomerById(id) {
    try {
      await this.api.delete(`/customers/${id}`);

      return 'Cliente deletado com sucesso!';
    } catch (error) {
      const { response: { status } } = error;

      return errorMessages[status];
    }
  }
}

export default CustomersAPI;
