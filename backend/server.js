import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready.");
// });

//get 5 jokes

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A jokes",
      content: "Why don't scientists trust atoms?",
    },
    {
      id: 2,
      title: "B jokes",
      content: "What did the atom say to the molecule?",
    },
    {
      id: 3,
      title: "C jokes",
      content: "Why was the atom sad?",
    },
    {
      id: 4,
      title: "D jokes",
      content:
        "How many electrons does a proton have in its outermost energy level?",
    },
    {
      id: 5,
      title: "E jokes",
      content: "Why do physicist and chemist look so happy on a sunny day?",
    }
  ];

  //serve array of jockes
  res.send(jokes);
});

//const port = 5000;

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
