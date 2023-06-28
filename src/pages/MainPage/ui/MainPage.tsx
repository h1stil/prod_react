import { Counter } from "entities/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const onChangeInput = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t("Главная страница")}
      <Input onChange={onChangeInput} value={value} />
    </div>
  );
};

export default MainPage;
