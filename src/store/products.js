const initialState ={
    products :[
        {name:'TV',description:'Full HD Smart TV | Samsung',category: 'ELECTRONICS',price:'350$',inventoryCount:'999',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnGZsAFo7natRIIV1k_0P-Emp0IxFSj_b-Q&usqp=CAU'},
        {name:'Macbook Pro',description:'Apple MacBook Pro 13-inch (M1, 2020) | TechRadar',category: 'ELECTRONICS',price:'999 $',inventoryCount:'999',image: 'https://pbs.twimg.com/media/EXfiVsGWsAIS6Qo.jpg'},
        {name:'Burger',description:'Beef Burger',category: 'FOOD',price:'10 $',inventoryCount:'Unlimited',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfDRP5kywect4cf9tHdZcUeiZ951jNKN6Rg&usqp=CAU'},
        {name:'Juice',description:'pure juice made from the flesh of fresh fruit or from whole fruit',category: 'FOOD',price:'7 $',inventoryCount:'Unlimited',image: 'https://static.toiimg.com/photo/msid-82736662/82736662.jpg?896468'}
    ],
    activeProduct:[]
}

export default (state = initialState, action) =>{
    const {type,payload}= action;

    switch(type){
        case'ACTIVE':
        let activated = state.products.filter(item =>{
            return item.category === payload;
        })
        return {
           ...state, activeProduct:activated
        };
        case 'ADDPRODUCT':
            let removing = state.products.map((item) =>{
                if(item.name === payload.name && item.inventoryCount > 0){
                    item.inventoryCount = item.inventoryCount - 1;
                }
                return item;
            })
            return{...state};

        case 'DELETE':
            state.products = state.products.map(item =>{
                if(item.name == payload.name){
                   item.inventoryCount = item.inventoryCount + 1;
                   return item;
                }
                return item;
            });
        return {
            ...state
        }
        default:
          return state;
    }
}
