import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import "./styles.css";

const Form = ({ setUserInfo }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("*Digite um nome")
      .matches("^[A-Z a-z]+$", "Use apenas letras"),
    email: yup.string().email().required("*Digite um email"),
    password: yup
      .string()
      .required("*Digite uma senha")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "A senha deve conter pelo menos 8 caracteres, sendo um minúsculo, um maiúsculo, um número, e um caracter especial (!@#$%^&*)"
      ),
    passConfirm: yup
      .string()
      .required("*Digite a senha novamente")
      .oneOf(
        [yup.ref("password"), null],
        "A senha deve ser a mesma da anterior"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    setUserInfo(data);
    history.push(`/${data.email}`);
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            label="Name"
            variant="outlined"
            size="small"
            color="primary"
          />
        </div>
        <div>
          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            label="Email"
            variant="outlined"
            size="small"
            color="primary"
          />
        </div>
        <div>
          <TextField
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            label="Password"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
          />
        </div>
        <div>
          <TextField
            {...register("passConfirm")}
            error={!!errors.passConfirm}
            helperText={errors.passConfirm?.message}
            label="Confirm Password"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
