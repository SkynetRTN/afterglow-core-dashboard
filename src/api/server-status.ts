import { apiClient, getAjaxApiUrl } from './api-client'
import { ServerStatus } from './types'

export const getServerStatus = () =>
  apiClient.get<ServerStatus>(`${getAjaxApiUrl()}/server_status`)