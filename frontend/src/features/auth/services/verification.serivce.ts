import { api } from '@/shared/api';

class VerificationService {
	public async newVerificationCode(token: string | null) {
		return await api.post('/auth/email-confirmation', { token });
	}
}

export const verificationService = new VerificationService();
