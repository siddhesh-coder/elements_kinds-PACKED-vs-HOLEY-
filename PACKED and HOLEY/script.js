//For deep information read this blog https://v8.dev/blog/elements-kinds

// PACKED vs HOLEY | JSVU | V8-debug
//The following are the stages of the deep array
//PACKED_SMI_ELEMENTS
//PACKED_DOUBLE_ELEMENTS
//PACKED_FLOAT_ELEMENTS
//HOLEY_SMI_ELEMENTS
//HOLEY_DOUBLE_ELEMENTS
//HOLEY_FLOAT_ELEMENTS

//always recall this flow

//PACKED_SMI_ELEMENTS > PACKED_DOUBLE_ELEMENTS > PACKED >
const array = [1,2,3,4,5];
//now this is PACKED_SMI_ELEMENTS 
//now plz note that if you push any string, float, double, or keep index empty it will goes to perticular stage ->
//one's it goes to next stage it will never ever comes back to its pervious stage it will downgrade as you move ->
//forward

//for ex
const arrays = new Array(3); //now this comes under HOLEY_SMI_ELEMENTS for three index are empty(holes)
arrays[0] = 'hello';
arrays[1] = 'world';
console.log('array', arrays) // ['hello','world'] //now it has become HOLEY_ELEMENTS means HOLEY_SMI_ELEMENTS > HOLEY_ELEMENTS

//to avoid this at first site 
//const array = [1,2,3,4,5]; this is the best way but as per requiredment you choice the way but thing about optimization

const fiveArr = [];
fiveArr.push('1');
fiveArr.push('1');
fiveArr.push('1'); //PACKED_ELEMENTS