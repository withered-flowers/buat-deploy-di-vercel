import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../configs/config";

const FormSubmitFile = () => {
  const [fileYangMauDikirim, setFileYangMauDikirim] = useState();

  const inputOnChangeHandler = (e) => {
    const inputan = e.target.files[0];

    console.log(inputan);

    setFileYangMauDikirim(inputan);
  };

  const formOnSubmitHandler = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    // Bikin form datanya terlebih dahulu
    const formData = new FormData();

    // set key yang dibutuhkan untuk ditambahkan valuenya
    formData.append("imageYangMauDiterima", fileYangMauDikirim);

    try {
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={formOnSubmitHandler}>
      <input type="file" onChange={inputOnChangeHandler} />
      <button type="submit">Submit File</button>
    </form>
  );
};

export default FormSubmitFile;
