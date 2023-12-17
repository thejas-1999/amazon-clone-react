import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
        alt="amazone-logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello guest</span>
          <span className="header__optionLineTwo">sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">return</span>
          <span className="header__optionLineTwo">orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
