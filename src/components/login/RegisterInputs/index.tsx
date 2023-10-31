import { useState } from "react";
import RegisterFirstInputs from "@/components/login/RegisterFirstInputs/";
import RegisterSecondInputs from "@/components/login/RegisterSecondInputs/";
import s from "./index.module.scss";

export default function RegisterInputs() {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const moveToNextPage = () => {
    setIsFirstPage(false);
  };

  return (
    <div>
      {isFirstPage === true ? (
        <RegisterFirstInputs movePage={moveToNextPage} />
      ) : (
        <RegisterSecondInputs />
      )}
    </div>
  );
}
