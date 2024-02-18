import { authenticate } from '@/lib/actions'

const GoogleLogo = () => {
  return (
    <svg
      className="w-6 h-6 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      fill="none"
    >
      <g clipPath="url(#clip0_13183_10121)">
        <path
          d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
          fill="#3F83F8"
        ></path>
        <path
          d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
          fill="#34A853"
        ></path>
        <path
          d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
          fill="#FBBC04"
        ></path>
        <path
          d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
          fill="#EA4335"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_13183_10121">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-full max-w-lg px-2">
        <div className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl text-center mb-4">Dolar Info</h2>
          <form
            action={async () => {
              'use server'
              await authenticate()
            }}
          >
            <button
              className="bg-white text-gray-600 
                text-sm
                font-semibold py-2 px-4 rounded gap-2
                border border-gray-400 w-full flex items-center justify-center
                hover:bg-gray-100 hover:bg-opacity-50
                transition-colors duration-200"
              type="submit"
            >
              <GoogleLogo />
              Ingresar con Google
            </button>
          </form>

          <div className="flex items-center justify-center my-4">
            <hr className="flex-grow border-t-2 border-gray-300" />
            <span className="mx-4 text-sm text-gray-400">O</span>
            <hr className="flex-grow border-t-2 border-gray-300" />
          </div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" 
              border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contraseña"
              >
                Contraseña
              </label>
              <input
                className=" 
              border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"
                id="contraseña"
                type="password"
                placeholder="Contraseña"
                required
              />
            </div>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white 
                transition-colors duration-200
            font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4"
              type="submit"
            >
              Ingresar
            </button>
            <p className="text-left mt-1 text-gray-700 text-sm">
              ¿Olvidaste tu contraseña?{' '}
              <a
                className="text-purple-700 hover:underline
              
              "
                href="/forgot-password"
              >
                Recuperar
              </a>
            </p>
          </form>
          <hr className="flex-grow my-4 border-t-2 border-gray-300" />
          <div>
            <p className="text-center text-gray-700 text-sm">
              ¿Aún tienes una cuenta?{' '}
              <a
                className="text-purple-700 hover:underline
              
              "
                href="/register"
              >
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
