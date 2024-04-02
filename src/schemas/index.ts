import * as z from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato do e-mail inválido',
    }),
  password: z.string().min(1, {
    message: 'A senha é obrigatória',
  }),
});

export const SignUpSchema = z.object({
  name: z.string().min(1, {
    message: 'O nome é obrigatório',
  }),
  email: z
    .string()
    .min(1, {
      message: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Formato do e-mail inválido',
    }),
  password: z.string().min(4, {
    message: 'A senha deve ter pelo menos 4 caracteres.',
  }),
});
