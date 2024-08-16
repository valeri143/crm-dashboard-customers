import sprite from '../../assets/images/sprite.svg';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.png';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo-box">
        <img
          className="sidebar__logo"
          src={logo}
          alt="Logo"
          width={37}
          height={37}
        />
        <div className="sidebar__logo-text">
          <h2>Dashboard</h2>
          <p>v.01</p>
        </div>
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-dashboard`} />
            </svg>
            <span>Dashboard</span>
          </li>
          <li className="sidebar__nav-item">
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-product`} />
            </svg>
            <span>Product</span>
            <svg className="sidebar__chevron-right">
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="sidebar__nav-item sidebar__nav-item--selected">
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-customers`} />
            </svg>
            <span>Customers</span>
            <svg className="sidebar__chevron-right">
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="sidebar__nav-item">
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-income`} />
            </svg>
            <span>Income</span>
            <svg className="sidebar__chevron-right">
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="sidebar__nav-item">
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-promote`} />
            </svg>
            <span>Promote</span>
            <svg className="sidebar__chevron-right">
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
          <li className="sidebar__nav-item">
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-help`} />
            </svg>
            <span>Help</span>
            <svg className="sidebar__chevron-right">
              <use xlinkHref={`${sprite}#chevron-right`} />
            </svg>
          </li>
        </ul>
      </nav>
      <div className="sidebar__user">
        <img
          className="sidebar__user-img"
          src={avatar}
          alt="User's Avatar"
          width="42"
          height="42"
        />
        <div className="sidebar__user-wrapper">
          <h3 className="sidebar__user-name">Evano</h3>
          <p className="sidebar__user-position">Project Manager</p>
        </div>
      </div>
    </aside>
  );
};
