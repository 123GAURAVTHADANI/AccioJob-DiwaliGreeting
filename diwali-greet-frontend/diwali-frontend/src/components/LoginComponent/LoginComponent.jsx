import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";

function LoginComponent() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const apiVersion = import.meta.env.VITE_APP_API_VERSION;
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("email", value.email);
    console.log("password", value.password);
    axios
      .post(
        `${apiUrl}/${apiVersion}/user/login`,
        {
          email: value.email,
          password: value.password,
        },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <Stack spacing={2}>
      <h1>Login Page</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleChange("email")}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handleChange("password")}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Stack>
  );
}
export default LoginComponent;
