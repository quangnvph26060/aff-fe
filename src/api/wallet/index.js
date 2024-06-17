import apiURL  from "../../connect.js";
import { ref, reactive, inject } from 'vue'
export default function Wallet() {
    const API_BACK_END = apiURL.baseURL;
    const responseWallet = {
        data: [],
        teamRevenue: 0
    };
   
    const formData = reactive({
        wallet_type: '',
        method: '',
		amount: '',
        status: 'pending',
    });
    const postTransactionRequest = async (formData) => {

        const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const response = await axios.post(`${API_BACK_END}responseWallet`,{formData},{headers : headers});
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        }
    };

    return {
        responseWallet,
        formData,
        postTransactionRequest
    };
}
