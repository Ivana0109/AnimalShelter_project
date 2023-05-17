const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://azil-za-zivotinje-e8580.firebaseio.com",
});

// Initialize Express app
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,HEAD,PUT,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define a route to create a new pet
app.post("/pets", (req, res) => {
  const newPet = req.body;
  admin
    .firestore()
    .collection("pets")
    .add(newPet)
    .then((docRef) => {
      const pet = { id: docRef.id, ...newPet };
      res.status(201).json(pet);
    })
    .catch((error) => {
      console.error("Error creating pet:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to update a pet
app.put("/pets/:id", (req, res) => {
  const petId = req.params.id;
  const updatedPet = req.body;
  admin
    .firestore()
    .collection("pets")
    .doc(petId)
    .set(updatedPet, { merge: true })
    .then(() => {
      res.status(200).send("Pet updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating pet:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to delete a pet
app.delete("/pets/:id", (req, res) => {
  const petId = req.params.id;
  admin
    .firestore()
    .collection("pets")
    .doc(petId)
    .delete()
    .then(() => {
      res.status(200).send("Pet deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting pet:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to retrieve all pets with optional filters
app.get("/pets", (req, res) => {
  const { type, adopted } = req.query;

  let query = admin.firestore().collection("pets");

  // Apply filters if provided
  if (type) {
    query = query.where("type", "==", type);
  }

  if (adopted) {
    const isAdopted = adopted.toLowerCase() === "true";
    query = query.where("adopted", "==", isAdopted);
  }

  query
    .get()
    .then((snapshot) => {
      const pets = [];
      snapshot.forEach((doc) => {
        pets.push({ id: doc.id, ...doc.data() });
      });
      res.json(pets);
    })
    .catch((error) => {
      console.error("Error retrieving pets:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to retrieve a single pet
app.get("/pets/:id", (req, res) => {
  const petId = req.params.id;
  admin
    .firestore()
    .collection("pets")
    .doc(petId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        res.status(404).send("Pet not found");
      } else {
        const pet = { id: doc.id, ...doc.data() };
        res.json(pet);
      }
    })
    .catch((error) => {
      console.error("Error retrieving pet:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to create a new donation
app.post("/donations", (req, res) => {
  const newDonation = req.body;
  admin
    .firestore()
    .collection("donations")
    .add(newDonation)
    .then((docRef) => {
      const donation = { id: docRef.id, ...newDonation };
      res.status(201).json(donation);
    })
    .catch((error) => {
      console.error("Error creating donation:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to update a donation
app.put("/donations/:id", (req, res) => {
  const donationId = req.params.id;
  const updatedDonation = req.body;
  admin
    .firestore()
    .collection("donations")
    .doc(donationId)
    .set(updatedDonation, { merge: true })
    .then(() => {
      res.status(200).send("Donation updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating donation:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to delete a donation
app.delete("/donations/:id", (req, res) => {
  const donationId = req.params.id;
  admin
    .firestore()
    .collection("donations")
    .doc(donationId)
    .delete()
    .then(() => {
      res.status(200).send("Donation deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting donation:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to retrieve all donations
app.get("/donations", (req, res) => {
  admin
    .firestore()
    .collection("donations")
    .get()
    .then((snapshot) => {
      const donations = [];
      snapshot.forEach((doc) => {
        donations.push({ id: doc.id, ...doc.data() });
      });
      res.json(donations);
    })
    .catch((error) => {
      console.error("Error retrieving donations:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to retrieve a single donation
app.get("/donations/:id", (req, res) => {
  const donationId = req.params.id;
  admin
    .firestore()
    .collection("donations")
    .doc(donationId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        res.status(404).send("Donation not found");
      } else {
        const donation = { id: doc.id, ...doc.data() };
        res.json(donation);
      }
    })
    .catch((error) => {
      console.error("Error retrieving donation:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to create a new notification
app.post("/notifications", (req, res) => {
  const newNotification = req.body;
  admin
    .firestore()
    .collection("notifications")
    .add(newNotification)
    .then((docRef) => {
      const notification = { id: docRef.id, ...newNotification };
      res.status(201).json(notification);
    })
    .catch((error) => {
      console.error("Error creating notification:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to update a notification
app.put("/notifications/:id", (req, res) => {
  const notificationId = req.params.id;
  const updatedNotification = req.body;
  admin
    .firestore()
    .collection("notifications")
    .doc(notificationId)
    .set(updatedNotification, { merge: true })
    .then(() => {
      res.status(200).send("Notification updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating notification:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to delete a notification
app.delete("/notifications/:id", (req, res) => {
  const notificationId = req.params.id;
  admin
    .firestore()
    .collection("notifications")
    .doc(notificationId)
    .delete()
    .then(() => {
      res.status(200).send("Notification deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting notification:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to retrieve all notifications
app.get("/notifications", (req, res) => {
  admin
    .firestore()
    .collection("notifications")
    .get()
    .then((snapshot) => {
      const notifications = [];
      snapshot.forEach((doc) => {
        notifications.push({ id: doc.id, ...doc.data() });
      });
      res.json(notifications);
    })
    .catch((error) => {
      console.error("Error retrieving notifications:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Define a route to retrieve a single notification
app.get("/notifications/:id", (req, res) => {
  const notificationId = req.params.id;
  admin
    .firestore()
    .collection("notifications")
    .doc(notificationId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        res.status(404).send("Notification not found");
      } else {
        const notification = { id: doc.id, ...doc.data() };
        res.json(notification);
      }
    })
    .catch((error) => {
      console.error("Error retrieving notification:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Start the server
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
