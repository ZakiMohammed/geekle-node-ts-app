import express, { Application, Request, Response } from "express";

const app: Application = express()

const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Node.ts Express App!! 😃</h1>')
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))
