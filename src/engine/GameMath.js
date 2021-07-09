
export const isInsideRect = (x, y, rect) => {
    if(x > rect.x && x < rect.right){
        if(y > rect.y && y < rect.bottom){
            return true;
        }
    }
    return false;
};