# Brewski Bets

<span style="color: lightblue; border: 1px solid lightblue; border-radius: 2px; padding: 4px;">https://brewskibets.com/</span>
<br />

<p>
Brewski Bets is the official platform for betting brewskis on the FIFA World Cup Qatar 2022™
</p>
<br />

<h2>Releases</h2>

<details>
<summary style="cursor: pointer">v0.6.0-alpha</summary>

**Released on October 13th, 2022**

<h4 style="color: green">Features</h4>

- [Frontend] Add `bet-editor` component, including basic validators, submission and deletion buttons, and overlay background over main app

- [Frontend] Update avatar SVGs and replace Wario with Bowser

- [Frontend] Create `bet-service` (with stub methods for now), which will be responsible for all API calls and app state

</details>

<details>
<summary style="cursor: pointer">v0.5.0-alpha</summary>

**Released on October 10th, 2022**

<h4 style="color: green">Features</h4>

- [Core] Create Mario and Wario svgs and add to bet-table header as accompanying avatars
- [Frontend] Build out remainder of main app - `header`, `bet-table`, and `footer` components with dummy data
- [Frontend] Add `FortAwesome` beer and plus icons

<h4 style="color: orange">Refactor</h4>

- [Frontend] Refactor all colours to use HSL format instead of hexadecimal or RGB values

<h4 style="color: red">Bug Fixes</h4>

- [Backend] Ensure old source files are not cached in CloudFront by setting invalidations to all files (`/*`)

</details>

<details>
<summary style="cursor: pointer">v0.4.0-alpha</summary>

**Released on October 8th, 2022**

<h4 style="color: green">Features</h4>

- [Core] Create logo and generate accompanying favicons and webmanifest file
- [Frontend] Update global font family to 'Verdana' with sans-serif as fallback
- [Frontend] Generate all frontend components and build out `footer` component with same information/layout as in previous apps

<h4 style="color: orange">Chores/ Tests</h4>

- [Core] Reorganize this README.md and mock-ups
- [Core] Configure Jest as testing platform, write a few placeholder tests for `footer` component, and test the ESLint linter with current CI pipeline
- [Frontend] Add 'noscript' message for any users on ancient machines

</details>

<details>
<summary style="cursor: pointer">v0.3.0-alpha</summary>

**Released on October 8th, 2022**

<h4 style="color: orange">Chores</h4>

- [Frontend] Configure Jest, remove Jasmine & Karma from project, and update buildspec.yml to include testing phase
- [Backend] Configure S3 buckets, Route 53 and CloudFront for automatically re-directing to https:// site

</details>

<details>
<summary style="cursor: pointer">v0.2.0-alpha</summary>

**Released on October 8th, 2022**

<h4 style="color: orange">Chores</h4>

- [Core] Set up code formatters, update .gitignore, add buildspec.yml, and prep project for CodeBuild CI/CD pipeline

</details>

<details>
<summary style="cursor: pointer">v0.1.0-alpha</summary>

**Released on October 2nd, 2022**

<h4 style="color: green">Features</h4>

- [Core] Initial commit - create Angular app shell and README

</details>

<br />

<h2>Architecture</h2>

> <b>FRONTEND</b> (Angular v14)

- `FortAwesome` for icons
- `Jest` for unit testing
- Custom BehaviorSubject getter-setter design pattern for state management
  <br />

> <b>BACKEND</b> (AWS)

- `S3` – stores app source files and enables static web hosting
- `Route 53` – configures DNS records, redirects traffic to the appropriate CloudFlare distribution
- `CloudFlare` – redirects user to the secure _https://_ site (using SSL/TLS certificates from the `AWS Certificate Manager`) and serves app source files stored in the S3 bucket
- `CodeBuild` – runs CI pipeline (automatically triggered via GitHub pull requests) which tests and builds app, and re-populates the S3 bucket with the latest source files
- `Lambda` – performs CRUD operations in DynamoDB database
- `API Gateway` – handles all API requests, triggering the appropriate Lambda function for each endpoint
- `DynamoDB` – stores bet data in a NoSQL, serverless database

<br />
<h2>App mock-up</h2>

![App mock-up](/mock-ups/app.png 'App mock-up')
