import Layout from '../components/Layout';
import { LockClosedIcon, UserIcon } from '@heroicons/react/solid';
import Image from 'next/image';
const Login = () => {
	const Login = (e) => {
		e.preventDefault();
		alert('Login en construcción');
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
									// layout="responsive"
								/>
							</div>
							<h1 className="mt-6 text-center text-3xl font-extrabold text-white">
								Mandril Login
							</h1>
						</div>
						<form className="mt-8 space-y-6" action="#" method="POST">
							<input type="hidden" name="remember" defaultValue="true" />
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									<label htmlFor="email-address" className="sr-only">
										Email address
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none rounded-none relative block w-full mb-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-400  focus:border-green-400 focus:z-10 sm:text-sm"
										placeholder="Email address"
									/>
								</div>
								<div>
									<label htmlFor="password" className="sr-only">
										Password
									</label>
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Password"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-white"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-white hover:text-indigo-500"
									>
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<button
									onClick={(e) => Login(e)}
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-verde hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<LockClosedIcon
											className="h-5 w-5 text-white group-hover:text-white"
											aria-hidden="true"
										/>
									</span>
									Logearse
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		</Layout>
	);
};

export default Login;
