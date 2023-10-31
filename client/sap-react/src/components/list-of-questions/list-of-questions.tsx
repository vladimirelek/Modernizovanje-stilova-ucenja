import Alert from '@mui/material/Alert/Alert';
import './list-of-questions.css';
import PersonIcon from "@mui/icons-material/Person";


const ListOfQuestions = () => {
  return (
    <div className="user-profile-container">
       
        <span className="span-style">
          <PersonIcon color="primary" sx={{ fontSize: 30 }} />
          <h3>Stefan Lalović</h3><h3>4</h3>
        </span>
        <hr />
        <span className="span-style">
          <PersonIcon color="primary" sx={{ fontSize: 30 }} />
          <h3>Vladimir Elek</h3><h3>7</h3>
        </span>
        <hr />
        <span className="span-style">
          <PersonIcon color="primary" sx={{ fontSize: 30 }} />
          <h3>Stefan Saratlija</h3><h3>4</h3>
        </span>
        <hr />
        <span className="span-style">
          <PersonIcon color="primary" sx={{ fontSize: 30 }} />
          <h3>Goran Milanović</h3><h3>12</h3>
        </span>
        <hr />
        <span className="span-style">
          <PersonIcon color="primary" sx={{ fontSize: 30 }} />
          <h3>Marko Marković</h3><h3>7</h3>
        </span>
        <hr />

       
    </div>
  );
};

export default ListOfQuestions;
