# Brewski Bets

Welcome to the source code repository for the Brewski Bets web app! Here you'll find an overview of the application's architecture, a summary of what's changed with each release, and instructions on how to report a bug or request a change.

<https://brewskibets.com>

Brewski Bets is the official platform for betting brewskis on the FIFA World Cup Qatar 2022™

## Architecture

> FRONTEND

- `Angular v18` for frontend framework 
- `FortAwesome` for icons
- `Jest` for unit testing
- Custom BehaviorSubject getter-setter design pattern for state management

> BACKEND

- `S3` for static web hosting
- `Route 53` for DNS and traffic management
- `Lambda` for serverless backend functions
- `API Gateway` for API management and routing
- `DynamoDB` for a NoSQL database system
- `CloudFront` for redirecting user to the secure _https://_ site (using SSL/TLS certificates from the `AWS Certificate Manager`) and serving app source files stored in the S3 bucket

> DEV OPS

- `GitHub Actions` for automated workflows to build project, run unit tests, and deploy preview & production versions of the website

## Release notes

|     |                                   |
| --- | --------------------------------- |
| 🚀  | New features & improvements   |
| 🐛  | Bug fixes                         |
| 🔧  | Behind-the-scenes changes         |

<details>
<summary style="cursor: pointer">
v1.2.0 - August 5th, 2024
</summary>

- 🔧 [Frontend] Upgrade to Angular 18
- 🔧 [Core] Configure new production and preview GitHub Action workflows
- 🔧 [Core] Revamp this README file, add a LICENSE file, and switch to using `pnpm`
- 🔧 [Core] Upgrade various 3rd party libraries

</details>

<details>
<summary style="cursor: pointer">
v1.1.3 - May 16th, 2023
</summary>

- 🔧 [Core] Security upgrade

</details>

<details>
<summary style="cursor: pointer">
v1.1.2 - February 14th, 2023
</summary>

- 🔧 [Core] Security upgrade

</details>

<details>
<summary style="cursor: pointer">
v1.1.1 - December 24th, 2022
</summary>

- 🐛 [Frontend] Just for demo purposes

</details>

<details>
<summary style="cursor: pointer">
v1.1.0 - December 23rd, 2022
</summary>

- 🚀 [Frontend] Shut down betting component now that the World Cup tournament is over

</details>

<details>
<summary style="cursor: pointer">
v1.0.2 - October 23rd, 2022
</summary>

- 🚀 [Frontend] Enlarge 'New Bet' button to look better between avatars and large-font names
- 🚀 [Frontend] Reduce size of beer icons in bottom 'Total brewskis' section of the table
- 🚀 [Frontend] Further minor `bet-table` optimizations for mobile

</details>

<details>
<summary style="cursor: pointer">
v1.0.1 - October 23rd, 2022
</summary>

- 🐛 [Frontend] Restrict width of details area in `bet-table` so that horizontal scrolling is never necessary
- 🐛 [Frontend] Reduce height of `bet-editor` so that it's fully visible on mobile
- 🐛 [Frontend] Remove `overflow: hidden;` CSS rule on `table` element for the table header and footer to remain sticky on mobile

</details>

<details>
<summary style="cursor: pointer">
v1.0.0 - October 23rd, 2022
</summary>

- 🚀 [Frontend] Improve error handling by displaying error and success notifications (using `@ngneat/hot-toast` library) and ensuring editor modal only closes if API request succeeded
- 🔧 [Frontend] Implement separate `isEditorOpen$` subscription in `bet-editor` component to faciliate testing
- 🔧 [Frontend] Clean up some unused/ unnecessary code
- 🔧 [Frontend] Write static HTML rendering unit tests for all components

</details>

<details>
<summary style="cursor: pointer">
v0.7.1-alpha - October 23rd, 2022
</summary>

- 🚀 [Frontend] Add loading spinner
- 🐛 [Frontend] Fix broken unit tests by temporarily importing the HTTP client module into each spec file

</details>

<details>
<summary style="cursor: pointer">
v0.7.0-alpha - October 23rd, 2022
</summary>

