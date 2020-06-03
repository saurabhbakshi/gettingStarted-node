const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;

const url = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(url, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  const db = client.db(databaseName);

  //Insert One
  //   db.collection("task")
  //     .insertOne({
  //       description: "Testing task-2",
  //       completed: true,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   db.collection("task").insertMany(
  //     [
  //       {
  //         description: "Renew Car Insurance",
  //         completed: false,
  //       },
  //       {
  //         description: "Complete NodeJS API tutorial",
  //         completed: false,
  //       },
  //       {
  //         description: "Complete Flex Tutorial of HTML 5",
  //         completed: false,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Error inserting documents");
  //       }
  //       console.log(result.ops);
  //     }
  //   );
  //   const updateOne = db.collection("task").updateOne(
  //     {
  //       _id: ObjectId("5ed6141162fb3621644712b8"),
  //     },
  //     {
  //       $set: {
  //         description: "Renew car insurance",
  //       },
  //     }
  //   );
  //   updateOne
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   db.collection("task")
  //     .updateMany(
  //       {
  //         completed: true,
  //       },
  //       {
  //         $set: {
  //           completed: false,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       console.log(result.modifiedCount);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  db.collection("task")
    .deleteMany({
      completed: true,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
