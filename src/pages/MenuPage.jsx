// import React from 'react';
// import MenuCategory from '../components/MenuCategory';

// const MenuPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <MenuCategory />
//     </div>
//   );
// };

// export default MenuPage;

import React, { useState } from 'react';

const MenuPage = () => {
  const categories = [
    { id: 1, name: 'All', icon: '🍽️' },
    { id: 2, name: 'Mains', icon: '🍖' },
    { id: 3, name: 'Salads', icon: '🥗' },
    { id: 4, name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Juicy beef burger with lettuce, tomato, and cheese',
      price: 10.99,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
      tags: ['Popular', 'Spicy']
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh basil and mozzarella',
      price: 12.99,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
      tags: ['Vegetarian']
    },
    {
      id: 3,
      name: 'Garden Salad',
      description: 'Mixed greens with cherry tomatoes and balsamic',
      price: 8.99,
      category: 'Salads',
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      tags: ['Vegan', 'Healthy']
    },
    {
      id: 4,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee and mascarpone',
      price: 6.99,
      category: 'Desserts',
      imageUrl: 'https://images.pexels.com/photos/247685/pexels-photo-247685.jpeg',
      tags: ['Popular']
    },
    {
      id: 5,
      name: 'Cheeseburger',
      description: 'Cheddar cheese burger with pickles and onions',
      price: 11.99,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/1845288/pexels-photo-1845288.jpeg',
      tags: ['Popular']
    },
    {
      id: 6,
      name: 'Spaghetti Carbonara',
      description: 'Classic pasta with creamy carbonara sauce and pancetta',
      price: 13.49,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
      tags: ['Italian']
    },
    {
      id: 7,
      name: 'Caesar Salad',
      description: 'Crispy romaine with Caesar dressing and croutons',
      price: 9.99,
      category: 'Salads',
      imageUrl: 'https://images.pexels.com/photos/4197494/pexels-photo-4197494.jpeg',
      tags: ['Vegetarian']
    },
    {
      id: 8,
      name: 'Chicken Wings',
      description: 'Crispy wings with spicy buffalo sauce',
      price: 7.49,
      category: 'Starters',
      imageUrl: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg',
      tags: ['Popular', 'Spicy']
    },
    {
      id: 9,
      name: 'BBQ Ribs',
      description: 'Tender ribs with smoky barbecue sauce',
      price: 16.99,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg',
      tags: ['Popular']
    },
    {
      id: 10,
      name: 'Fish and Chips',
      description: 'Crispy battered fish with fries',
      price: 14.49,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/2955822/pexels-photo-2955822.jpeg',
      tags: ['Seafood']
    },
    {
      id: 11,
      name: 'Vegan Burger',
      description: 'Plant-based patty with lettuce, tomato, and avocado',
      price: 11.49,
      category: 'Mains',
      imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
      tags: ['Vegan']
    }
    // Add more items as needed
  ];
  

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = menuItems.filter(item =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } shadow-sm`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-blue-600">
                  ₹{item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MenuPage;