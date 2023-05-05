import { GithubInfo, GithubRepo, GithubReposCollection } from '~/types'
import { convertGithubInfo, convertGithubRepo } from './convert/github'

const LANGUAGE_COLOR_LIST = new Map([
  ['JavaScript', '#f1e05a'],
  ['TypeScript', '#3178c6'],
  ['Vue', '#41b883'],
])

export const useGithub = () => {
  const info = ref<GithubInfo>()
  const repoList = ref<GithubRepo[]>([])

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

  const reposCollection = computed<GithubReposCollection[]>(() => {
    let collectionList: GithubReposCollection[] = [
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
      {
        name: 'Tools',
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
      } else if (collection.name === 'Tools') {
        collection.collection = repoList.value.filter((item) => item.topics?.includes('tool'))
      }
    })
    collectionList = collectionList.map((collection) => {
      collection.collection?.forEach((item) => {
        item.languageColor = LANGUAGE_COLOR_LIST.get(item.language) || '#41b883'
      })
      return collection
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
