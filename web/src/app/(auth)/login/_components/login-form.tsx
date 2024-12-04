'use client'

import '@/http/client/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form, FormField } from '@/components/ui/form'
import { TextField } from '@/components/ui/text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { login } from '../actions'
import * as Svg from '../svgs'

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await login({
        login: values.username,
        password: values.password,
      })

      router.push('/dashboard')
    } catch (e) {
      toast.error('Email ou senha incorretos.')
    }
  }

  return (
    <div className="w-full px-6 md:px-[88px]">
      <h1 className="mb-14 hidden text-center text-[22px]/none font-medium text-[#212121] md:block">
        Acesse sua conta
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <TextField.Group className="mb-8">
                <TextField.Label htmlFor="username">Usuário</TextField.Label>
                <TextField.Input
                  id="username"
                  placeholder="Digite seu usuário"
                  spellCheck="false"
                  type="username"
                  {...field}
                />
              </TextField.Group>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <TextField.Group className="mb-10">
                <div className="flex justify-between">
                  <TextField.Label htmlFor="password">Senha</TextField.Label>
                  <Link
                    href="#"
                    className="underline-offset-3 text-sm/none text-[#808080] hover:underline"
                  >
                    Esqueci minha senha
                  </Link>
                </div>
                <TextField.Root>
                  <TextField.Input
                    id="password"
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                  />
                  <TextField.Icon
                    aria-label={`${showPassword ? 'Ocultar' : 'Mostrar'} senha`}
                    onClick={() => setShowPassword(oldValue => !oldValue)}
                  >
                    {showPassword ? <Svg.Eye /> : <Svg.EyeSlash />}
                  </TextField.Icon>
                </TextField.Root>
              </TextField.Group>
            )}
          />

          <button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="mb-16 w-full cursor-pointer rounded-[5px] bg-[#0047F6] px-6 py-3 text-base/normal font-medium text-white shadow-[0_4px_8px] shadow-[color-mix(in_srgb,#0047F6_20%,transparent)] transition hover:bg-[#0031AA] disabled:opacity-[0.33]"
          >
            Entrar
          </button>
        </form>
      </Form>
      <span className="block text-balance text-center text-sm/normal text-[#808080]">
        Ao criar uma conta você concorda com nossos{' '}
        <Link
          href="#"
          className="underline-offset-3 text-[#3874FA] underline transition-[color] hover:text-[#0044DD]"
        >
          Termos de Serviços
        </Link>{' '}
        e nossa{' '}
        <Link
          href="#"
          className="underline-offset-3 text-[#3874FA] underline transition-[color] hover:text-[#0044DD]"
        >
          Política de Privacidade
        </Link>
      </span>
    </div>
  )
}
