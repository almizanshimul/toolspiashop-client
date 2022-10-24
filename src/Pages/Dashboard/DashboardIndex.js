import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashboardIndex = () => {
  const [user] = useAuthState(auth)
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h2 className="text-4xl text-center">
          {user.displayName} Welcome To <span className="text-primary">Dashboard</span>
        </h2>
        <p className="text-center  my-5"><FontAwesomeIcon className="text-primary px-2" icon={faArrowLeft} /> Dashboard menus are available in left sidebar</p>
      </div>
    </div>
  );
};

export default DashboardIndex;
