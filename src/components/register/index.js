import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Container, Form, Inputs, LinksAling } from "./styles";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "./styles";
import api from "../api";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { Redirect } from "react-router-dom";

const Register = ({ autheticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/,
        "Senha deve conter,@,123456789,maiúsculas,minúsculas"
      ),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
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
      .post("/users", data)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  if (autheticated) {
    return <Redirect to="/userpage" />;
  }

  return (
    <>
      <Container>
        <h1> Cadastre-se</h1>
        <Form onSubmit={handleSubmit(handleFunc)}>
          <Inputs>
            <input
              className={errors.name && "inputRed"}
              {...register("name")}
              placeholder="Nome"
            />
            <CgProfile color="black" />
          </Inputs>
          <span>{errors.name?.message}</span>
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
          <Inputs>
            <input
              className={errors.bio && "inputRed"}
              register="bio"
              {...register("bio")}
              placeholder="Bio"
            />
            <BsPen color="black" />
          </Inputs>
          <span> {errors.bio?.message}</span>
          <Inputs>
            <input
              className={errors.contact && "inputRed"}
              {...register("contact")}
              placeholder="Contato"
            />
            <AiOutlinePhone color="black" />
          </Inputs>
          <span>{errors.contact?.message}</span>
          <Inputs>
            <input
              className={errors.course_module && "inputRed"}
              {...register("course_module")}
              placeholder="Módulo do curso"
            />
            <GoFileSubmodule color="black" />
          </Inputs>
          <span> {errors.course_module?.message}</span>
          <Button type="submit">Cadastrar</Button>
          <LinksAling>
            <p>Já é cadastrado? Faça seu</p>
            <Link to="/"> Login</Link>
          </LinksAling>
        </Form>
      </Container>
    </>
  );
};
export default Register;
