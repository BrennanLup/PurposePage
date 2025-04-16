import './Header.css';


interface HeaderProps {
  logo?: string;
  onSignUp?: () => void;
  onLogin?: () => void;
}

const Header = ({ logo = 'PurposePage', onSignUp, onLogin }: HeaderProps) => {
  return (
    <header className="header">
      <div className="logo">{logo}</div>
      <nav className="nav-buttons">
      </nav>
    </header>
  );
};

export default Header; 