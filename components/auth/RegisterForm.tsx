"use client"
import React, { useState, useTransition } from 'react'
import CardWrapper from './Card-wrapper'

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, RegisterSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import FormSuccess from '../form-success';
import FormError from '../form-error';
import LoginServer from '@/actions/LoginServer';
import RegisterServer from '@/actions/RegisterServer';

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

   const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password:"",
      name: ""
    },
  });
  
  const onSubmit = (values: z.infer<typeof RegisterSchema>)=>{
    setSuccess("")
    setError("")
    startTransition (()=>{RegisterServer(values).then((data)=>{ setError(data.error); setSuccess(data.success)})})
    console.log("success", values)
  }
  return (
    <CardWrapper headerLabel='Create an Account' backButtonLabel="Already have an account?" backButtonHref='/auth/login' showSocial >
        <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type='email' placeholder="bayelaye@machin.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type='password' placeholder="*************" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type='text' placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormSuccess message ={success} />
      <FormError message = {error}/>

      <Button type="submit" className='w-full' disabled={isPending} >{isPending ? "Création de compte en cours..." : "Créer un compte"}</Button>
    </form>
  </Form>
    </CardWrapper>
  )
}

export default RegisterForm
