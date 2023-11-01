import LoginBox from "@/components/login/LoginBox";
import s from "./index.module.scss";
import Background from "@/public/assets/background.png";
import Image from "next/image";
import Header from "@/components/layouts/Header";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import ButtonModal from "@/components/atoms/button/ButtonModal";

export default function Login() {
  return (
    <div className={s.login}>
      <Header></Header>
      <div className={s.login_content}>
        {/* <LoginBox></LoginBox> */}
        {/* <Image
          src={Background}
          alt="background"
          width={650}
          height={500}
        ></Image> */}
        {/* <ButtonSubmit name="test"></ButtonSubmit>
        <ButtonModal name="test"></ButtonModal> */}
      </div>
    </div>
  );
}
