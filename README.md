# Pull Request Branch Name

A github action that retrieves the pull request branch name and sets it in the output for other actions to use.

# Usage

```yaml
- uses: mdecoleman/pr-branch-name2.0.0
  id: vars
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.vars.outputs.branch }}
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
