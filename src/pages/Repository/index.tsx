import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issue } from './styles';

import logoImg from '../../assets/logoGitExplore.svg';
import imge from '../../img/53b3dd1b2557a8cab4b8816544fcfc39.jpg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHubExplore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src={imge} alt="fotoPerfil" />
          <div>
            <strong> Titulo repo </strong>
            <p> descrinção </p>
          </div>
        </header>

        <ul>
          <li>
            <strong>10990 </strong>
            <span> Stars </span>
          </li>

          <li>
            <strong>10990</strong>
            <span> Forks </span>
          </li>

          <li>
            <strong>10990</strong>
            <span> Issues abertas </span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issue>
        <Link to="adssada">
          <div>
            <strong> repository.full_name </strong>
            <p> repository.description </p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issue>
    </>
  );
};

export default Repository;
