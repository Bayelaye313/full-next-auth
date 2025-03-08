"use server"

import { RegisterSchema } from '@/schemas'
import { z } from 'zod'

const RegisterServer = async (values: z.infer<typeof RegisterSchema>) => {
    const ValidateFields = RegisterSchema.safeParse(values)
     if (!ValidateFields.success) {
        return {error: "invalid fields"}
    }

  return (
    {success: "login success"}
  )
}

export default RegisterServer
