import { instance } from './instance';

const CUSTOMER_BASE_API_URL = 'khach-hang/';

class CustomerService {
    getAllCustomer() {
        return instance.get(CUSTOMER_BASE_API_URL + 'index');
    }
    deleteById(id) {
        return instance.delete(CUSTOMER_BASE_API_URL + 'delete/' + id);
    }
    getCustomerById(id) {
        return instance.get(CUSTOMER_BASE_API_URL + 'getById/' + id);
    }
    createCustomer(customer) {
        return instance.post(CUSTOMER_BASE_API_URL + 'save', customer);
    }
}
export default new CustomerService();