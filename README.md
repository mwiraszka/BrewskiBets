# Brewski Bets

<span style="color: lightblue; border: 1px solid lightblue; border-radius: 2px; padding: 4px;">https://brewskibets.com/</span>
<br />
<br />

<h2>Architecture</h2>
<p>
Brewski Bets is the official platform for betting brewskis for the FIFA World Cup Qatar 2022™
</p>

> <b>FRONTEND</b>

- Angular for a component-based frontend architecture
- Custom BehaviorSubject getter-setter design pattern for state management
- FortAwesome for icons
  <br /><br />

> <b>BACKEND</b> (AWS)

- S3 for static web hosting
- Route 53 for DNS and traffic management
- CodeBuild for configuring the build process and CI/CD pipeline
- Lambda for serverless backend functions
- API Gateway for API management and routing
- DynamoDB for a NoSQL database system

<br />
<h2>Releases</h2>

<details>
<summary style="cursor: pointer">v0.4.0-alpha</summary>

**Released on October 8th, 2022**

<h4 style="color: green">Features</h4>

- [Core] Create logo and generate accompanying favicons and webmanifest file

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

- [Chore] Set up code formatters, update .gitignore, add buildspec.yml, and prep project for CodeBuild CI/CD pipeline

</details>

<details>
<summary style="cursor: pointer">v0.1.0-alpha</summary>

**Released on October 2nd, 2022**

<h4 style="color: green">Features</h4>

- [Core] Initial commit - create Angular app shell and README

</details>

<br />
<br />
<h2>Mock-ups</h2>

![Main](/mock-ups/main.png 'Main')

![Dialog overlay](/mock-ups/dialog-overlay.png 'Dialog overlay')
