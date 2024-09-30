import { useTranslations } from "next-intl";

export const useFeatured = () => {
  const t = useTranslations("HomePageFeatured");

  return [
    {
      id: 1,
      title: "99%",
      description: t("description1"),
    },
    {
      id: 1,
      title: "99%",
      description: t("description2"),
    },
    {
      id: 1,
      title: "99%",
      description: t("description3"),
    },
    {
      id: 1,
      title: "99%",
      description: t("description4"),
    },
    {
      id: 1,
      title: "99%",
      description: t("description5"),
    },
    {
      id: 1,
      title: "99%",
      description: t("description6"),
    },
  ];
};
