import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("Неизвестная ошибка")}</p>
      <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
        {t("Обновить страницу")}
      </Button>
    </div>
  );
};

export default PageError;
