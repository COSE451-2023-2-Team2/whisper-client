import ButtonLecture from "@/components/atoms/button/ButtonLecture";
import { LectureSelectFieldProps } from "./index.d";
import s from "./index.module.scss";

export default function LectureSelectField(props: LectureSelectFieldProps) {
  const lectureButtons = props.lectureNames.map((lectureName, index) => (
    <ButtonLecture key={index} name={lectureName}></ButtonLecture>
  ));

  return (
    <div className={s.lecture_select_field}>
      <div className={s.lecture_label}>{props.label}</div>
      <div className={s.lecture_list}>{lectureButtons}</div>
    </div>
  );
}
