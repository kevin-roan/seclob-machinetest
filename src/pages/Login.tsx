import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { LoginCard } from "../components";

const Login = () => {
  return (
    <div className="hero_container">
      <section className="hero_left">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/017/398/788/small/white-circle-free-png.png"
          alt="Logo"
          className="logo"
        />
        <div className="wrapper">
          <h1>BASE</h1>
          <div className="social_icons_wrapper">
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <FaGithub />
            <IoLogoDiscord />
          </div>
        </div>
      </section>
      <section className="hero_right flex items-center justify-center flex-col w-[50vmax]">
        <div className="flex items-center w-[55%] flex-col">
          <div className="self-start px-5 py-4">
            <h4 className="font-bold text-3xl text-start py-2">Sign In</h4>
            <p>Sign in to your account</p>
          </div>
          <div className="flex items-center self-start">
            <div className="px-3 py-1 bg-[#fff] rounded-md m-4 flex items-center">
              <img
                alt="google icon"
                src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
                className="mx-2 h-5"
              />
              <p className="text-[gray] mx-1 text-xs">Sign in with Google</p>
            </div>
            <div className="px-3 py-1 bg-[#fff] rounded-md flex items-center">
              <img
                alt="google icon"
                src="https://1000logos.net/wp-content/uploads/2016/10/Apple_logo_grey.png"
                className="mx-2 h-5 "
              />

              <p className="text-[gray] mx-1 text-xs">Sign in with Apple</p>
            </div>
          </div>
        </div>
        <LoginCard />
        <label className="text-[gray] py-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-[var(--primary-color)]">
            Register here
          </a>
        </label>
      </section>
    </div>
  );
};

export default Login;
