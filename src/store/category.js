const initialState = {
  
    categories: [
        {
            name:'ELECTRONICS',
            displayName: 'ELECTRONICS',
            description:'CATEGORY OF ALL THE ELECTRONIC DEVICES' 
        }, 
        { 
            name:'FOOD',
            displayName: 'FOOD',
            description:'CATEGORY OF ALL THE FOOD TYPES'
        }
    ],
    activeCategory: {},
  }
  
  export default (state = initialState, action) => {

    const { payload, type } = action;
    switch (type) {
      case 'ACTIVE_CATEGORY':
        let activate = {};
  
        state.categories.map(item => {
          if (item.name === payload) {
            activate = item;
          }
        });
        return {
          categories: state.categories,
          activeCategory: activate
        };
      default:
        return state;
    }
}
  
  
export function active(name) {
    return {
      type: 'ACTIVE_CATEGORY',
      payload: name
    }
}