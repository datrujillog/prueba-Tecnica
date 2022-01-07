console.clear();

const shopify = require('shopify-api-node');

// Configuración de la conexión con la API de shopify

const config = { 
    shopName: 'devtestrecruitte.myshopify.com',
    apiKey: 'd156c699edcc98186dae8e6f9562d838',
    password: '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'
};

// Instancia de la conexión con la API de shopify
const shopifyAPI = new shopify(config);

// Función que retorna la información de los productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        shopifyAPI.product.list()
            .then(products => {
                resolve(products);
            })
            .catch(err => {
                reject(err);
            });
    });
};


const buildString = (products) => {
    let string = '';
    products.forEach(product => {
        string += `${product.id} - ${product.title} - ${product.created_at.split('T')[0]} - ${product.updated_at.split('T')[0]}\n`;
    });
    return string;
};


    // 3. Al API de shopify retorna el valor de “created_at” asi => “2018-04-19T09:34:47-04:00”.
    // Nosotros solo necesitamos “AAAA-MM-DD”.

function getDate(date) {
    return date.split('T')[0];
}










      










//     const getCreatedAt = (date) => {
//         return new Promise((resolve, reject) => {
//             resolve(date.split('T')[0]);
//         });
// }
    



