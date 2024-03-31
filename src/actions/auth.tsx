'use server';

import * as z from 'zod';

import { SignInSchema, SignUpSchema } from '@/schemas';
import { redirect } from 'next/navigation';

export const login = async (values: z.infer<typeof SignInSchema>) => {
  const validadedFields = SignInSchema.safeParse(values);
  if (!validadedFields.success) {
    return { error: 'Login mal-sucedido! Credenciais inválidas.' };
  }
  redirect('/products');
  return { success: 'Login bem-sucedido!'}
};

export const register = async (values: z.infer<typeof SignUpSchema>) => {
  const validadedFields = SignUpSchema.safeParse(values);
  if (!validadedFields.success) {
    return { error: 'Cadastro mal-sucedido! Credenciais inválidas.' };
  }
  redirect('/products');
  return { success: 'Cadastro bem-sucedido!'}
};

