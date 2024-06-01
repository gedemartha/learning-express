const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("Hello dada");
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();

  res.send(products);
});

app.post("/products", async (req, res) => {
  const newProductData = req.body;

  const product = await prisma.product.create({
    data: {
      name: newProductData.name,
      description: newProductData.description,
      image: newProductData.image,
      price: newProductData.price,
    },
  });
  res.send({
    data: product,
    message: "created product success",
  });
});

app.delete("/products/:id", async (req, res) => {
  const productId = req.params.id;

  await prisma.product.delete({
    where: {
      id: parseInt(productId),
    },
  });

  res.send("product deleted");
});

app.put("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  if (
    !(
      productData.image &&
      productData.name &&
      productData.price &&
      productData.description
    )
  ) {
    return res.status(400).send("some fields are missing");
  }

  const product = await prisma.product.update({
    where: {
      id: parseInt(productId),
    },
    data: {
      name: productData.name,
      description: productData.description,
      image: productData.image,
      price: productData.price,
    },
  });

  res.send({
    data: product,
    message: "edit data success",
  });
});

app.patch("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  if (
    !(
      productData.image &&
      productData.name &&
      productData.price &&
      productData.description
    )
  ) {
    return res.status(400).send("some fields are missing");
  }

  const product = await prisma.product.update({
    where: {
      id: parseInt(productId),
    },
    data: {
      name: productData.name,
      description: productData.description,
      image: productData.image,
      price: productData.price,
    },
  });

  res.send({
    data: product,
    message: "edit data success",
  });
});

app.listen(PORT, () => {
  console.log("express api running in port : " + PORT);
});
