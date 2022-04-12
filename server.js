import express  from "express";
import memesRouter from "./src/routes/memesRouter.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({origin: "*"}));
app.use(express.json());
app.use('/memes', memesRouter);
app.get('/', (req,res) => {
    res.send('Memes API')
});

app.listen(port, () => console.log(`server runnig at localhost ${port}`));