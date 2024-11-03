import useAuth from "./useAuth";
import axios from "../api/axios";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });

        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.data.accessToken);
            console.log(response.data.data.roles);
            return { ...prev, accessToken: response.data.data.accessToken, roles: response.data.data.roles };
        });
        return response.data.data.accessToken;
    }

    return refresh;
}

export default useRefreshToken