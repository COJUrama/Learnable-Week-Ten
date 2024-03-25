/* eslint-disable react/prop-types */
import './Header.css';

function Header({ filter, setFilter }) {
  return (
    <div className="search__header">
      <form action="" className="search__header__input">
        <img src="/images/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onInput={(e) => setFilter(e.target.value)}
        />
      </form>
      <aside className="search__header__divider" />
      <div className="search__header__profile">
        <figure className="search__header__avatar">
          <img src="/images/memoji.png" alt="" />
        </figure>
        <div className="search__header__details">
          <p className="search__header__name">Johnson</p>
          <p className="search__header__role">Assistant</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
