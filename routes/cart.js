const express = require("express");
const router = express.Router();

const cartData = [{
    _id:1,
    title:"cart",
    description:"Something about the cart",
    pricing:"250",
    ratings:4,
},{
    _id:2,
    title:"cart-2",
    description:"Something about the cart",
    pricing:"250",
    ratings:4,
},{
    _id:3,
    title:"cart-3",
    description:"Something about the cart",
    pricing:"250",
    ratings:4,
}];

router.get("/cart", (req,res) => {
    res.send(cartData);
});

module.exports = router;