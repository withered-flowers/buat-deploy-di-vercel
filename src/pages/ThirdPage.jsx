// Pengen pake req.query
import { useSearchParams } from "react-router-dom";
import ContentThird from "../components/ContentThird";
import CustomButton from "../components/CustomButton";

const ThirdPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);
  console.log(searchParams.get("dataTambahan"));

  const touchMe = () => {
    console.log("Halaman Ketiga - Three");
  };

  return (
    <>
      <ContentThird />
      <p>Ini tambahan aja</p>
      <CustomButton
        namaDariButton="Telu"
        ketikaTombolDiklikJalaninIni={touchMe}
      />
    </>
  );
};

export default ThirdPage;
