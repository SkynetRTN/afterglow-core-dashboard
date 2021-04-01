import { apiClient, getPublicApiUrl, getAjaxApiUrl } from './api-client'
import { User } from './types'

export const getUser = (userId: string, expand: Array<string> = []) =>
  apiClient.get<User>(`${getPublicApiUrl()}/users/${userId}`)

export const login = (data: any) =>
  apiClient.post(`${getAjaxApiUrl()}/sessions`, data)

export const logout = () =>
  apiClient.delete(`${getAjaxApiUrl()}/sessions`)
