import { BurgerButton } from '../BurgerButton/BurgerButton';
import { CustomersTable } from '../CustomersTable/CustomersTable';
import { Pagination } from '../Pagination/Pagination';
import search from '../../assets/images/search.svg';

export const Customers = () => {
  return (
    <main className="content">
      <h1 className="content__title">Hello Evano 👋🏼,</h1>
      <BurgerButton />
      <div className="customers">
        <header className="customers__header">
          <div className="customers__header-wrapper">
            <h2 className="customers__header-title">All Customers</h2>
            <p className="customers__header-subtitle">Active Members</p>
          </div>
          <div className="search">
            <img className="search__icon" src={search} alt="search" />
            <input className="search__input" type="text" placeholder="Search" />
          </div>
        </header>
        <CustomersTable />
        <div className="customers__footer">
          <p className="customers__footer-text">
            Showing data 1 to 8 of 256K entries
          </p>
          <Pagination />
        </div>
      </div>
    </main>
  );
};
