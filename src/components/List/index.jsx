import React from 'react'
import Nav from '../Nav'
import Results from '../Results'

const List = () => {
  const Products = {
    'Inventory' : [
      { 
        'category' : {'Sporting' : {
          'Product1' : {
            'id' : 1,
            'name' : 'Football',
            'price' : 49.99
          },
          'Product2' : {
            'id' : 2,
            'name' : 'Baseball',
            'price' : 9.99
          },
          Product3 : {
            'id' : 3,
            'name' : 'Basketball',
            'price' : 29.99
          },
        },
        Electronics : {
          Product4 : {
            'id' : 1,
            'name' : 'iPod Touch',
            'price' : 99.99
          },
          Product5 : {
            'id' : 2,
            'name' : 'iPhone 5',
            'price' : 399.99
          },
          Product6 : {
            'id' : 3,
            'name' : 'Nexus 7',
            'price' : 199.99
          },
        }},
      }
  ]}
    console.log(Products)
  return (
    <>
        <Nav/>
        <Results Products={Products}/>
    </>
  )
}

export default List