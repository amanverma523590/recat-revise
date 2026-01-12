

console.log(`Execution start....`);

fetch(`https://fakestoreapi.com/products`)
.then( async response=> await response.json())
.then(data=>{
    data.map( async item=>(
        console.log(await item)
    ) )
    setTimeout(()=>{
        console.log(`I am fetching Data from API`)
    },0);
})

console.log(`Execution end.....`)