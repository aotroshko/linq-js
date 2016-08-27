export default (targetArray, predicate) => {
    if(!targetArray) {
        throw new Error('targetArray is not defined');
    }

    if(!predicate) {
        throw new Error('predicate is not defined');
    }

    let result = [];

    for (let i = 0, len = targetArray.length; i < len; i++) {
        let item = targetArray[i];
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}