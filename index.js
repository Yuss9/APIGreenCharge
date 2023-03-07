// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA9DyK7LSGE5GDfONYTVveyRYNPRi7532E",
//   authDomain: "api-deploy-dfbfd.firebaseapp.com",
//   projectId: "api-deploy-dfbfd",
//   storageBucket: "api-deploy-dfbfd.appspot.com",
//   messagingSenderId: "800325134475",
//   appId: "1:800325134475:web:36b239503e5510f75d0c8e",
//   measurementId: "G-335ZGRXVY4",
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const express = require("express");
const app = express();
// import express from "express";
const cors = require("cors");

//var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

// Route pour le calcul du prix de l'électricité
app.get("/prix-electricite", (req, res) => {
  const km = parseFloat(req.headers.kilometres);
  const prix = km * 0.1; // 10 centimes par km
  res.json({ prix: prix });
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
