import { useTranslation } from "react-i18next";

export default function Homepage(){
  const {t} = useTranslation();

    return(
        <div>{t("homepage")}</div>
    );   
}