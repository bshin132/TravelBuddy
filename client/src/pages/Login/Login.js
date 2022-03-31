import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [cookies, setCookie] = useCookies(["user"]);
  let { user_id } = useParams();
  let navigate = useNavigate();

  setCookie("user_id", user_id, {
    path: "/"
  });
  
  return (
    <Navigate to="/" />
  );
}