import { apiClient, getPublicApiUrl, getAjaxApiUrl } from './api-client'
import { User, OauthPlugin } from './types'

export const getOauthPlugins = () =>
  apiClient.get<OauthPlugin[]>(`${getAjaxApiUrl()}/oauth_plugins`)