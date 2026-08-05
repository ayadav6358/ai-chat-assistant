import './Header.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-container">
        <div className="header-brand">
          <IconButton aria-label="Open navigation" color="inherit">
            <MenuIcon />
          </IconButton>
          <div>
            <h2>AI Chat Assistant</h2>
            <p>Enterprise-ready interface foundation</p>
          </div>
        </div>

        <div className="header-actions">
          <IconButton aria-label="Theme toggle" color="inherit">
            <DarkModeOutlinedIcon />
          </IconButton>
          <IconButton aria-label="Settings" color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;