 #find duplicate element

var array=[23,2,13,2,3,6,7,9,10,23]
 
 const z= array.filter((item,index)=>array.indexOf(item) !== index)
 console.log(z)


# unique Element
 var array=[23,2,13,2,3,6,7,9,10,23]
 
 const z= array.filter((item,index)=>array.indexOf(item) === index)
 console.log(z)
