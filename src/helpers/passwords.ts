import bcrypt from 'bcrypt'

export = {
    async encrypt(password: string) {

        const salt = await bcrypt.genSalt(10)

        return bcrypt.hash(password, salt)
    }
}