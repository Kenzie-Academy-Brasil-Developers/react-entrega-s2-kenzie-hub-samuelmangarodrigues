import { ButtonTech, Techs } from "./styles";

const Techonlogy = ({ techs, delet }) => {
  return (
    <>
      {techs &&
        techs.map((tech, ind) => (
          <Techs key={ind}>
            <li>
              <strong>Título:</strong>
              {tech.title}
            </li>
            <li>
              <strong>Status:</strong>
              {tech.status}
            </li>
            <ButtonTech onClick={() => delet(tech)}>X</ButtonTech>
          </Techs>
        ))}
    </>
  );
};
export default Techonlogy;
