import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getCart, removeItem } from './CartHelpers';
import Card from './Card';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';


const Cart = () =>{
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    const showItems = (items) => {
        return(
            <div>
                <h2>Your cart has{`${items.length}`} items</h2>
                <hr/>
                {items.map((product, idx) => (
                    <Card 
                        product={product} 
                        key={idx} 
                        showAddToCartButton={false} 
                        cartUpdate={true}
                        showRemoveProductButton = {true}
                        setRun={setRun}
                        run={run}
                        />
                ))}
            </div>
        )
    }

    const noItemsMessage = (items) =>(
        <h2>Cart is empty.<br/> <Link to='/shop'>Continue Shopping</Link> </h2>
    )

    useEffect(() => {
        setItems(getCart())
    }, [run])
    return(
        <Layout title='Shooping Cart' description='Manage your cart items' className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>
                <div className='col-4'>
                    <h2 className='mb-4'>Your cart summary</h2>
                    <hr/>
                    <Checkout products={items} setRun={setRun} run={run}/>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;