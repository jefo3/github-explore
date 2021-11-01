/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';

import logoImg from '../../assets/logoGitExplore.svg';
import schema from './validation';

interface Repository {
  // eslint-disable-next-line camelcase
  full_name: string;
  description: string;
  owner: {
    login: string;
    // eslint-disable-next-line camelcase
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitHubExplre:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplre:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository: SubmitHandler<{ newRepo: string }> = async (
    data,
  ) => {
    const { newRepo } = data;

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      reset();
    } catch {
      setError('newRepo', { message: 'Erro na busca por esse repositorio' });
    }
  };

  return (
    <>
      <img src={logoImg} alt="Github explore" />
      <Title>Explore repositórios no Github</Title>

      <Form
        hasError={errors.newRepo}
        onSubmit={handleSubmit(handleAddRepository)}
      >
        <input
          placeholder="Digite o nome do repositorio"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('newRepo')}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Error> {errors.newRepo?.message} </Error>

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong> {repository.full_name} </strong>
              <p> {repository.description} </p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
