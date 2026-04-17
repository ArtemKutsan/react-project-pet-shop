import { BACKEND_BASE_URL } from '../services/api';

export const getImageUrl = (path) => `${BACKEND_BASE_URL}${path}`;
