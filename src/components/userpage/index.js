import { Button, Form, Inputs } from "../register/styles";
import { Card, CardAddTecs } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { GrStatusUnknown } from "react-icons/gr";
import { useState } from "react";
import api from "../api";
import Techonlogy from "../technologys";
import { ButtonExit } from "../technologys/styles";
const UserPage = ({ autheticated, setAuthenticated }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzin:token")) || ""
  );
  const [userId] = useState(JSON.parse(localStorage.getItem("@Kenzin")) || "");
  const [techs, setTechs] = useState([]);
  const [exist, setExist] = useState(false);
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const User = () => {
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((_) => {});
  };
  const Techs = (data) => {
    api
      .post(
        "/users/techs",
        data,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((_) => {
        setExist(false);
        User();
      })
      .catch((_) => {
        setExist(true);
      });
  };

  const delet = (techno) => {
    api
      .delete(`/users/techs/${techno.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        User();
      })
      .catch((_) => {});
  };

  const clearrr = () => {
    setAuthenticated(false);
    return localStorage.clear();
  };
  if (!autheticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {User()}
      <Card>
        <h1>Minhas Tecnologias</h1>
        <Techonlogy delet={delet} techs={techs} />
      </Card>
      <CardAddTecs>
        <h1>Adicionar tecnologias</h1>
        <Form onSubmit={handleSubmit(Techs)}>
          <Inputs>
            <input
              {...register("title")}
              placeholder="Nome da Tecnologia"
            ></input>
            <GrTechnology color="white" />
          </Inputs>
          <Inputs>
            <input
              {...register("status")}
              placeholder="Status da tecnologia"
            ></input>
            <GrStatusUnknown color="white" />
          </Inputs>
          <Button type="submit">+</Button>
          {exist ? <div className="Tec">Tecnologia já adicionada</div> : false}
        </Form>
      </CardAddTecs>
      <ButtonExit onClick={clearrr}>Sair</ButtonExit>
    </>
  );
};
export default UserPage;