- 🚀 [Frontend] Reduce font-size of `bet-table` header names, expand table to full width on small viewports, and match `body` background-color to that of the header and footer for a better mobile UX
- 🚀 [Frontend] Remove password-type from code `input` element to prevent browser from attempting to save it as a password
- 🚀 [Frontend] Add add, update and delete functionality
- 🚀 [Frontend] Support new-line characters (`\n`) in `details` field of form, and ensure characters are converted back to `<br>` tags in the HTML using 'white-space: pre-wrap;` CSS rule
- 🚀 [Backend] Create API key in AWS and add `x-api-key` header to add, update and delete API calls to prevent unauthorized requests
- 🚀 [Frontend] Sort bets in table based on new date-based id fields using new custom sort function
- 🚀 [Core] Add "ES2021.String" under "compilerOptions" > "lib" in `tsconfig.ts` file to allow String.prototype.ReplaceAll() function
- 🐛 [Frontend] Fix various small bugs related to `bet-editor` overlay
- 🐛 [Frontend] Invalidate form if either brew count is less than 1 (previously 0 was allowed)
- 🐛 [Backend] Ensure bet brew counts are always stored as strings in DynamoDB and converted back to numbers when retrieved
- 🔧 [Frontend] Add explicit `isEditMode` variable in `bet-editor` to clarify some logic in template
- 🔧 [Frontend] Rename 'description' as 'details' in `bet-editor` form since AWS API Gateway & Lambda cannot use 'description' as it's a reserved keyword

</details>

<details>
<summary style="cursor: pointer">
v0.6.1-alpha - October 13th, 2022
</summary>

- 🐛 [Frontend] Import all necessary modules in `bet-editor` and `bet-table` to fix broken tests
- 🔧 [Frontend] Un-nest the `bet-editor` component one level in the HTML so that it is a direct child of `app`

</details>

<details>
<summary style="cursor: pointer">
v0.6.0-alpha - October 13th, 2022
</summary>

- 🚀 [Frontend] Add `bet-editor` component, including basic validators, submission and deletion buttons, and overlay background over main app
- 🚀 [Frontend] Update avatar SVGs and replace Wario with Bowser
- 🚀 [Frontend] Create `bet-service` (with stub methods for now), which will be responsible for all API calls and app state

</details>

<details>
<summary style="cursor: pointer">
v0.5.0-alpha - October 10th, 2022
</summary>

- 🚀 [Core] Create Mario and Wario svgs and add to bet-table header as accompanying avatars
- 🚀 [Frontend] Build out remainder of main app - `header`, `bet-table`, and `footer` components with dummy data
- 🚀 [Frontend] Add `FortAwesome` beer and plus icons
- 🐛 [Backend] Ensure old source files are not cached in CloudFront by setting invalidations to all files (`/*`)
- 🔧 [Frontend] Refactor all colours to use HSL format instead of hexadecimal or RGB values

</details>

<details>
<summary style="cursor: pointer">
v0.4.0-alpha - October 8th, 2022
</summary>

- 🚀 [Core] Create logo and generate accompanying favicons and webmanifest file
- 🚀 [Frontend] Update global font family to 'Verdana' with sans-serif as fallback
- 🚀 [Frontend] Generate all frontend components and build out `footer` component with same information/layout as in previous apps
- 🚀 [Frontend] Add 'noscript' message for any users on ancient machines
- 🔧 [Core] Reorganize this README.md and mock-ups
- 🔧 [Core] Configure Jest as testing platform, write a few placeholder tests for `footer` component, and test the ESLint linter with current CI pipeline

</details>

<details>
<summary style="cursor: pointer">
v0.3.0-alpha - October 8th, 2022
</summary>

- 🔧 [Frontend] Configure Jest, remove Jasmine & Karma from project, and update buildspec.yml to include testing phase
- 🔧 [Backend] Configure S3 buckets, Route 53 and CloudFront for automatically re-directing to https:// site

</details>

<details>
<summary style="cursor: pointer">
v0.2.0-alpha - October 8th, 2022
</summary>

- 🔧 [Core] Set up code formatters, update .gitignore, add buildspec.yml, and prep project for CodeBuild CI/CD pipeline

</details>

<details>
<summary style="cursor: pointer">
v0.1.0-alpha - October 2nd, 2022
</summary>

- 🚀 [Core] Initial commit - create Angular app shell and README

</details>

## Report a bug / Request a change

Have an idea how we can improve the website? Find a bug? Submit a new issue [here](https://github.com/mwiraszka/BrewskiBets/issues).

## App mock-up

![App mock-up](/mock-ups/app.png 'App mock-up')
