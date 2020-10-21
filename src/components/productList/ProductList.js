import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import './ProductList.scss'

export const ProductList = () => {

    const {collections, incrementNumber, decrementNumber} = useContext(GlobalContext);
    console.log(collections);

    return (
        <>
            <ListGroup className="mt-4">
                {collections.map(collection => (
                    <ListGroupItem className="d-flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <div
                            className='image'
                            style={{
                                width: '60%',
                                height: '350px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                marginBottom: '5px',
                                backgroundImage: `url(${collection.imageUrl})`
                            }}
                        />
                        <div className="ml auto d-flex" style={{flexDirection: "column", justifyContent: "space-between"}}>
                            <strong>{collection.name}</strong>
                            <strong>{collection.price}</strong>
                            {collection.isAdd ? <Button onClick={() => incrementNumber(collection.id)} color="success">Add Cart</Button>
                                : <Button onClick={() => decrementNumber(collection.id)} color="danger">Remove Cart</Button>}
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
}

