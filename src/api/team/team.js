import axios from 'axios';

export default function Team() {
    const API_BACK_END = "http://127.0.0.1:8000/api/v1";
    const response = {
        data: [],
        teamRevenue: 0
    };

    const getTeamMember = async () => {
        try {
            const response = await axios.get(`${API_BACK_END}/team`);
            if (response.data.status === 'success') {
                response.data.data.teamMember.forEach(member => {
                    response.data.teamRevenue += member.personalRevenue;
                });
            }
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        }
    };

    return {
        response,
        getTeamMember
    };
}
