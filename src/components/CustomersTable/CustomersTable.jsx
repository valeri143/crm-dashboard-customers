import { customers } from '../../data/customers';
export const CustomersTable = () => (
  <div className="table">
    <table className="table__content">
      <thead className="table__head">
        <tr className="table__row-head">
          <th className="table__data-name">Customer Name</th>
          <th className="table__data-company">Company</th>
          <th className="table__data-phone">Phone Number</th>
          <th className="table__data-email">Email</th>
          <th className="table__data-country">Country</th>
          <th className="table__data-status">Status</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index} className="table__row-body">
            <td>{customer.name}</td>
            <td>{customer.company}</td>
            <td>{customer.phone}</td>
            <td>{customer.email}</td>
            <td>{customer.country}</td>
            <td>
              <span
                className={`table__data-status ${
                  customer.status === 'Active'
                    ? 'table__data-status--active'
                    : 'table__data-status--inactive'
                }`}
              >
                {customer.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
