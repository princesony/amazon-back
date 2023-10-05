const productdata = require("./constand/productsdata");
const Products = require("./models/productsScheme");

const DefaultData = async()=>{
    try {
        await Products.deleteMany({});
        const storeData = await Products.insertMany(productdata);
       
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;