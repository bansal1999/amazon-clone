/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
// eslint-disable-next-line max-len
const stripe = require("stripe")(
  "sk_test_51IPiHEGeZc4pvph81fzmJjRsfUvWQ08uYgt88xM8AST2vkDrqi7TMpnK6tILmEeC9Mh2pZlXxIt73l5gEueWq2zn00MtTpYdiP"
);

// API Setup

// -APP CONFIG
const app = express();

// -MiddleWares

app.use(cors({ origin: true }));
app.use(express.json());

// -API  routes
app.get("/", (request, response) => response.status(200).send("hello world!"));

app.post("/payments/create", async (request, response) => {const total = request.query.total;

  console.log("Payment Request Recieved for the amount >>>>>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, //cubunits of the currency
    currency: "usd",
  });

  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_Secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
//  http://localhost:5001/clone-69d96/us-central1/api
