let a = "Hello";
let b = "world";


let word = `first Word ${a} and second Word ${b}`;

//TASK FOR TEMPLATE_LITERATE
const product = [
    {name: "first",price:"200"},
    {name: "second",price:"400"},
    {name: "Third",price:"600"},
    ]


    const summary = `The most expensive product is ${
        product.reduce((max, product) => product.price > max.price ? product : max).name
    }, priced at ${product.reduce((max, product) => product.price > max.price ? product : max).price}.`;

    console.log(summary);