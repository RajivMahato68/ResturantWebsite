import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  //   get user
  const getUser = async () => {
    try {
      const res = await axios.get("hit api here", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data) {
        dispatch(setUser(res.data));
        console.log(res.data);
        navigate("/");
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  if (user) {
    return children;
  } else {
    return navigate("/login");
  }
}
