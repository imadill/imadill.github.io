# Prerequisites

- Have [Git](https://git-scm.com/downloads) installed.
- Have [Node.js](https://nodejs.org/en/download/) installed.

## Installation

1. Fork the repository.
2. Clone your fork in your local machine.

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_FORKED_REPO.git
   ```

3. If you didn't have Yarn installed, install it.

   ```bash
   npm install -g yarn
   ```

4. Run `yarn install` to install all the dependencies.
5. (Working in [Visual Studio Code](https://code.visualstudio.com/) is highly recommended to work with this project) Make sure to use the [Workspace version](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript) of TypeScript, otherwise you might get errors when using Yarn's Plug'n'Play.
6. Create a new branch.

   ```bash
   git checkout -b your-new-branch
   ```

7. Run the dev server.

   ```bash
   yarn dev
   ```

8. After doing your work, build the app and check it out.

   ```bash
   yarn build
   yarn start
   ```

9. Push the changes to GitHub.

   ```bash
   git push -u origin your-new-branch
   ```

10. Create a [pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to the main repository.
