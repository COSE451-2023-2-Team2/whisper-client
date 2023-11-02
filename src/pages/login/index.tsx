import s from "./index.module.scss";
import Background from "@/public/assets/background.png";
import Image from "next/image";
import Header from "@/components/layouts/Header";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import ButtonModal from "@/components/atoms/button/ButtonModal";
import UserTextInput from "../../components/molecules/login/InputField/index";
import LoginForm from "@/components/organs/LoginForm";
import InputField from "../../components/molecules/login/InputField/index";
import RegisterFirstForm from "@/components/organs/RegisterFirstForm";
import LectureSelectField from "@/components/molecules/login/LectureSelectField";
import ButtonLecture from "@/components/atoms/button/ButtonLecture";
import RegisterSecondForm from "@/components/organs/RegisterSecondForm";
import LoginTemplate from "@/components/templates/LoginTemplate";

export default function Login() {
  return (
    // <div className={s.login}>
    //   <Header></Header>
    //   <div className={s.login_content}>
    //     {/* <LoginBox></LoginBox> */}
    //     {/* <LoginInputs></LoginInputs> */}
    //     {/* <Image
    //       src={Background}
    //       alt="background"
    //       width={650}
    //       height={500}
    //     ></Image> */}
    //     {/* <ButtonSubmit name="test"></ButtonSubmit>
    //     <ButtonModal name="test"></ButtonModal> */}
    //     {/* <UserTextInput
    //       id="test"
    //       label="test"
    //       type="password"
    //       placeholder="test"
    //     ></UserTextInput> */}
    //   </div>
    // </div>
    <LoginTemplate></LoginTemplate>
  );
}
