/**
 * removes an element from an array with given id
 *
 * @param cards
 * @param id
 */
export const removeById = (array, id) => {
    let index = array.findIndex((c) => c.id === id);
    array.splice(index, 1);
};