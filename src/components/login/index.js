import { Link } from "react-router-dom";
import { Button, Container, Form, Inputs } from "../register/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { LinksAling } from "../register/styles";
import * as yup from "yup";
import api from "../api";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Login = ({ autheticated, setAuthenticated }) => {
  const [noExist, setNoExist] = useState(false);
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo 8 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFunc = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data);
        const { token } = response.data;

        localStorage.setItem("@Kenzin", JSON.stringify(response.data.user.id));
        localStorage.setItem("@Kenzin:token", JSON.stringify(token));
        setAuthenticated(true);
        setNoExist(false);
        return history.push("/userpage");
      })
      .catch((err) => {
        setNoExist(true);
      });
  };
  if (autheticated) {
    return <Redirect to="/userpage" />;
  }

  return (
    <>
      <Container>
        <h1>Faça seu Login</h1>
        <Form onSubmit={handleSubmit(handleFunc)}>
          <Inputs>
            <input
              className={errors.email && "inputRed"}
              {...register("email")}
              placeholder="Email"
            />
            <AiOutlineMail color="black" />
          </Inputs>
          <span>{errors.email?.message}</span>
          <Inputs>
            <input
              className={errors.password && "inputRed"}
              {...register("password")}
              placeholder="Senha"
              type="password"
            />
            <RiLockPasswordLine color="black" />
          </Inputs>
          <span>{errors.password?.message}</span>
          <Button type="submit">Logar</Button>
          {noExist && <span>Email ou senha inválidos</span>}

          <LinksAling>
            <p> Não tem uma conta ? Faça seu</p>
            <Link to="/register">Cadastro</Link>
          </LinksAling>
        </Form>
      </Container>
    </>
  );
};
export default Login;
