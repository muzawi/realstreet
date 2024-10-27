import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './navbar.css';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Home', url: '/' },
    { id: '2', name: 'New Properties', url: '/new-properties' },
    { id: '3', name: 'About Us', url: '/about' },
    { id: '4', name: 'Contact Us', url: '/contact' }
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', url: '' });

  const addMenuItem = () => {
    if (newItem.name && newItem.url) {
      setMenuItems([...menuItems, { id: Date.now().toString(), ...newItem }]);
      setNewItem({ name: '', url: '' });
      setShowPopup(false);
    }
  };

  // Function to handle reordering of menu items after drag and drop
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;  // If dropped outside the list, do nothing

    const updatedMenuItems = Array.from(menuItems);
    const [reorderedItem] = updatedMenuItems.splice(result.source.index, 1);  // Remove item from source index
    updatedMenuItems.splice(result.destination.index, 0, reorderedItem);  // Insert item at destination index

    setMenuItems(updatedMenuItems);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">MyApp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Setting up DragDropContext and Droppable */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="menu">
              {(provided) => (
                <ul className="navbar-nav mr-auto" {...provided.droppableProps} ref={provided.innerRef}>
                  {menuItems.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <li 
                          className="nav-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Link className="nav-link" to={item.url}>{item.name}</Link>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder} {/* Placeholder for drag-and-drop */}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
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
