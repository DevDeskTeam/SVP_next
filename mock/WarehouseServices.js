import { useTranslations } from "next-intl";

export const warehouseservices = () => {
  const t = useTranslations("WarehousePageServices");

  return [
    {
      id: 1,
      number: 1,
      title: t("title1"),
      description: t("description1"),
    },
    {
      id: 2,
      number: 2,
      title: t("title2"),
      description: t("description2"),
    },
    {
      id: 3,
      number: 3,
      title: t("title3"),
      description: t("description3"),
    },
  ];
};

export default warehouseservices;
