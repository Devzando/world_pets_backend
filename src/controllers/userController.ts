import { Request, Response } from 'express'
import { PrismaClient } from '.prisma/client'

import passwordshelpers from '../helpers/passwords' 

const prisma = new PrismaClient

export = {
    async create(req: Request, res: Response ) {
        const { name, email, password } = req.body
        const hash = await passwordshelpers.encrypt(password)

        try {
            const result = await prisma.user.create({
                data:{ name: name, email: email, password: hash },
                select:{ id: true }
            })

            res.status(200).send(result)
        } catch (error) {
            console.log(error)
            res.status(400).send()
        } finally {
            await prisma.$disconnect()
        }

    },

    async login(req: Request, res: Response) {
        const { email, passaword } = req.body


    }
}