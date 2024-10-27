import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Home', url: '/' },
    { name: 'New Properties', url: '/new-properties' },
    { name: 'About Us', url: '/about' },
    { name: 'Contact Us', url: '/contact' }
  ]);
  
  const [showPopup, setShowPopup] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', url: '' });

  const addMenuItem = () => {
    if (newItem.name && newItem.url) {
      setMenuItems([...menuItems, newItem]);
      setNewItem({ name: '', url: '' });
      setShowPopup(false);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">MyApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-primary" onClick={() => setShowPopup(true)}>Add +</button>
        </div>
      </nav>

      {showPopup && (
        <div className="popup">
          <h5>Add New Menu Item</h5>
          <input className="form-control mb-2" placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
          <input className="form-control mb-2" placeholder="URL" value={newItem.url} onChange={e => setNewItem({ ...newItem, url: e.target.value })} />
          <button className="btn btn-primary" onClick={addMenuItem}>Add</button>
          <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
