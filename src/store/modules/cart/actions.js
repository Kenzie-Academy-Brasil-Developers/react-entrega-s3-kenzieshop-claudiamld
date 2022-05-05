export const addToCart = (product) => ({type: "@cart/ADD", product});

export const removeFromCart = (list) => ({type: "@cart/REMOVE", list})
// export const removeFromCart = (id) => ({type: "cart/REMOVE", id});