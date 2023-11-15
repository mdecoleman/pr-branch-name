# Pull Request Branch Name

A github action that retrieves the pull request branch name and sets it in the output for other actions to use.

## Usage

```yaml
- uses: mdecoleman/pr-branch-name2.0.0
  id: vars
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.vars.outputs.branch }}
```

## Alternatives

This action focuses on determing the branch name in the current action context.
In case one needs the target branch of the PR or the default branch, one can try [`branch-names`](https://github.com/tj-actions/branch-names#branch-names).

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
