import express from 'express';
const app = express();

app.use(express.json());

const topicsInBuffer = [];

app.post("/buffer", (req, res) => {

  const handleBuffer = (topicsInBuffer) => {
    if (topicsInBuffer.length > 5){
      console.log("Buffer cleared, 5 topics have been processed. You may post to your server in this position. Your last datas are: " + topicsInBuffer);
      topicsInBuffer = [];
    } 
  }

  const readTopic = req.body.topic; 

  topicsInBuffer.push(readTopic);
  res.send({message: "Topic " + "--" + readTopic + "--" + " has been added to queue to be processed" , topicsInBuffer: topicsInBuffer});

  handleBuffer(topicsInBuffer);
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});