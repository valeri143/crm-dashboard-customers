export const Pagination = () => {
  const mockArray = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <div className="customers__footer-pagination">
      <button className="customers__pagination-prev">{'<'}</button>
      <ul className="customers__footer-pagination-list">
        {mockArray.map((num, index) => (
          <li key={index}>
            {num === mockArray[0] || num < 5 || num === mockArray.length ? (
              <button
                className={`customers__pagination-btn ${
                  num === mockArray[0]
                    ? 'customers__pagination-btn--selected'
                    : ''
                }`}
                style={{
                  marginRight: num === mockArray.length ? '0px' : '12px',
                }}
              >
                {num}
              </button>
            ) : (
              num === 5 && (
                <span className="customers__pagination-dots">...</span>
              )
            )}
          </li>
        ))}
      </ul>
      <button className="customers__pagination-next">{'>'}</button>
    </div>
  );
};
