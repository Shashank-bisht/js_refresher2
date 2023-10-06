// iterators in js

// console.log(myary[1])

function getval(values) {
    let i = 0;
    return {
        next: function () {
            if (i < values.length) {
                //we will return below object
                return {
                    value: values[i++],
                    done: false
                }
            } else {
                //we will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const myary = ['apple', 'oranges', 'banana']

console.log("my array is", myary)

//using array
const frt = getval(myary)
console.log(frt.next().value)
console.log(frt.next().value)
console.log(frt.next().value)
console.log(frt.next().value)