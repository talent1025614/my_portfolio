import { useTranslation } from "react-i18next"

export function EducationData() {

	const {t} = useTranslation();

	const educationData = [
		{
			course: t("educationData_courseWebDev"),
			level: t("educationData_levelWebDev"),
			institution: t("educationData_institutionWebDev"),
			period: t("educationData_periodWebDev"),
			about: t("educationData_aboutWebDev")
		},
		{
			course: t("educationData_courseExplorer"),
			level: t("educationData_levelExplorer"),
			institution: t("educationData_institutionExplorer"),
			period: t("educationData_periodExplorer"),
			about: t("educationData_aboutExplorer")
		}
	]

	return educationData;
}
