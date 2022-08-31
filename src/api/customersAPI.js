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
      const result = await this.api.get('/customers');
      return result;
    } catch (error) {
      console.log('Error ao pegar todos os clientes');
    }
  }
}

export default CustomersAPI;
