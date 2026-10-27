
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Current Orders');

  return (
    <div>
      <h1>E-commerce Order Management</h1>

      <h2>Orders</h2>

      <button onClick={() => setPage('Current Orders')}>
        Current Orders
      </button>{' '}

      <button onClick={() => setPage('Order History')}>
        Order History
      </button>{' '}

      <button onClick={() => setPage('Cancelled Orders')}>
        Cancelled Orders
      </button>

      <hr />

      {page === 'Current Orders' && (
        <div>
          <h2>Current Orders</h2>
          <p>Order #101 - Mobile Phone - Processing</p>
          <p>Order #102 - Headphones - Shipped</p>
        </div>
      )}

      {page === 'Order History' && (
        <div>
          <h2>Order History</h2>
          <p>Order #90 - Laptop - Delivered</p>
          <p>Order #91 - Keyboard - Delivered</p>
        </div>
      )}

      {page === 'Cancelled Orders' && (
        <div>
          <h2>Cancelled Orders</h2>
          <p>Order #80 - Smart Watch - Cancelled</p>
        </div>
      )}
    </div>
  );
}

export default App;
