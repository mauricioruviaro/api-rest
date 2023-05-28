import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/', (req, res) => res.status(200).json({ message: 'working...' }))

app.listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}`))
