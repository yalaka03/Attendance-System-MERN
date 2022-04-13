import { useNavigate } from "react-router-dom"
import useLogout from "../hooks/useLogout";
const Unauthorized = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
            <div className="flexGrow">
                <button onClick={signOut}>logout</button>
            </div>
        </section>
    )
}

export default Unauthorized
