export const copyObject = object => JSON.parse(JSON.stringify(object))
export const indexOfObject = (array , id) => array.reduce((a,b,c)=> b.id === id ? c : a , -1)