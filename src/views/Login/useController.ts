import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppNavigation } from "../../hooks/navigation";
import { loginAction } from "./store/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginForm } from "./interfaces/Login";
import { useAppDispatch } from "../../store";
import { selectIsAuthed } from "./store/selectors";

const useController = () => {
  const { register, handleSubmit, formState, control } = useForm<LoginForm>({
    defaultValues: {
      countryCode: "+1",
      username: "",
      password: "",
      rememberMe: false,
    },
  });
  const { errors } = formState;
  const dispatch = useAppDispatch();
  const isAuthed = useSelector(selectIsAuthed);
  const navigate = useAppNavigation();

  useEffect(() => {
    if (isAuthed) {
      navigate("/dashboard");
    }
  }, [isAuthed]);

  const onNext: SubmitHandler<LoginForm> = (data) => {
    dispatch(
      loginAction({
        username: data.username,
        password: data.password,
        rememberMe: data.rememberMe,
      }),
    );
  };

  return { onNext, handleSubmit, register, control, errors };
};

export default useController;
