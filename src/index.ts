import express from "express";
import cors from 'cors'

import routers from './router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routers)

app.listen(3333, () => console.log('server is running'))