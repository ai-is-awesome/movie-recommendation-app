import "./navbar.scss";
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { textAlign } from "@mui/system";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navLeft">
          <img
            id="logo"
            src={require("../../Logos/RectangleLogo.png")}
            alt="Suedeo Logo"
          />
          <span className="navBarLink" id="home-link">Home</span>
          <span className="navBarLink" id="series-link">Series</span>
          <span className="navBarLink" id="movies-link">Movies</span>
          <span className="navBarLink" id="watch-list-link">Watch List</span>
        </div>
        <div className="navRight">
          <TextField id="search"
            label="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon className="icon"/>
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
          <SettingsIcon className="icon" />
          <span id="userName">UserName</span>
          <div className="icon" />
          <img
            id="profile-img"
            src={require("../../Logos/Suedeo_Movies_Logo.jpeg")}
            alt="Users profile picture"
          />
          <div className="profile">
            <div className="icon" />
            <div className="options">
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;