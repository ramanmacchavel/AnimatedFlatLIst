import React, {Component, useState} from 'react';

export const getMovies = async () => {
  
  const movies  = useState([
    { name: 'Aquanza', description:'The Best water in the city', price:'35', key:'1'},
    { name: 'Bisleri', description:'Water with added minerals', price:'75', key:'2'},
    { name: 'Bailley', description:'The Best water in the city', price:'35', key:'3'},
    { name: 'Aquafina', description:'The Best water in the city', price:'35', key:'4'},
    { name: 'Kinley', description:'The Best water in the city', price:'35', key:'5'},
    { name: 'Fontus', description:'The Best water in the city', price:'35', key:'6'}                                
    ]);
  
  return movies;
};