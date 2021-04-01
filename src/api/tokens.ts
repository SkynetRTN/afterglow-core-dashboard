import { apiClient, getPublicApiUrl, getAjaxApiUrl } from "./api-client";
import { Token, TokenLtd } from "./types";

export const getTokens = () => apiClient.get<TokenLtd[]>(`${getAjaxApiUrl()}/tokens`);

export const createToken = (token: Partial<TokenLtd>) =>
  apiClient.post<Token>(`${getAjaxApiUrl()}/tokens`, token);

export const deleteToken = (id: number) => apiClient.delete(`${getAjaxApiUrl()}/tokens/${id}`);
