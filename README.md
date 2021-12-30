<p align="center">
  <img src="https://user-images.githubusercontent.com/33925073/147665032-dbe03531-7970-47f9-8820-44a1b7a8eef5.png" />
</p>
<h1 align="center">Plan of Attack</h1>
<br/><br/><br/>

# About the project

**_"Plan of Attack"_** is an application for **creation of any plan** (e.g. **action plan** or any nested set of items).

The application is in the ongoing development phase. The staging server of the working app (demo) is [here](https://plan-of-attack.netlify.app).

This project is bootstrapped with [another-react-starter](https://github.com/mkotajny/another-react-starter) .
<br/><br/>

# Modules in the project

The project contains many parts. Some of them are components, some of them are libraries. These elements are named "**modules**" in this readme doc.

<table>
	<thead>
		<tr>
			<th style="border: 1px solid">Category</th>
			<th style="border: 1px solid">Module</th>
			<th style="border: 1px solid">Description</th>
			<th style="border: 1px solid">Module Doc</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid">UI libraries</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144419384-1deb6fde-61f3-48e3-9e5f-d57ac4530028.png" />
				<br/>
				<a href="https://reactjs.org" target="_blank"><b>React</b></a>
			</td>
			<td style="border: 1px solid">
				Core of the apllication UI - a JavaScript library for building user interfaces
			</td>
			<td style="border: 1px solid">-</td>
		</tr>
		<tr>
			<td style="border: 1px solid">UI libraries</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/145827319-a9141ca2-4018-49df-9a0e-bf84f26d0e60.png" />
				<br/>
				<a href="https://reactjs.org" target="_blank"><b>React Router v6</b></a>
			</td>
			<td style="border: 1px solid">
				Collection of React components, hooks and utilities that make it easy to build multi-page applications with React
			</td>
			<td style="border: 1px solid"><a href="#react-router">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">UI libraries</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/147070316-85e9038a-84de-4ff5-b065-ffb6eafe47f2.png" />
				<br/>
				<a href="https://mui.com" target="_blank"><b>Material UI</b></a>
			</td>
			<td style="border: 1px solid">
				A library of foundational and advanced components, enabling to build own design system and develop React applications faster
			</td>
			<td style="border: 1px solid">-</td>
		</tr>
		<tr>
			<td style="border: 1px solid">Code Quality</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144420826-006d41f8-72f0-4280-bcd4-56735c04c705.png" />
				<br/>
				<a href="https://www.typescriptlang.org" target="_blank"><b>Typescript</b></a>
			</td>
			<td style="border: 1px solid">
				Strongly typed programming language that builds on JavaScript
			</td>
			<td style="border: 1px solid"><a href="#typescript">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">Code Quality</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144421230-cd9bc574-0005-4a4e-94fa-0fa23ae8f271.png" />
				<br/>
				<a href="https://prettier.io" target="_blank"><b>Prettier</b></a>
			</td>
			<td style="border: 1px solid">
				An opinionated code formatter with support for JS, JSX, Typescript and many other languages
			</td>
			<td style="border: 1px solid"><a href="#prettier">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">Code Quality</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144421573-68893864-75c0-4c94-9251-70f7647ae62c.png" />
				<br/>
				<a href="https://eslint.org" target="_blank"><b>ESLint</b></a>
			</td>
			<td style="border: 1px solid">
				A code analysis tool for "linting" - identifying errors or problematic patterns in your  JavaScript code
			</td>
			<td style="border: 1px solid"><a href="#eslint">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">Javascript utilities</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/145224397-411537f8-c539-4d21-8444-a632c679ca1a.png" />
				<br/>
				<a href="https://react.i18next.com/" target="_blank"><b>I18next</b></a>
			</td>
			<td style="border: 1px solid">
				An Internationalization framework for React / React Native which is based on i18next.
			</td>
			<td style="border: 1px solid"><a href="#i18n">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">Javascript utilities</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/146366990-77dd9f0b-b8a2-45ef-9749-bdc5d3532837.png" />
				<br/>
				<a href="https://lodash.com/" target="_blank"><b>Lodash</b></a>
			</td>
			<td style="border: 1px solid">
				A modern JavaScript utility library delivering modularity, performance & extras.
			</td>
			<td style="border: 1px solid"><a href="#lodash">redirect</a></td>
		</tr>
	</tbody>
</table>

<br/><br/>

# How to start

Please be aware, that this project is configured for usage of [yarn](https://yarnpkg.com/) package manager (all commands listed below uses yarn not npm !)

To start the development, run:

```
//navigate to the parent folder dedicated for this project

// clone plan-of-attack repo
git clone https://github.com/mkotajny/plan-of-attack.git

// install the boilerplate for your new app
yarn install

// run the boilerplate
yarn start
```

<br/><br/>

# PWA (Progressive Web App)

To run the application as PWA on Android mobile device:

1. run web browser (e.g. Chrome) on your mobile device
2. open the app [url](https://plan-of-attack.netlify.app) in the browser (on the same mobile device of course)
3. after successful load of the page - run context menu (of your web browser), choose "**_Add to Home screen_**", and follow further instructions
4. open the same application again, however this time not from your web browser, but from the **direct shortcut** (visible as a separate app) in your mobile device.

<br/><br/>

# More info about project modules

This section describes details about modules used in this project (listed in the table from previous section)

<br/><a id="react-router" ></a>

## React Router

To check how React Router is implemented in the app - open (and analyze simple code) files listed below:

- src/index.tsx - look for usage _BrowserRouter_ component
- arc/App.tsx - look for _Navigation_ and _AppRoutes_ components

<br/><a id="typescript" ></a>

## Typescript

### Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>tsconfig.json</b> file (located in the root folder of the project).

<br/><a id="prettier" ></a>

## Prettier

### Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>.prettierc</b> file (located in the root folder of the project).

<br/>

### Using of Prettier in the project

<br/>

**Manually**

via terminal run command, which should fix or prettier issues in the project files.:

```
yarn format:fix
```

... the "format:fix" script is defined in the "package.json" file.

Recommendation: install also **"Prettier" plugin** in your IDE (e.g. "VS code"), where you may configure the plugin for run prettier on every save of changes on any project file. For the "VS code" - the configuration (for the mentioned plugin) is already added into ".csCode" folder in the project, but to use this config - you must install the Prettier plugin.

<br/>

**Automatic run with the pre-commit hook**

Prettier automatically runs (fixes prettier issues in the project files) on every commit to the git repository.

<br/><br/><a id="eslint" ></a>

## ESLint

### Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>.eslintrc.js</b> file (located in the root folder of the project).

<br/>

### Using of ESLint in the project

<br/>

**Manually**

via terminal run command, which should list (doesn't fix!) ESlint issues in the project files.:

```
yarn lint
```

OR run

```
yarn validate
```

... which does both (prettier and linting): fixes Prettier issues and shows or ESlint issues.

<br/>

**Automatic run with the pre-commit hook**

ESLint automatically runs on every commit-attempt to the git repository, so the hook **prevents developer from committing** changes with unresolved ESlint-issues in the code.

Make sure that pre-commit hook **runs on every commit** (run of prettier+ESlint + unit tests). If not (e.g. message _"The 'pre-commit' hook was ignored because it's not set as executable"_ appears), than you have to set pre-commit file as executable. To do this, go (using the terminal) to the .husky directory and run:

```
chmod +x pre-commit
```

... and make sure again, that the pre-commit hooks triggers on every commit.

<br/><br/><a id="i18n" ></a>

## i18next

### How it works

The UI Texts are located in the /src/i18n/translations folder.
In the application these text are invoked using _useTranslation_ hook:

```
import { useTranslation } from 'react-i18next';
...
const { t } = useTranslation();
...
<p>{t('OTHER_PAGE.CONTENT')}</p>
```

<br/><br/><a id="lodash" ></a>

## Lodash

### How it works

Example of using _Lodash_ library:

```
import _ from 'lodash';
...
const sampleArray: Array<string> = ['1stt', '2nd', '3rd'];
...
//"last" function of the lodash library gets last ("3rd") element of the array
<div>{_.last(sampleArray)}</div>
```

<br/>

### Check the progress state of your translations

The project contains [translation-check](https://github.com/locize/translation-check) plugin, useful mostly for catching e.g. untranslated message-keys.
Just go to this url http://localhost:3000?showtranslations (when your app runs of course), to check the statistics of _translation-check_ plugin.

<br/><br/>

## Useful Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `format:fix`

Manual run of Prettier for all appropriate project files. The same Prettier also runs for every commit.

### `yarn lint`

Manual run of ESLint for all appropriate project files. The same ESlint also runs on every commit.

### `yarn validate`

Extended mode of manual run of complex code-quality check - prettier, linter, typescript types ckeck etc. Similar operation also runs on every commit.
