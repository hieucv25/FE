import axios from 'axios';
const CUSTOMER_BASE_API_URL = 'http://localhost:8080/khach-hang/';
class CustomerService {
    getAllCustomer() {
        return axios.get(CUSTOMER_BASE_API_URL + 'index');
    }
    deleteById(id) {
        return axios.delete(CUSTOMER_BASE_API_URL + 'delete/' + id);
    }
    getCustomerById(id) {
        return axios.get(CUSTOMER_BASE_API_URL + 'getById/' + id);
    }
    createCustomer(customer) {
        return axios.post(CUSTOMER_BASE_API_URL, customer);
    }
}
export default new CustomerService();