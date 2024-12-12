import React from 'react';

const MenuItemList = ({ menuItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => (
        <div key={item.id} className="border p-4 rounded-md shadow-md flex flex-col items-center">
          <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-1">{item.description}</p>
          <p className="text-gray-800 font-bold">Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
