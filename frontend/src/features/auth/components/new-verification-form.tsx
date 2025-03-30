'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useVerificationMutation } from '@/features/auth/hooks';

import { Loading } from '@/shared/components/ui';

export function NewVerificationForm() {
	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	const { verification } = useVerificationMutation();

	useEffect(() => {
		verification(token);
	}, [token]);

	return <Loading />;
}
