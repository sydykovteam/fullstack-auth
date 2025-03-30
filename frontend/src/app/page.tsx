import Link from 'next/link';

import { buttonVariants } from '@/shared/components/ui';

export default function Home() {
	return (
		<div className={'space-y-5 text-center'}>
			<h1 className={'text-4xl'}>Главная страница</h1>

			<Link
				href={'/src/app/auth/login/page.tsx'}
				className={buttonVariants({
					variant: 'default',
				})}
			>
				Войти в аккаунт
			</Link>
		</div>
	);
}
