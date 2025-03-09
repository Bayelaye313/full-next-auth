"use server"

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { z } from 'zod'
import bcrypt from 'bcrypt'

const RegisterServer = async (values: z.infer<typeof RegisterSchema>) => {
    const ValidateFields = RegisterSchema.safeParse(values)
     if (!ValidateFields.success) {
        return {error: "invalid fields"}
    }
    const {name, email, password} = ValidateFields.data

    const isUserExist = await db.user.findUnique({
        where: {email}
    })
    if (isUserExist) {
        return {error: "User Already Exist"}
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.create ({data:{
        name,
        email,
        password : hashedPassword
    }})

  return (
    {success: "user created"}
  )
}

export default RegisterServer
