console.clear();

const shopify = require('shopify-api-node'); 

// Configuración de la conexión con la API de shopify

const config = { 
    shopName: 'devtestrecruitte.myshopify.com',
    apiKey: 'd156c699edcc98186dae8e6f9562d838',
    password: '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'
};



function getProducts() { 
    return new Promise((resolve, reject) => {
        shopify.product.list()
            .then(products => {
                resolve(products);
            })
            .catch(err => {
                reject(err);
            });
    });
}


function buildString(products) {
    let string = '';
    products.forEach(product => {
        string += `${product.title} - ${product.variants[0].price} \n`;
    });
    return string;
}


function getCreatedAt(date) {
    return new Promise((resolve, reject) => {
        resolve(date.split('T')[0]);
        reject(err);
    });
}

