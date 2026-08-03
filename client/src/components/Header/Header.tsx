import "./Header.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-container">
        <IconButton aria-label="Open Menu">
          <MenuIcon />
        </IconButton>

        <h1 className="logo">🤖 AI Chat Assistant</h1>
      </nav>
    </header>
  );
};

export default Header;