import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logoGitExplore.svg';
import perfilImg from '../../img/53b3dd1b2557a8cab4b8816544fcfc39.jpg';
// FC = FunctionComponent
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explore" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src={perfilImg} alt="foto de perfil" />

          <div>
            <strong> nome do repositorio </strong>
            <p> breve descrição do repositorio </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src={perfilImg} alt="foto de perfil" />

          <div>
            <strong> nome do repositorio </strong>
            <p> breve descrição do repositorio </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src={perfilImg} alt="foto de perfil" />

          <div>
            <strong> nome do repositorio </strong>
            <p> breve descrição do repositorio </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src={perfilImg} alt="foto de perfil" />

          <div>
            <strong> nome do repositorio </strong>
            <p> breve descrição do repositorio </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
