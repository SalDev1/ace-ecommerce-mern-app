import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { MdDashboard, MdExitToApp, MdPerson, MdListAlt } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const alert = useAlert();

  const options = [
    { icon: <MdListAlt />, name: "Orders", func: orders },
    { icon: <MdPerson />, name: "Profile", func: account },
    { icon: <MdExitToApp />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <MdDashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/dashboard");
  }

  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function logoutUser() {
    // dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
      <SpeedDial
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        ariaLabel='SpeedDial tooltip example'
        open={open}
        direction='down'
        icon={
          <img
            className='speedDialIcon'
            src={user?.avatar?.url ? user?.avatar?.url : "/Profile.png"}
            alt='Profile'
          />
        }>
        {options.map((item) => (
          <SpeedDialAction
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
