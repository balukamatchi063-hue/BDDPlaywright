import dotenv from 'dotenv';

const environment = process.env.ENV ?? 'dev';
dotenv.config({ path: `env/env.${environment}` });

export const Config = {
	baseUrl: process.env.BASE_URL,
};
