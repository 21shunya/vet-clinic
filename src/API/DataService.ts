import http from './config';

export default class DataService {
  static async getAllUsers() {
    try {
      const response = await http.get('/users');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async setUser() {
    try {
      const response = await http.post('/users');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getAllClinics() {
    try {
      const response = await http.get('/clinic');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async setClinic() {
    try {
      const response = await http.post('/clinic');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getAllAnimals() {
    try {
      const response = await http.get('/animals');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async setAnimal() {
    try {
      const response = await http.post('/animals');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getAllAppointments() {
    try {
      const response = await http.get('/appointment');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async setAppointment() {
    try {
      const response = await http.post('/appointment');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getAllServices() {
    try {
      const response = await http.get('/services');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async setService() {
    try {
      const response = await http.post('/servises');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

}