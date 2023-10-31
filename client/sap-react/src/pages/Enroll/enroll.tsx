import { Link } from "react-router-dom";
import register from "../Autentifikacija/Register/register";
import "./enroll-style.css";
import { Button, Input, TextField } from "@mui/material";
const Enroll = () => {
  return (
    <div className="container">
      <TextField
        id="outlined-basic"
        label="Kod za prijavu"
        variant="outlined"
      />
      <Link to="/student">
        <Button variant="contained">Priključi se</Button>
      </Link>
    </div>
  );
};
export default Enroll;
