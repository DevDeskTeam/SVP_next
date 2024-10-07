import JoeImage from "@/assets/images/Joe.png";
import Macwell from "@/assets/images/Macwell.png";
import David from "@/assets/images/David.png";
import { useTranslations } from "next-intl";
export const customerSay = () => {
  const t = useTranslations("CustomerSay");

  return [
    {
      id: 1,
      number: 1,
      image: JoeImage,
      title: t("title1"),
      role: t("role1"),
      description: t("description1"),
    },
    {
      id: 2,
      number: 2,
      image: Macwell,

      title: t("title2"),
      role: t("role2"),
      description: t("description2"),
    },
    {
      id: 3,
      number: 3,
      image: David,

      title: t("title3"),
      role: t("role3"),
      description: t("description3"),
    },
  ];
};

export default customerSay;
