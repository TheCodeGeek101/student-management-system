import Image from 'next/image'; // Import Image from Next.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import fcb from "../../public/images/fcb.jpg";
const Login = () => {

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push('/Admin/Dashboard');
  }
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
                <h1 className='font-bold text-2xl text-primary'>
                    Admin Portal
                </h1>
                
            </div>
            <div className="flex justify-center">
                <Image
              src={fcb}
              className="inline h-full max-w-full  transition-all duration-200 dark:hidden ease-nav-brand "
              alt="main_logo"
              width={100}
              height={200}
            />
                </div>

            <form onSubmit={onSubmit} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                        <Link href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</Link>
                    </div>

                    <input
                        type="password"
                        id="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 text-sm font-medium text-white uppercase bg-primary rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                    >
                        Sign In
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b border-gray-400"></span>
                <span className="text-xs text-center text-gray-500 uppercase">or login with</span>
                <span className="w-1/5 border-b border-gray-400"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <Link
                    href="#"
                    className="p-2 mx-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-200"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                </Link>
            </div>

            <p className="mt-8 text-xs text-center text-gray-400">
                Don't have an account? <Link href="#" className="font-medium text-gray-700 hover:underline">Create One</Link>
            </p>
        </div>
    </div>
);
};

export default Login;
