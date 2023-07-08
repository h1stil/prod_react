import { profileReducer } from "entities/Profile/intex";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames("", {}, [className])}>{t("Profile Page")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
