import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
	const navigate = useNavigate();
	const token = useSelector((state) => state?.auth?.token);
	const tokenFromLocalStorage = localStorage.getItem("token");
	useEffect(() => {
		if (!(token || tokenFromLocalStorage)) {
			navigate("/Buy");
		}
	}, [token, tokenFromLocalStorage, navigate]);

	return token || tokenFromLocalStorage ? children : null;
};
