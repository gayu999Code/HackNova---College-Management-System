import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
<<<<<<< HEAD
import { MessageSquare } from "lucide-react";

=======
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1";
const isActiveStyle =
  "flex items-center px-5 gap-3 text-blue-600 transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1";

const Sidebar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    alert("OOPS! Your session expired. Please Login again");
    dispatch({ type: "LOGOUT" });
    navigate("/login/studentlogin");
  };
<<<<<<< HEAD
  // useEffect(() => {
  //   const token = user?.token;

  //   if (token) {
  //     const decodedToken = decode(token);
  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }

  //   setUser(JSON.parse(localStorage.getItem("faculty")));
  // }, [navigate]);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, []);

=======
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("faculty")));
  }, [navigate]);
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
  return (
    <div className="flex-[0.2]">
      <div className="space-y-8 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300 h-[33rem]">
        <div className="">
          <NavLink
            to="/student/home"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <HomeIcon className="" />
            <h1 className="font-normal">Dashboard</h1>
          </NavLink>
          <NavLink
            to="/student/profile"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <AssignmentIndIcon className="" />
            <h1 className="font-normal">Profile</h1>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/student/testresult"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <AddIcon className="" />
            <h1 className="font-normal">Assignments Marks</h1>
          </NavLink>
          <NavLink
            to="/student/attendance"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <AddIcon className="" />
            <h1 className="font-normal">Attendance</h1>
          </NavLink>
          <NavLink
            to="/student/upload"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <AddIcon className="" />
            <h1 className="font-normal">Upload Assignment</h1>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/student/subjectlist"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <EngineeringIcon className="" />
            <h1 className="font-normal">Subject List</h1>
          </NavLink>
<<<<<<< HEAD
          {/* Add EduGuru link */}
          <NavLink
            to="/student/eduguru"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <MessageSquare className="h-6 w-6" />
            <h1 className="font-normal">EduGuru AI</h1>
          </NavLink>
=======
>>>>>>> 07164279a2bdf5bf06ab2255003042b3b58355f8
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
