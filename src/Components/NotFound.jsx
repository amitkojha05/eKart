import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, [navigate]); // Added navigate to the dependency array

    return <></>;
}

export default NotFound;
