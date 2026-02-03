
export const isEmpty = (obj: Record<string, any>): boolean => {
    for (let item in obj) {
        if(obj.hasOwnProperty(item)) {
            return false;
        }
    }
    return true;
}