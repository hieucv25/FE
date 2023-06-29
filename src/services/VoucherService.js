import axios from 'axios';
const VOUCHER_BASE_API_URL = 'http://localhost:8080/pgg/index';
class VoucherService {
    getAllVouchers() {
        return axios.get(VOUCHER_BASE_API_URL)
    }
}
export default new VoucherService();