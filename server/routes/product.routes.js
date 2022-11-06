const ProductController = require('../controllers/product.controller')

const routes = app => {
    // READ
    // GET ALL
    app.get("/api/products", ProductController.getAll)
    // GET ONE
    app.get("/api/products/:id", ProductController.getOne)
    // UPDATE
    app.put("/api/products/:id", ProductController.update)
    //CREATE
    app.post("/api/products", ProductController.create)
    // DELETE
    app.delete("/api/products/:id", ProductController.delete)
}

module.exports = routes