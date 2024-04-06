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
import { SignUpSchema } from '@/schemas';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { useEffect, useState, useTransition } from 'react';
import { register } from '@/modules/auth/actions/auth';
import { useRouter } from 'next/navigation';

export function SignUp() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  const route = useRouter();
  useEffect(() => {
    if (success) {
      route.push('/products');
    }
  }, [success, route]);

  return (
    <CardWrapper
      headerLabel="Crie uma conta"
      backButtonLabel="Já tem uma conta?"
      backButtonHref="/auth/sign-in"
    >
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nome
                    <FormMessage className="inline float-right" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="José Matheus"
                      disabled={isPending}
                      autoComplete="on"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
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
                      autoComplete="on"
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
                    <Input
                      {...field}
                      placeholder="*****"
                      type="password"
                      disabled={isPending}
                      autoComplete="on"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full shadow-sm dark:bg-emerald-800 dark:text-gray-200"
            disabled={isPending}
          >
            Cadastrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
