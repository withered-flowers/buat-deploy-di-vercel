import ContentHome from "../components/ContentHome";
import CustomButton from "../components/CustomButton";
import FormUntukLogin from "../components/FormUntukLogin";

const HomePage = () => {
  const buttonDitekan = () => {
    console.log("Halaman Pertama - One");
  };

  return (
    <>
      <ContentHome />
      <CustomButton
        namaDariButton="Siji"
        ketikaTombolDiklikJalaninIni={buttonDitekan}
      />
      <FormUntukLogin />
    </>
  );
};

export default HomePage;
