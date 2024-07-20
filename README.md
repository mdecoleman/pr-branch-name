# Pull Request Branch Name

[![GitHub Super-Linter](https://github.com/mdecoleman/pr-branch-name/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/mdecoleman/pr-branch-name/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/mdecoleman/pr-branch-name/actions/workflows/check-dist.yml/badge.svg)](https://github.com/mdecoleman/pr-branch-name/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/mdecoleman/pr-branch-name/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/mdecoleman/pr-branch-name/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)

A github action that retrieves the pull request branch name and sets it in the
output for other actions to use.

# Usage

```yaml
- uses: mdecoleman/pr-branch-namev3.0.0
  id: vars
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
- run: echo ${{ steps.vars.outputs.branch }}
```

# License

The scripts and documentation in this project are released under the
[MIT License](LICENSE)
