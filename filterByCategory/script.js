function filterBycategory(products){
    return function(category){
        return products.filter(function(product) {
            return product.category === category
        })
    }
}

let products = [
    {name: 'shirt', category: 'clothing'},
    {name: 'pants', category: 'clothing'},
    {name: 'hat', category: 'accessories'},
    {name: 'sunglasses', category: 'accessories'},
]

let clothingProducts = filterBycategory(products)('clothing')
console.log(clothingProducts);