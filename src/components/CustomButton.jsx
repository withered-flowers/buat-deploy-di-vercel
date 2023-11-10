/* eslint-disable react/prop-types */
const CustomButton = ({
  namaDariButton = "Default Button Name",
  ketikaTombolDiklikJalaninIni = () => console.log("Halo"),
}) => {
  return (
    <button
      className="rounded bg-blue-400 px-4 py-2 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
      onClick={ketikaTombolDiklikJalaninIni}
    >
      {namaDariButton}
    </button>
  );
};

export default CustomButton;
