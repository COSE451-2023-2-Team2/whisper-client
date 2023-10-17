import LoginBox from "@/components/login/LoginBox";
import s from "./index.module.scss";
import Background from "@/public/assets/background.png";
import Image from "next/image";
import Header from "@/components/layouts/Header";

export default function Login() {
  return (
    <div className={s.login}>
      <Header></Header>
      <div className={s.login_content}>
        <LoginBox></LoginBox>
        {/* <Image
          src={Background}
          alt="background"
          width={650}
          height={500}
        ></Image> */}
      </div>
    </div>
  );
}
