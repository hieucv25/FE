import axios from 'axios';
const VOUCHER_BASE_API_URL = 'http://localhost:8080/pgg/';
class VoucherService {
    getAllVouchers() {
        return axios.get(VOUCHER_BASE_API_URL + 'index');
    }
    createVoucher(voucher) {
        return axios.post(VOUCHER_BASE_API_URL + 'save', voucher);
    }
    getById(voucherId) {
        return axios.get(VOUCHER_BASE_API_URL + 'getById/' + voucherId);
    }
}
export default new VoucherService();