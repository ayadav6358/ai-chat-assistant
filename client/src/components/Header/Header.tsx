import "./Header.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-container">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <h2>🤖 AI Chat Assistant</h2>
      </nav>
    </header>
  );
};

export default Header;