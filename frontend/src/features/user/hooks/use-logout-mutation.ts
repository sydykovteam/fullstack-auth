import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { authService } from '@/features/auth/services';

import { toastMessageHandler } from '@/shared/utils';

export function useLogoutMutation() {
	const router = useRouter();

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			toast.success('Успешных выход', {
				description:
					'Вы успешно вышли из системы, перенаправляем на страницу входа',
			});
			router.push('/auth/login');
		},
		onError: (error) => {
			toastMessageHandler(error);
		},
	});

	return { logout, isLoadingLogout };
}
