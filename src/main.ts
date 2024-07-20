import core from '@actions/core'
import github from '@actions/github'

function getPrNumber(): number | null {
  const pullRequest = github.context.payload.pull_request

  if (!pullRequest) {
    return null
  }

  return pullRequest.number
}

export async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token')
    const { owner, repo } = github.context.repo

    const pull_number = getPrNumber()

    if (!pull_number) {
      core.setFailed('Could not get pull request number from context')
      return
    }

    const octokit = github.getOctokit(token)

    const response = await octokit.rest.pulls.get({
      owner,
      repo,
      pull_number
    })

    core.setOutput('branch', response.data.head.ref)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}
