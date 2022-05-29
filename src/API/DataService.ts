import http from './config';

export default class DataService {

  static async getAll(tableName: string) {
    try {
      const response = await http.get(`/${tableName}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async setDocument(tableName: string, document: Record<string, any>) {
    console.log(document);
    try {
      const response = await http.post(`/${tableName}`, {
        ...document
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

}