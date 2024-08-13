const express = require("express");
const router = express.Router();

const productData = [{
    _id:1,
    title:"products",
    description:"Something about the products",
    pricing:"250",
    ratings:4,
},{
    _id:2,
    title:"products-2",
    description:"Something about the products",
    pricing:"250",
    ratings:4,
},{
    _id:3,
    title:"products-3",
    description:"Something about the products",
    pricing:"250",
    ratings:4,
}];

router.get("/products", (req,res) => {
    res.send(productData);
});

module.exports = router;