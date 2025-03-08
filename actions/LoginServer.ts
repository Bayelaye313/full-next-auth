"use server"

import { LoginSchema } from '@/schemas'
import React from 'react'
import { z } from 'zod'

const LoginServer = async (values: z.infer<typeof LoginSchema>) => {
    const ValidateFields = LoginSchema.safeParse(values)
     if (!ValidateFields.success) {
        return {error: "invalid fields"}
    }

  return (
    {success: "login success"}
  )
}

export default LoginServer
