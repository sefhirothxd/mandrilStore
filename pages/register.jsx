import Layout from '../components/Layout';
import { useAppContext } from '../components/StateWarapper';
import { LockClosedIcon, ArchiveIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();
  const context = useAppContext();
  const router = useRouter();

  if (context.isLogin) {
    router.push('/');
  }

  const handleRegister = async (e) => {
    console.log(e);
    try {
      await context.register(e);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <Layout>
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">
                <Image
                  className=""
                  src="/img/monito.png"
                  width={100}
                  height={100}
                  alt="Logo mandril"
                />
              </div>
              <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
                Mandril Registro
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="mt-8 space-y-6 "
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px ">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-400  focus:border-green-400 focus:z-10 sm:text-sm"
                    placeholder="Correo Electronico"
                    {...register('email', {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 mb-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 80,
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="nombre" className="sr-only">
                    Nombre
                  </label>
                  <input
                    type="nombre"
                    autoComplete="current-nombre"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre Completo"
                    {...register('nombre', {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="genero" className="sr-only">
                    Genero
                  </label>
                  <select
                    type="text"
                    {...register('genero')}
                    autoComplete="current-genero"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Genero"
                  >
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="Documento" className="sr-only">
                    Documento
                  </label>
                  <select
                    type="text"
                    {...register('documentos')}
                    autoComplete="current-documento"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Documento"
                  >
                    <option value="dni">DNI</option>
                    <option value="ce">Carnet de Extrangeria</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="numeroDocumento" className="sr-only">
                    Numero de Documento
                  </label>
                  <input
                    {...register('nDocumento', {
                      required: true,
                      type: 'number',
                      maxLength: 80,
                    })}
                    type="numeroDocumento"
                    autoComplete="current-numeroDocumento"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Numero de Documento"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center ">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-white text-center"
                  >
                    Acepto los{' '}
                    <a href="#" className="hover:underline">
                      Terminos y Condiciones
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-verde hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <ArchiveIcon
                      className="h-5 w-5 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                  Registrarse
                </button>
                <Link href="/login">
                  <a className="flex justify-center mt-3 hover:underline">
                    ¿Ya tengo una cuenta?
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Register;
