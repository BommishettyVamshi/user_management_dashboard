import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./index.css";

const UserComponent = ({ user }) => {
  const navigate = useNavigate();   
    return (    
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td
                onClick={() => navigate(`/users/${user.id}`)}
                className='details-link'>
                <FaArrowRight style={{ color: "blue", fontSize: "10px" }} />
            </td>
        </tr>
    );
}   
export default UserComponent;