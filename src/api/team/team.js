import apiURL  from "../../connect.js";
export default function Teams() {
    const API_BACK_END = apiURL.baseURL;
    const responseTeam = {
        data: [],
        teamRevenue: 0
    };

    const getTeamMember = async () => {
        const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const response = await axios.get(`${API_BACK_END}teammember`,{headers : headers});
           
            if (response.data.status === 'success') {
                responseTeam.data = response.data.data;
               
            }
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        }
    };

    return {
        responseTeam,
        getTeamMember
    };
}
