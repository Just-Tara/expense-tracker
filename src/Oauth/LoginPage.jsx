import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import lightBg from "../assets/lightMode.png";
import darkBg from "../assets/darkMode.png";

function LoginPage() {

  const navigate = useNavigate();

 const login = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    try {
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const userInfo = await userInfoResponse.json();
      localStorage.setItem("user", JSON.stringify(userInfo));

      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  },
  onError: () => console.log("Login Failed"),
});


  return (
    <div className="relative min-h-screen w-full overflow-hidden transition-all duration-500">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden dark:block transition-all duration-500"
        style={{ backgroundImage: `url(${darkBg})` }}
      ></div>

      <div className="absolute inset-0  dark:bg-black/20"></div>

      {/* Login Card */}
      <div className=" relative z-10 flex items-center justify-center min-h-screen">
        <div
          className="lg:w-[90%] md:w-1/2 max-w-[600px] h-[70%] px-20 py-15 rounded-2xl
         md:bg-white/10 lg:bg-white/10 md:dark:bg-black/100 lg:dark:bg-black/100 lg:backdrop-blur-lg
          shadow-2xl dark:text-white"
        >
          <h2 className="text-3xl font-bold mb-1 text-center">Welcome Back</h2>
          <p className="mb-6 text-center text-xs">
            Don't have an account?{" "}
            <Link to="/signup"  className="text-blue-500 dark:text-blue-700 cursor-pointer">Sign Up</Link>
          </p>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Username or Email"
              className="p-3 px-10 rounded-[10px] border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div>
              <input
                type="password"
                placeholder="Password"
                className="p-3 px-10 w-full rounded-[10px] border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs px-10 mt-1 text-blue-500 dark:text-blue-700  cursor-pointer">
                Forgotten Password?
              </p>
            </div>
            <button
              type="submit"
              className="mt-4 mb-7 bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center mb-7 px-4">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="mx-2 text-blue-500 dark:text-blue-700  text-sm">Or sign up with</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          {/* Google Login Button */}
          <button
            onClick={() => login()}
            type="button"
            className="flex items-center justify-center cursor-pointer gap-3 px-3 w-full bg-gray-400 dark:bg-gray-500 transition py-3 rounded-lg"
          >
            <FcGoogle size={22} />
            <span className="font-medium">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
