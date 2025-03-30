import { z } from 'zod';

export const LoginSchema = z.object({
	email: z.string().email('Введите корректную почту'),
	password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
