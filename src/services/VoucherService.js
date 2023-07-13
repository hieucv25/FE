import { instance } from './instance';

const VOUCHER_BASE_API_URL = 'pgg/';

class VoucherService {
    getAllVouchers() {
        return instance.get(VOUCHER_BASE_API_URL + 'index');
    }
    createVoucher(voucher) {
        return instance.post(VOUCHER_BASE_API_URL + 'save', voucher);
    }
    getById(voucherId) {
        return instance.get(VOUCHER_BASE_API_URL + 'getById/' + voucherId);
    }
    deleteById(voucherId) {
        return instance.delete(VOUCHER_BASE_API_URL + 'delete/' + voucherId);
    }
    updateVoucher(voucherId, voucher) {
        return instance.put(VOUCHER_BASE_API_URL + 'update/' + voucherId, voucher);
    }
    searchByCustomer(ma_KH) {
        return instance.get(VOUCHER_BASE_API_URL + 'searchByKH/' + ma_KH);
    }
    paging(number) {
        return instance.get(VOUCHER_BASE_API_URL + 'index/' + number);
    }
}
export default new VoucherService();