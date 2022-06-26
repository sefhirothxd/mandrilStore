import Layout from '../components/Layout';
import { useAppContext } from '../components/StateWarapper';
import { LockClosedIcon, ArchiveIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const context = useAppContext();
  const router = useRouter();

  if (context.isLogin) {
    router.push('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await context.loginEmail(email, password);
      console.log('Usuario logeado');
      router.push('/');
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
              onSubmit={handleSubmit}
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
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-400  focus:border-green-400 focus:z-10 sm:text-sm"
                    placeholder="Correo Electronico"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 mb-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div>
                  <label htmlFor="nombre" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="nombre"
                    autoComplete="current-nombre"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre Completo"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div>
                  <label htmlFor="genero" className="sr-only">
                    Genero
                  </label>
                  <select
                    id="genero"
                    name="genero"
                    type="text"
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
                    id="documento"
                    name="documento"
                    type="text"
                    autoComplete="current-documento"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Documento"
                  >
                    <option value="Hombre">DNI</option>
                    <option value="Mujer">Carnet de Extrangeria</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="numeroDocumento" className="sr-only">
                    Numero de Documento
                  </label>
                  <input
                    id="numeroDocumento"
                    name="numeroDocumento"
                    type="numeroDocumento"
                    autoComplete="current-numeroDocumento"
                    required
                    className="appearance-none  relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Numero de Documento"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
