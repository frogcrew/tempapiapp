import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
    const { user } = useContext(UserContext)
 return (
    <div>
        <h1>Welcome { user?.username }</h1>
        <p>favorites { user.favorites }</p>
        <p>Select APIS:</p>
        <ul>
            {/* add all apis available in apiMap with checkbox inputs that update the favorites array in crudcrud
            Dont forget to show checkboxes on previously selected apis */}
{/* <input type="checkbox" value="what" checked={user.favorites.some((item) => item === parentItem)} /> */}
        </ul>
    </div>
 )
}

export default UserProfile; 