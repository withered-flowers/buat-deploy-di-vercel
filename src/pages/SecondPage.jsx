import ContentSecond from "../components/ContentSecond";
import CustomButton from "../components/CustomButton";
import FormSubmitFile from "../components/FormSubmitFile";

const SecondPage = () => {
  const onClickHandler = () => {
    console.log("Halaman Kedua - Two");
  };

  return (
    <>
      <ContentSecond />
      <CustomButton
        namaDariButton="Loro"
        ketikaTombolDiklikJalaninIni={onClickHandler}
      />
      <FormSubmitFile />
    </>
  );
};

export default SecondPage;
