import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// <img src={item.image_url} alt={item.name}/>

const Item = ({ item }) => (
  <li>
    <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}
      activeStyle={{ width: 700}}>
      {item.name}
    </Link>
  </li>
);

export default Item;
