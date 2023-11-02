import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import InputField from "@/components/molecules/login/InputField";
import LectureSelectField from "@/components/molecules/login/LectureSelectField";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import s from "./index.module.scss";
import useInputValidation from "@/hooks/useInputValidation";

interface Lecture {
  id: number;
  title: string;
  selected: boolean;
}

export default function RegisterSecondForm() {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const fetchLectures = async () => {
    // NOTE: 임시로 예시 강의 사용 - 실제로는 서버에서 강의 목록을 불러오는 방식
    setLectures([{ id: 0, title: "COSE441", selected: false }]);
  };

  const userNameChecker = (userName: string) => {
    return userName.length > 0 ? true : false;
  };

  const {
    input: userName,
    isValidInput: isValidUserName,
    inputChangeHandler: userNameChangeHandler,
  } = useInputValidation(userNameChecker);

  const addLecture = (lectureId: number) => {
    console.log(lectureId);
    setLectures((prevLectures) =>
      prevLectures.map((lecture) =>
        lecture.id === lectureId
          ? { ...lecture, selected: !lecture.selected }
          : lecture
      )
    );
  };

  const confirmHandler = () => {
    // TODO: 로직 작성
    console.log(userName);
    console.log(lectures);
    console.log("채팅 이동!");
  };

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 강의 목록을 가져옴
    fetchLectures();
  }, []);

  return (
    <Fragment>
      <div className={s.register_input}>
        <InputField
          id="username"
          type="text"
          label="User name"
          placeholder="Enter your user name"
          value={userName}
          isCorrect={
            isValidUserName === "default" || isValidUserName === "true"
          }
          onChange={userNameChangeHandler}
        ></InputField>
        <LectureSelectField
          label="Choose class"
          lectureList={lectures}
          lectureClickHandler={addLecture}
        ></LectureSelectField>
      </div>
      <div className={s.register_button}>
        <ButtonSubmit
          name="Sign up"
          disabled={!isValidUserName}
          onClick={confirmHandler}
        ></ButtonSubmit>
      </div>
    </Fragment>
  );
}
