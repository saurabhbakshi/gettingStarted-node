const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27001";
const datbaseName = "todo";

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { user: "saurabh", password: "saurabh" },
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connection to DB is succesfull");
    const db = client.db(datbaseName);
    db.collection("Users").insertOne(
      {
        name: "Meha Jain",
        age: 7,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert the document.");
        }

        console.log(result.ops);
      }
    );

    db.collection("Tasks").insertMany(
      [
        {
          title: "First task",
          description: " First task test description",
          completed: false,
        },
        {
          title: "Second task",
          description: " Second task test description",
          completed: true,
        },
        {
          title: "Third task",
          description: " Third task test description",
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert task documents");
        }
        console.log(result.ops);
      }
    );
  }
);
