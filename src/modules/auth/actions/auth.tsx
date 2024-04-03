'use server';
import * as z from 'zod';

import { SignInSchema, SignUpSchema } from '@/schemas';

import * as bcrypt from 'bcrypt';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { authService } from '@/modules/auth/services/auth-service';

export const login = async (values: z.infer<typeof SignInSchema>) => {
  const validadedFields = SignInSchema.safeParse(values);
  if (!validadedFields.success) {
    return { error: 'Login mal-sucedido! Credenciais inválidas.' };
  }
  const { email, password } = validadedFields.data;
  const user = await getUserByEmail(email);
  if (!user) {
    return { error: 'Login mal-sucedido! E-mail não cadastrado.' };
  }
  if (user.password) {
    const isMatch = bcrypt.compare(password, user.password!);
    if (!isMatch) {
      return { success: 'Login bem-sucedido!' };
    }
  }

  await authService.createSessionToken({ id: user.id });

  return { success: 'Login bem-sucedido!' };
};

export const register = async (values: z.infer<typeof SignUpSchema>) => {
  const validadedFields = SignUpSchema.safeParse(values);

  if (!validadedFields.success) {
    return { error: 'Cadastro mal-sucedido! Credenciais inválidas.' };
  }
  const { name, email, password } = validadedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  //  TODO: Send Verification token email

  if (existingUser) {
    return { error: 'O e-mail já está em uso' };
  }

  const result = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: 'Cadastro bem-sucedido!' };
};
