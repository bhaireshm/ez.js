## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone https://github.com/this-is-you/ez.js.git
```

where "https://github.com/this-is-you/ez.js.git" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone git@github.com:this-is-you/ez.js.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd ez.js
```

Now create a branch using the `git branch` command:

```
git branch -b your-new-branch-name
```

## Make necessary changes and commit those changes

Now goto docs folder and open `CONTRIBUTION.md` file in a text editor, add your name to it. Don't add it at the beginning or end of the file. Put it anywhere in between. Now, save the file.

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

Note: Things to remember before `commit`, check [this](https://github.com/bhaireshm/ez.js/blob/master/docs/CONTRIBUTION.md#things-to-remember)

```
git add docs/CONTRIBUTION.md
```

Now commit those changes using the `git commit` command:

```
git commit -m "Add your-name to Contributors list"
```

replacing `your-name` with your name.

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

- ### Authentication Error
     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>
  Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!

## Things to remember

- Good to follow some commit rules.
- `pre-commit` - on every commit it checks the for the code format and fixes,
  creates a distribution folder, <br>runs tests files, and creates docs if `src` folder content is modified.
- `post-checkout` - on change of one branch to another, this always checks the origin/default branch changes and merges to current branch.

### Commit message format:

[ `docs` | `configs` | `chore` | `package` | `fix` | `feat` | `build` ]: message title.

```
Example:

docs: isEmpty - jsDoc updated.
feat: newFuntion - some description on the same.
fix: [issue number] - issue title.

chore: types updated.
- unwanted files removed. (this is brief description)
```

Note: Title message should not contain more than 48 characters.
