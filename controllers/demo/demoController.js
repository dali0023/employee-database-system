// const path = require("path");
// const Product = require("../models/productsModel");

// const getAddProducts = (req, res, next) => {
//   res.render("add-products", {
//     pageTitle: "Add Product",
//     path: "/admin/add-products",
//   });
// };

// const saveNewProducts = (req, res) => {
//   const products = new Product();
//   products.title = req.body.title;
//   products.save();
//   res.redirect("/");
// };

// const getAllProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("shop", { item: products, pageTitle: "Shop", path: "/" });
//   });
// };

// module.exports = { getAddProducts, saveNewProducts, getAllProducts };
