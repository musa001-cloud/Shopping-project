import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';

function History() {
  const [history, setHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem('orderHistory');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch {
      return [];
    }
  });

  const clearHistory = () => {
    localStorage.removeItem('orderHistory');
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">

          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Order History
            </h1>

            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="bg-red-500 text-white px-4 py-2 rounded-md
                hover:bg-red-600 transition"
              >
                Clear History
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                You don't have any order history yet.
              </p>
            </div>
          ) : (
            <div className="space-y-6 mt-6">
              {history.map((order, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-5"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="font-bold text-lg">
                        Order #{history.length - index}
                      </h2>

                      <p className="text-sm text-gray-500">
                        {order.date}
                      </p>
                    </div>

                    <p className="font-bold text-blue-600">
                      ₦{Number(order.total).toLocaleString('en-NG', {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between
                        border-t pt-3"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />

                          <div>
                            <p className="font-semibold">
                              {item.name}
                            </p>

                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>

                        <p className="font-semibold">
                          ₦{Number(item.price).toLocaleString('en-NG')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default History;