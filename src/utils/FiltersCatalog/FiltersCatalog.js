import React, { useState } from 'react';
import { urunler } from '../../constants/urunler';
import './FiltersCatalog.css';

const FiltersCatalog = () => {
  const [category, setCategory] = useState(urunler);
  const [activeButton, setActiveButton] = useState('All');

  const handleBtns = (word) => {
    setActiveButton(word);
    if (word === "All") {
      setCategory(urunler);
    } else {
      const filtered = urunler.filter(item => item.kind.toLowerCase() === word.toLowerCase());
      setCategory(filtered);
    }
  }

  return (
    <div>
      <div className="filter-buttons">
        <button 
          value="All" 
          onClick={() => handleBtns("All")} 
          className={activeButton === "All"? "active" : ""}
        >
          All
        </button>
        <button 
          value="Cars" 
          onClick={() => handleBtns("Cars")} 
          className={activeButton === "Cars"? "active" : ""}
        >
          Cars
        </button>
        <button 
          value="Views" 
          onClick={() => handleBtns("Views")} 
          className={activeButton === "Views"? "active" : ""}
        >
          Views
        </button>
      </div>
      <div className="product-list">
        {category.map((item) => (
          <div key={item.id} className="product-item">
            <div>
              <img src={item.linkImg} alt={item.name} className="product-image" />
              <div className="product-info">
                <h1>{item.name}</h1>
                <p>{item.kind}</p>
                <p>{item.info.replace(/(?<=[a-zA-Z])(?=[A-Z])/g, ' ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersCatalog;