
export default function Teams() {
    const API_BACK_END = "http://127.0.0.1:8000/api/v1";
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
            const response = await axios.get(`http://127.0.0.1:8000/api/v1/teammember`,{headers : headers});
           
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
