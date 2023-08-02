## GIT

- `pre-commit` - on every commit it checks the for the code format and fixes, creates a distribution folder, runs tests files, and creates docs if `src` folder content is modified.
- `post-checkout` - on change of one branch to another, this always checks the origin/default branch changes and merges to current branch.

### Commit message format:
[`docs`|`configs`|`chore`|`package`|`fix`|`feat`|`build`]: message title.

```
Example:
docs: isEmpty - jsDoc updated.
feat: newFuntion - some description on the same.
fix: [issue number] - issue title.
chore: types updated.
- unwanted files removed. (this is brief description)
```

> Note:
> - title message should not contain more than 48 characters.
