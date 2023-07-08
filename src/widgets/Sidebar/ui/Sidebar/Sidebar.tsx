import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwithcer";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => SidebarItemsList.map((item) => (
      <SidebarItem item={item} key={item.path} collapsed={collapsed} />
    )),
    [collapsed],
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
