import http from './config';

export default class DataService {
  static async getAll() {
    try {
      const response = await http.get('/users');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}