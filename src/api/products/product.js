import { ref, reactive, inject } from 'vue'
import { useRouter } from "vue-router";
import axios from 'axios';
export default function Product() {
    const API_BACK_END = "http://127.0.0.1:8000/api/v1/"
    // const headers = {
    //     'accept': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem('token')
    // }
    const responseProduct = reactive({
        data: [],
    })
    const getProduct = async () => {
        try {
            const response = await axios.get(`${API_BACK_END}products`);
            if(response.data.status === 'success'){
                responseProduct.data = response.data.data;
            }
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    }
    const findProduct = async (id) =>{
        try {
            const response = await axios.post(`${API_BACK_END}products/${id}`);
            if(response.data.status === 'success'){
                responseProduct.data = response.data.data;
                console.log(responseProduct.data);
            }
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    }
    return {
        getProduct,
        responseProduct,
        findProduct
    }
}