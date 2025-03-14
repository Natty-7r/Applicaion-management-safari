# Virtual Game Backend
This project aims at building a scalable and maintainable web application using Vite and React.


#### Project Overview
---
## Table of Contents
- [Project Goal](#project-goal)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Linting and Formatting](#linting-and-formatting)
- [Git Workflow](#git-workflow)
- [Project Structure](#project-structure)
- [React Best Practices](#react-best-practices)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [References](#references)

# Project Goal
The goal of this project is to develop a captivating landing page for Ablaze Labs that effectively communicates the company's services and value proposition, attracts potential clients, and generates leads. Additionally, the project aims to enhance brand visibility and credibility in the target market, positioning Ablaze as a leading venture studio in Ethiopia.

Also to create a high-performance, scalable web application with a focus on best practices and maintainable code.

# Getting Started

## Prerequisites
- Node.js (>= 18.x)
- npm or yarn

## Installation
```sh
git clone https://your-repo-url/project-name.git
cd project-name
npm install
npm run dev
```

## Setup
After installation, configure the project by copying `.env.example` to `.env` and setting up necessary environment variables.

# **Development Guidelines**



## Code Style
We follow the Airbnb JavaScript style guide. Please make sure your code adheres to these standards.

## Naming Conventions
- **Variables**: camelCase
- **Functions**: camelCase
- **Classes**: PascalCase
- **File names**: kebab-case
- **Enums**: PascalCase
- **Constants**: SCREAMING_SNAKE_CASE

# Linting and Formatting
### Install Dependencies

Install the necessary dependencies for ESLint, Airbnb config, TypeScript, Prettier, Commitlint, and Husky:

```sh
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged @commitlint/{config-conventional,cli}
```
### ESLint Configuration
We use ESLint to enforce code quality. The configuration file is located at `.eslintrc.cjs`.
Create or update your `.eslintrc.cjs` file to include the Airbnb style guide and custom rules for naming conventions:

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'camelcase': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
}
```
### Prettier Configuration
We use Prettier for code formatting. The configuration file is located at `.prettierrc`.


Create a `.prettierrc` file in the root of your project with the following content:

```json
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "all"
}
```


### Setup Husky and Lint-Staged

Add Husky and lint-staged configurations to enforce code standards before commits:

1. Initialize Husky:

    ```sh
    npx husky install
    ```

2. Add a prepare script to your `package.json`:

    ```json
    "scripts": {
      "prepare": "husky install"
    }
    ```

3. Create a Husky pre-commit hook:

    ```sh
    npx husky add .husky/pre-commit "npx lint-staged"
    ```

4. Configure `lint-staged` in your `package.json`:

    ```json
    "lint-staged": {
      "*.{ts,tsx}": [
        "eslint --fix",
        "prettier --write"
      ]
    }
    ```

###  Configure Commitlint

Create a `commitlint.config.js` file in the root of your project:

```javascript
module.exports = { extends: ['@commitlint/config-conventional'] }
```

Add a Husky commit-msg hook:

```sh
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

# Git Workflow

## Branching Strategy
1. Naming of branches should start with the jira issue number followed by a hyphen, then the name of the branch written in snake case.

2. Make sure to create branches and pull requests on Jira. On JIra add dev-doc or development document and add all the documents there. Including the release link what it has 
   been done taking snapshots If necessary.
3. Once a branch is merged the owner should delete the branch or we can set a rule that deletes a merged branch.

## Merge-branch strategy
The following will be the standard branches to be used for our project:

**_main_** - this branch is reserved for production use only. It can be updated only from a release branch or a hotfix branch.

**_development_** - this will be the default branch and where developers will start to work on features and bug fixes. It should always be in sync with the main branch.

**_feature/*_** - these branches should be created from the development branch, and when done should have pull requests created for them to be merged to the development branch. During pull requests, code review by peers and technical lead should be done. And also, QA engineers and software testers should perform feature specific tests and approve the merge.

**_bugfix/*_** - these branches are created when testers or QA engineers report bugs on the staging/release branch. It should be branched out from development and must be merged back with a pull request after the fix is done and approved by the QA team.

**_hotfix_** - this branch is reserved for critical, time sensitive and production level bugs or errors. It should be in sync with the main and development branches, and once a hotfix is done, it should be merged back to those two branches.

**_staging or release_** - this branch is for setting up demos and preparing merged features from a sprint for final end-to-end testing for QA team. If approved by the QA team, it signifies that it could be merged to the main or production branch.



## Commit Message Standards

### Format
We use the conventional commit style. Format: `<type>(<scope>): <subject>`

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope
- The scope should be the name of the module affected (as perceived by the person reading the changelog generated from commit messages).
- Examples: `auth`, `payments`, `profile`

### Subject
- Use the imperative, present tense: "change" not "changed" nor "changes"
- Do not capitalize the first letter
- No period (.) at the end

### Examples
- `feat(auth): add login functionality`
- `fix(payments): handle edge case for expired credit card`
- `docs(readme): update installation instructions`
- `style(profile): format user profile component`
- `refactor(auth): simplify login flow`
- `perf(api): optimize data fetching`
- `test(payments): add tests for payment processing`
- `build(deps): update npm dependencies`
- `ci(travis): update Travis CI configuration`
- `chore(env): update development environment setup`
- `revert(auth): revert login feature`


## PR Message Standard

### Format

1. **Title**: A concise summary of the changes introduced by the pull request.
2. **Description**: A detailed explanation of the changes, including any necessary context, implementation details, and reasons behind the changes.

### Title
- Keep it clear and descriptive.
- Use imperative mood (e.g., "Fix bug" instead of "Fixed bug").
- If the pull request addresses an existing issue, reference it in the title.

### Description
- Provide enough detail for reviewers to understand the purpose of the changes.
- Include any relevant context, such as why the changes are necessary or what problem they solve.
- Mention any dependencies or related pull requests.
- If applicable, include steps for testing the changes.
- Use bullet points or numbered lists for clarity.
- Use Markdown or a similar markup language for formatting if supported.

### Examples
#### Title:
- **Fixes issue #123: Update login page styling**
- **Feature: Implement user profile page**

#### Description:
```
## Description
This pull request updates the styling of the login page to improve the user experience. Changes include:
- Adjusting the color scheme to match the brand guidelines.
- Adding spacing between form elements for better readability.
- Aligning the login button with other elements on the page.

## Context
The current login page has received complaints from users about its usability. This update aims to address those concerns and improve overall satisfaction.

## Testing
To test the changes:
1. Navigate to the login page.
2. Verify that the colors match the brand guidelines.
3. Ensure the spacing between form elements is consistent.
4. Confirm that the login button aligns correctly.

## Dependencies
- Added `jsonwebtoken` for JWT generation and validation.

```

### Additional Tips
- Keep the pull request message concise but informative.


## Using Commitlint and Husky
Commit messages are linted using Commitlint and Husky pre-commit hooks to enforce code standards.
### Verify the Configuration

Ensure your ESLint, Prettier, Husky, and Commitlint configurations are working correctly by testing a commit and checking the linting rules.

```sh
npm run lint
npm run prettier -- --check .
```

Make a commit to see if Husky and lint-staged are working correctly:

```sh
git add .
git commit -m "feat: setup ESLint, Prettier, and Husky"
```

# Project Structure

Ensure your project follows the specified structure. Here’s a brief example:

```
src/
  assets/
    icons/
    images/
    fonts/
    index.ts
  _auth/
    index.ts
  _root/
    pages/
    index.ts
  components/
    forms/
    shared/
  constants/
    index.ts
  contexts/
    AuthContext.ts
  hooks/
    useAuth.ts
  lib/
    axios.ts
    react-query/
      useQueries.ts
      useMutations.ts
  types/
    index.ts
  utils.ts
```

## Example Files for Assets and Exports

- **src/assets/index.ts**

    ```typescript
    export * from './icons'
    export * from './images'
    export * from './fonts'
    ```

- **src/_auth/index.ts**

    ```typescript
    export * from './LoginPage'
    export * from './RegisterPage'
    ```

- **src/_root/index.ts**

    ```typescript
    export * from './HomePage'
    export * from './AboutPage'
    ```



## Create a README.md

Create a `README.md` file to document your project. Here's a template:

```markdown
# Project Name

## Table of Contents
- [Project Goal](#project-goal)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Project Structure Overview](#project-structure-overview)
- [Project Structure Documentation](#project-structure-documentation)
- [Features](#features)
- [Contributors](#contributors)

## Project Goal
Describe the main goal and purpose of the project.

## Installation and Setup
Provide step-by-step instructions on how to install and set up the project.

```sh
# Example installation steps
git clone https://github.com/your-repo/project-name.git
cd project-name
npm install
npm run dev
```

## Usage
Instructions on how to use the project.

## Project Structure Overview
Overview of the project's structure.

```
src/
  assets/
    icons/
    images/
    fonts/
    index.ts
  _auth/
    index.ts
  _root/
    pages/
    index.ts
  components/
    forms/
    shared/
  constants/
    index.ts
  contexts/
    AuthContext.ts
  hooks/
    useAuth.ts
  lib/
    axios.ts
    react-query/
      useQueries.ts
      useMutations.ts
  types/
    index.ts
  utils.ts
```

# React Best Practices

Ensure your code adheres to the best practices:

1. **Meaningful Component Names**: Use descriptive and meaningful names for components.
2. **Break Down Components**: Split components into smaller, reusable pieces.
3. **Keep Components Small**: Avoid monolithic components; aim for single responsibility.
4. **Use PropTypes**: Validate component props with PropTypes or TypeScript.
5. **Use Functional Components**: Prefer functional components with hooks over class components.
6. **Avoid Inline Styles**: Use CSS modules, styled-components, or similar solutions.
7. **Use Stateless Components**: Whenever possible, use stateless components to enhance performance.
8. **Use JSDoc**: Optionally, document your code with JSDoc.
9. **Accessibility**: Ensure your HTML and components are accessible (e.g., ARIA roles).
10. **Performance Optimization**: Use memoization, key props, component splitting, lazy loading, performance profiling, and optimized assets.


# Documentation
Detailed documentation of each part of the project structure.

## Features
List of features included in the project.

## Contributing
