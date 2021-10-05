import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { connect } from 'react-redux';
import {addToCart} from '../store/cart';
import {Card, Button} from 'react-bootstrap'
import {addProduct,inventoryAction} from '../action/action';


function Products(props) {

  function handleClick(item){
    props.addToCart(item);
    props.addProduct(item);
    props.inventoryAction(item)
  }
  
  return (
    <div>
      {props.products.map(element => {
        return <Card style={{ marginLeft: '200px', marginTop: '50px', display: 'inline-block', width: '300px', border: '2px solid grey', marginBottom: '50px' }} sx={{ maxWidth: 345 }}>
        <Card.Body>
          <CardMedia
            component="img"
            height="150"
            image={element.image}
            alt="Paella dish"
          />
           <Card.Title> {element.name} </Card.Title>
          <Card.Text>
            {element.description}
          </Card.Text>
          <Card.Text>
            {element.price} - Count {element.inventoryCount}
          </Card.Text>
          <Button onClick={()=>{handleClick(element)}} style={{color:"gray"}} variant="light"> Add to cart </Button>
          <Button style={{color:"gray"}} variant="light"> View Details </Button>
        </Card.Body>
      </Card>
      })}
    </div>
  );
}


function mapStateToProps(state){
  return{
    products:state.products.activeProduct,
    category:state.categories.activeCategories,
  } 
}
const mapDispatchToProps = {
  addProduct,inventoryAction,addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)