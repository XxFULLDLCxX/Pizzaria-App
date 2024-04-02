'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { CardWrapper } from '@/components/auth/card-wrapper';
import { SignInSchema } from '@/schemas';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { useState, useTransition } from 'react';
import { login } from '@/actions/auth';

export function SignIn() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values).then((data) => {
        console.log(data);
        setError(data.error);
        setSuccess(data.success);

      });
    });
  };
  return (
    <div>
      <CardWrapper
        headerLabel="Bem-vindo de volta"
        backButtonLabel="Não tem uma conta?"
        backButtonHref="/auth/sign-up"
        showSocial
      >
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      E-mail
                      <FormMessage className="inline-block float-right" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="jose.matheus@example.com"
                        type="email"
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Senha
                      <FormMessage className="inline float-right" />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="*****" type="password" disabled={isPending} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full shadow-sm" disabled={isPending}>
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
