import React from 'react'
import Product from '../Product'

const Results = ({Products}) => {
  const {Inventory} = Products
  const [x] = Inventory
  const {category} = x
  const {Sporting, Electronics} = category
  const {Product1, Product2, Product3} = Sporting
  const {Product4, Product5, Product6} = Electronics
  return (
    <>
        <table>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            <tr>
                <th>Sporting Goods</th>
            </tr>
            <tr>
            <Product name={Product1.name} Price={Product1.price}/>
            </tr>
            <tr>
            <Product name={Product2.name} Price={Product2.price}/>
            </tr>
            <tr>
            <Product name={Product3.name} Price={Product3.price}/>
            </tr>
            <tr>
            <Product name={Product4.name} Price={Product4.price}/>
            </tr>
            <tr>
            <Product name={Product5.name} Price={Product5.price}/>
            </tr>
            <tr>
            <Product name={Product6.name} Price={Product6.price}/>
            </tr>
        </table>
    </>
  )
}

export default Results