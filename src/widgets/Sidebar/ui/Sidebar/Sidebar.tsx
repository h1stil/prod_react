import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwithcer";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}>
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}>
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainIcon className={cls.icon} />
            <span className={cls.link}> {t("Главная страница")}</span>
          </AppLink>
        </div>
        <div className={cls.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon className={cls.icon} />
            <span className={cls.link}> {t("О сайте")}</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
