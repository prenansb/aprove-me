'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import '@/http/client/api'
import AuthContext from '@/providers/auth-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from './ui/form'

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { login } = useContext(AuthContext)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await login({
      login: values.username,
      password: values.password,
    })
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="user">Usuário</Label>
                      <FormControl>
                        <Input
                          id="user"
                          type="text"
                          placeholder="bankme"
                          required
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                      </div>
                      <FormControl>
                        <Input id="password" type="password" required {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Não tem uma conta?{' '}
          <Link href="#" className="underline">
            Cadastrar
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
