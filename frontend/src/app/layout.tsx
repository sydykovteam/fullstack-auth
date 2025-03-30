import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { ToggleTheme } from '@/shared/components/ui';
import { Providers } from '@/shared/providers';

import '../shared/styles/globals.css';

export const metadata: Metadata = {
	title: {
		absolute: 'Фулл авторизация',
		template: '%s • Фулл авторизация',
	},
	description: 'Фуллстек авторизация для вашего приложения',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang={'ru'} suppressHydrationWarning>
			<body className={GeistSans.variable}>
				<Providers>
					<div className={'relative flex min-h-screen flex-col'}>
						<ToggleTheme />

						<div
							className={
								'flex h-screen w-full items-center justify-center px-4'
							}
						>
							{children}
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
