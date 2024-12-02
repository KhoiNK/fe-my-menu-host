import React from "react";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store";
import { logout } from "../Login/store/slice";
import { useAppNavigation } from "../../hooks/navigation";

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useAppNavigation();

  const onClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Button text="Logout" onClick={onClick} />
    </div>
  );
};

export default Dashboard;
