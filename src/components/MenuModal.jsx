import React, { useEffect, useState } from 'react';
import { FiX, FiMenu, FiInfo, FiShoppingCart } from 'react-icons/fi';

const menuSections = [
  {
    title: 'HOT & COLD SANDWICHES',
    items: [
      ['Chicken Baguette', '3.50'],
      ['Cheese Salad Baguette', '3.50'],
      ['Tuna Baguette', '3.50'],
      ['Tuna Cob', '2.00'],
      ['Chilli Cheese Toastie', '2.50'],
      ['Pepperoni & Cheese Toastie', '3.50'],
      ['Pepperoni & Cheese Bagel', '3.00'],
      ['Double Cheese Bagel', '2.00'],
    ],
    image: '/sandwich.jpg',
  },
  {
    title: '100% FRESH JUICE',
    items: [
      ['Orange Juice', '3.50'],
      ['Pomegranate Juice', '3.50'],
      ['Orange Juice + Ginger Shot', '4.50'],
      ['Ginger Shot', '1.35'],
      ['Add Fresh Lime', '0.65'],
    ],
    image: null,
  },
  {
    title: 'TEA & COFFEE',
    items: [
      ['Karak Chai (House Special)', '2.00'],
      ['Masala Chai', '2.20'],
      ['Pink Chai', '2.20'],
      ['Caramel Chai', '2.20'],
      ['Karak Coffee (House Special)', '2.00'],
      ['Chai Latte (House Special)', '2.50'],
      ['Espresso', '1.50'],
      ['Americano', '2.85'],
    ],
    image: null,
  },
];

const MenuModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const closeModal = (e) => {
    // Close the modal if clicking on the overlay area
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
      onClick={closeModal}
    >
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <div className="w-12 h-12 border-4 border-[#C9A84C] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-md shadow-lg">
          {/* Close Button */}

          {/* Top Bar */}
          <div className="relative w-full">
            <img
              src="/sandwich.jpg"
              alt="Food Background"
              loading="lazy"
              className="w-full h-48 md:h-60 object-cover"
            />
            <div className="absolute top-0 left-0 w-full bg-white/70 backdrop-blur-sm flex justify-between items-center px-4 py-3">
              <h1 className="text-lg font-bold text-gray-800 tracking-wider">SAMOCHAI</h1>
              <div className="flex items-center gap-4 text-gray-700 text-xl">
                <FiMenu className="hover:text-[#1A1A1A] cursor-pointer" />
                <FiInfo className="hover:text-[#1A1A1A] cursor-pointer" />
                <FiShoppingCart className="hover:text-[#1A1A1A] cursor-pointer" />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-white bg-black rounded-full p-1 hover:text-red-600"
                  aria-label="Close"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          <div>
            {menuSections.map((section, idx) => (
              <div key={idx} className="p-6 border-b">
                {!section.image && (
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-gray-800">
                  {section.items.map(([item, price], i) => (
                    <div key={i} className="flex justify-between border-b py-1">
                      <span>{item}</span>
                      <span>{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuModal;
