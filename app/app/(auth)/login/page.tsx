import LoginData from "@/components/pages/login/LoginData";
import Title from "@/components/pages/login/Title";

const Login = () => {
  return (
    <div className="bg-bg-sec-color w-full h-[100vh] p-5 lg:p-0 ">
      <div className="flex flex-col-reverse justify-between items-center lg:flex-row h-full w-full bg-[#fff] rounded-2xl">
        <Title />
        <LoginData />
      </div>
    </div>
  );
};

export default Login;
