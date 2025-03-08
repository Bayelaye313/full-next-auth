"use client"
import React, { useState, useTransition } from 'react'
import CardWrapper from './Card-wrapper'

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormDescription,
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

const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

   const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password:""
    },
  });
  
  const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
    setSuccess("")
    setError("")
    startTransition (()=>{LoginServer(values).then((data)=>{ setError(data.error); setSuccess(data.success)})})
    console.log("success", values)
  }
  return (
    <CardWrapper headerLabel='Welcome back' backButtonLabel="Don't have an account" backButtonHref='/auth/register' showSocial >
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
      <FormSuccess message ={success} />
      <FormError message = {error}/>

      <Button type="submit" className='w-full' disabled={isPending} >{isPending ? "Création en cours..." : "Créer un post"}</Button>
    </form>
  </Form>
    </CardWrapper>
  )
}

export default LoginForm
