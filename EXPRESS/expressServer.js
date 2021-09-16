const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./data");

//setup static and middleware
// app.use(express.static('./static'))

app.get("/", (request, response) => {
  // response.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
  // response.json(products)
  response.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (request, response) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  response.json(newProducts);
});

app.get("/api/products/:productId", (request, response) => {
  //   console.log(request.params);

  const { productId } = request.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if(!singleProduct){
  return response.status(404).send(`<h1>Page not found</h1>`);

  }  
  return response.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (request, response) => {
    // console.log(request.params);
    response.send("dummy")
})

/* http://localhost:5000/api/v1/query?search=abc&limit=2 */
app.get('/api/v1/query',(request, response) => {
const {search,limit}=request.query;
let sortedProducts = [...products]

if(search){
    sortedProducts=sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })
}
if(limit){
    sortedProducts=sortedProducts.slice(0,Number(limit))
}

if(sortedProducts.length<1){
    // response.status(200).send("no products matched your search")
   return response.status(200).json({success:true,data:[]})
}
//only one response per request.conditional responses will do
response.status(200).json(sortedProducts)
})

app.all("*", (request, response) => {
  response.status(404).send(`<h1>Page not found</h1>`);
});

app.listen(5000, () => {
  // console.log("hey");
});
