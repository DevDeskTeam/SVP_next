import { useTranslations } from "next-intl";
export const useServices = () => {
  const t = useTranslations("HomePageServices");

  return [
    {
      id: 1,
      number: 1,
      title: t("title1"),
      description: t("description1"),
      route: "/transportation",
    },
    {
      id: 2,
      number: 2,
      title: t("title2"),
      description: t("description2"),
      route: "/customerbroker",
    },
    {
      id: 3,
      number: 3,
      title: t("title3"),
      description: t("description3"),
      route: "/warehouse",
    },
    {
      id: 4,
      number: 4,
      title: t("title4"),
      description: t("description4"),
      route: "/cargo",
    },
  ];
};
