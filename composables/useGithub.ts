import { GithubInfo, GithubRepo, GithubreposCollection } from '~/types'
import { convertGithubInfo, convertGithubRepo } from './convert/github'

const info = ref<GithubInfo>()
const repoList = ref<GithubRepo[]>([])

export const useGithub = () => {
  const getGithubInfo = async () => {
    const response = await useFetch('https://api.github.com/users/flingyp', { method: 'GET' })
    if (response.data.value) {
      info.value = convertGithubInfo(response.data.value)
    }
  }

  const getGithubRepos = async () => {
    let curPage = 1
    const getRepoList = async (page: number) => {
      const response = await useFetch(
        'https://api.github.com/users/flingyp/repos',
        { method: 'GET', query: { per_page: 100, page }, headers: { Accept: 'application/vnd.github+json' } },
      )
      if (response.data.value) {
        repoList.value.push(...convertGithubRepo(response.data.value))
      }
    }

    Promise.all([getRepoList(curPage), getRepoList(++curPage)])
  }

  const reposCollection = computed<GithubreposCollection[]>(() => {
    const collectionList: GithubreposCollection[] = [
      {
        name: 'Templates',
        collection: [],
      },
      {
        name: 'Configs',
        collection: [],
      },
      {
        name: 'Plugins',
        collection: [],
      },
    ]
    collectionList.forEach((collection) => {
      if (collection.name === 'Templates') {
        collection.collection = repoList.value.filter((item) => item.topics?.includes('template'))
      } else if (collection.name === 'Configs') {
        collection.collection = repoList.value.filter((item) => item.topics?.includes('config'))
      } else if (collection.name === 'Plugins') {
        collection.collection = repoList.value.filter((item) => item.topics?.includes('plugin'))
      }
    })
    return collectionList
  })

  return {
    info,
    repoList,
    reposCollection,

    getGithubInfo,
    getGithubRepos,
  }
}
