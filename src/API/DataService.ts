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
    try {
      const response = await http.post(`/${tableName}`, {
        ...document
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteOne(tableName: string | undefined, id: string) {
    try {
      const response = await http.delete(`/${tableName}/` + id);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateDocument(tableName: string | undefined, id: string, document: Record<string, any>) {
    try {
      const response = await http.patch(`/${tableName}/` + id, {
        ...document
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async doLogin(document: Record<string, any>): Promise<boolean> {

    const response = await http.post('/login', {
      ...document});

    return response.data as boolean;
  }
}