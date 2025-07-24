import { useTranslation } from "react-i18next";

export const AboutData = () => {
  const { t } = useTranslation();

  const aboutData = [
    {
      title: t("aboutData_myStartTitle"),
      text: t("aboutData_myStartText"),
    },
    {
      title: t("aboutData_curiosityTitle"),
      text: t("aboutData_curiosityText"),
    },
  ];

  return aboutData;
};
