import { Metadata } from 'next';

import { NewPasswordForm } from '@/features/auth/components';

export const metadata: Metadata = {
	title: 'Новый пароль',
};

export default function Page() {
	return <NewPasswordForm />;
}
