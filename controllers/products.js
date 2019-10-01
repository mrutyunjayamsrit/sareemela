//const products = [];

const Product = require('../models/product');

exports.getAddProducts  = (req,res,next) => {
    // console.log("In a Middleware!");
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">ADD PRODUCT</button></input></form>');
    //res.sendFile(path.join(rootDir,'views','add-product.html')); 

    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        productCSS: true, 
        activeAddProduct: true,
        formCSS: true
    });
   };

exports.postAddProduct = (req,res,next) => {
    //console.log(req.body);
    //products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    //console.log("In another Middleware!");
    //res.send("<h1>This is a Middleware!</h1>");
    //console.log('In SHOP.JS:', products);
    //const products = adminData.products;
    const products = Product.fetchAll();
    res.render('shop', { prods: products, 
                         doctitle: 'Shop', 
                         path: '/', 
                         pageTitle: 'Shop', 
                         hasProducts: products.length > 0,
                         activeShop: true,
                         formCSS: true,
                         productCSS: true           
                        });
    //res.sendFile(path.join(rootDir,'views','shop.html'));
}
