import './Left.css';

function Left() {
  return (
    <nav className="nav__left">
      <p className="nav__left__heading">Logged in as Johnson</p>
      <ul className="nav__left__list">
        <div className="nav__left__item">
          <object data="/images/dashboard.svg" type="image/svg+xml" />
          <li>All</li>
        </div>
        <div className="nav__left__item">
          <object data="/images/transaction.svg" type="image/svg+xml" />
          <li>Cohorts</li>
        </div>
        <div className="nav__left__item">
          <object data="/images/customers.svg" type="image/svg+xml" />
          <li>Students</li>
        </div>
        <div className="nav__left__item">
          <object data="/images/data.svg" type="image/svg+xml" />
          <li>Report</li>
        </div>
      </ul>
      <aside className="nav__left__divider"></aside>
    </nav>
  );
}

export default Left;
