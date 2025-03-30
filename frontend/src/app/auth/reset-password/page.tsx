import { Metadata } from 'next';

import { ResetPasswordForm } from '@/features/auth/components';

export const metadata: Metadata = {
	title: 'Сброс пароля',
};

export default function Page() {
	return <ResetPasswordForm />;
}
