import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate, useLocation } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";
import Loading from "./Loading";

const RequireUserOnly = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        axiosPrivate
            .get(`https://toolspiashop-server.onrender.com/admin/${user?.email}`)
            .then((res) => setAdmin(res.data.isAdmin));
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    if (!admin) {
        signOut(auth);
        localStorage.removeItem('accessToken');
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireUserOnly;