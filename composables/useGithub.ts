import { GithubInfo } from '~/types'
import { convertGithubInfo } from './convert/github'

const info = ref<GithubInfo>()

export const useGithub = () => {
  // 获取个人Github账号信息
  const getGithubInfo = async () => {
    const response = await useFetch('https://api.github.com/users/flingyp', { method: 'GET' })
    if (response.data.value) {
      info.value = convertGithubInfo(response.data.value)
    }
  }

  return {
    info,

    getGithubInfo,
  }
}
