import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SocialLogin = ({ setSocialLoginError }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(auth);
  const from = location?.state?.from?.pathname || "/";
  const [token] = useToken(user);
  if (token) {
    navigate(from, { replace: true });
  }
  if (error) {
    setSocialLoginError(error.message);
  }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex w-full justify-center">
        <button
          onClick={() => signInWithGoogle()}
          className="grid w-12 h-12 rounded-full card bg-primary place-items-center"
        >
          <FontAwesomeIcon className="text-white" icon={faGoogle} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
