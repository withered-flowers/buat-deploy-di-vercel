import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../configs/config";

const FormUntukLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ???
  const navigate = useNavigate();

  const inputEmailOnChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };

  const formOnSubmitHandler = async (evt) => {
    evt.preventDefault();

    console.log(email, password);

    try {
      // Kirim ke backend
      // POST /login
      // JSON { email, password }
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      console.log(response.data);

      // simpen data di local storage
      localStorage.setItem("token", response.data.data.access_token);

      // Pindahin ke halaman lain
      navigate("/second");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={formOnSubmitHandler}>
      <input
        onChange={inputEmailOnChangeHandler}
        value={email}
        type="text"
        placeholder="Your Email"
      />
      <input
        value={password}
        onChange={inputPasswordOnChangeHandler}
        type="password"
        placeholder="Your Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUntukLogin;
