import { useRouter } from "vue-router";
import { ref, reactive, inject } from 'vue'
import { useStore } from 'vuex';
import store from '../../store/auth.js';
import validator from "../validator/validator.js";
import apiURL  from "../../connect.js";
export default function Order() {
	const API_BACK_END = apiURL.baseURL;
    const formDataOrder = reactive({
        name: '',
        address: '',
        phone:'',
        list_product: [],
		
    });
    const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    const submitOrder = async () => {
        try {
            const  response  = await axios.post(`${API_BACK_END}/auth/createorder`,formDataOrder, { headers: headers });

        } catch (error) {
			throw handleError(error);
        }
    }
    return {
        submitOrder,
    }
}