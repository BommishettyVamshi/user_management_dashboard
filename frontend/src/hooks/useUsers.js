import { useState, useEffect } from "react"; 
import { API_BASE_URL } from "../utils/constants";  

const useUsers = () => {
    const [userData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {   
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASE_URL}/users`);
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsersData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }   
        };
        fetchUsers();
    }, []);

    return { userData, loading, error };    

}

export default useUsers;