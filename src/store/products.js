const initialState ={
    products :[
        {name:'TV',description:'Full HD Smart TV | Samsung',category: 'ELECTRONICS',price:'350$',inventoryCount:'10',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnGZsAFo7natRIIV1k_0P-Emp0IxFSj_b-Q&usqp=CAU'},
        {name:'Macbook Pro',description:'Apple MacBook Pro 13-inch (M1, 2020) | TechRadar',category: 'ELECTRONICS',price:'999 $',inventoryCount:'5',image: 'https://pbs.twimg.com/media/EXfiVsGWsAIS6Qo.jpg'},
        {name:'Burger',description:'Beef Burger',category: 'FOOD',price:'10 $',inventoryCount:'Unlimited',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfDRP5kywect4cf9tHdZcUeiZ951jNKN6Rg&usqp=CAU'},
        {name:'Juice',description:'pure juice made from the flesh of fresh fruit or from whole fruit',category: 'FOOD',price:'7 $',inventoryCount:'Unlimited',image: 'https://static.toiimg.com/photo/msid-82736662/82736662.jpg?896468'}
    ],
    activeProduct:[ {name:'TV',description:'Full HD Smart TV | Samsung',category: 'ELECTRONICS',price:'350$',inventoryCount:'10',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnGZsAFo7natRIIV1k_0P-Emp0IxFSj_b-Q&usqp=CAU'},
    {name:'Macbook Pro',description:'Apple MacBook Pro 13-inch (M1, 2020) | TechRadar',category: 'ELECTRONICS',price:'999 $',inventoryCount:'5',image: 'https://pbs.twimg.com/media/EXfiVsGWsAIS6Qo.jpg'},]
}

export default (state = initialState, action) =>{
    const {type,payload}= action;
    switch(type){
        case'ACTIVE_CATEGORY':
        let activate = state.products.filter(item =>{
            return item.category === payload;
        })
        return {
            products: state.products, 
            activeProduct:activate
        };
        default:
          return state;
    }
}

export function productActive(name){
    return{
        type:'ACTIVE_CATEGORY',
        payload:name
    }
}