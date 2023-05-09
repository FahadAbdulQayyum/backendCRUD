import { app } from "./app.js";
import { connectDB } from "./data/database.js";
const PORT = process.env.PORT || 4000

connectDB();

app.listen(PORT, () => {
    console.log(
        `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
    );
});
