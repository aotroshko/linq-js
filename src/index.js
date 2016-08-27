import where from './where';

let targetArray = Symbol();

class Enumerable {
    constructor(arr) {
        if(Object.prototype.toString.call(arr) === '[object Array]'){
            this[targetArray] = arr;
        } else if(typeof arr == 'string' || arr instanceof String){
            this[targetArray] = arr.split('');
        } else {
            throw new Error('Given parameter is not an array.');
        }
    }

    where(predicate) {
        let result = where(this[targetArray], predicate);
        this[targetArray] = result;
        return this;
    }
}

Array.prototype.asEnumerable = String.prototype.asEnumerable = function() {
    return new Enumerable(this);
};

export default Enumerable;