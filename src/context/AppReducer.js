export default (state, action) => {
    switch(action.type){
        case 'INCREMENT_NUMBER':
            const updateId = action.payload;
            const updateCollections = state.collections.map(collection => {
                if(collection.id === updateId) {
                    collection.isAdd = false;
                    return collection;
                }
                return collection;
            })
            return {
                cartNumber: state.cartNumber + 1,
                collections: updateCollections,
            }
        case 'DECREMENT_NUMBER':
            const id = action.payload;
            const updateDcCollections = state.collections.map(collection => {
                if(collection.id === id) {
                    collection.isAdd = true;
                    return collection;
                }
                return collection;
            })
            return {
                cartNumber: state.cartNumber - 1,
                collections: updateDcCollections,
            }
        default:
            return state;
    }
}
