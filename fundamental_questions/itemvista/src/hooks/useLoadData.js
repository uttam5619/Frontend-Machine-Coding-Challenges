

const loadData = (limit,offset) => {

    const li = parseInt(limit)
    const of = parseInt(offset)
    return fetch(`https://dummyjson.com/products?limit=${li}&skip=${of}`)
    .then(res => res.json())
    .then((data)=>{
        console.log(data)
        return data.products || []
    })
}

export default loadData