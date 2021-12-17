<p align="center">
  <img src="https://user-images.githubusercontent.com/33925073/146369487-1535e133-045f-4f32-ad9c-d74a952728bf.jpg" />
</p>
<h1 align="center">Oh boy &#128580;<br/>Another React Starter ?</h1>
<br/><br/><br/>

# About the project

**_"Another React Starter"_** is a set of extra-configuration and extra-libraries, which boosts start of **React** projects. So the main goal for this project - is an **initial-config time saver** .

This repo is inspired by similar project named [react-starter-boilerplate](https://github.com/TheSoftwareHouse/react-starter-boilerplate) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br/><br/>

# Modules in the starter

The starter contains many parts. Some of them are components, some of them are libraries. I've decided to call them as "**modules**" .

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
			<td style="border: 1px solid">UI</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144419384-1deb6fde-61f3-48e3-9e5f-d57ac4530028.png" />
				<br/>
				<a href="https://reactjs.org" target="_blank"><b>React</b></a>
			</td>
			<td style="border: 1px solid">
				Core of the starter - a JavaScript library for building user interfaces
			</td>
			<td style="border: 1px solid">-</td>
		</tr>
		<tr>
			<td style="border: 1px solid">UI</td>
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
//create a folder for your project
mkdir new-project

//enter into the folder
cd new-project

// clone another-react-starter repo (add a dot at the end ! - to clone to the current folder)
git clone https://github.com/mkotajny/another-react-starter.git .

// remove .git folder from the cloned repo
sudo rm -r .git

// initialize your git repo for your project
git init

// set remote to your github repo
git remote add origin [url to your github repo]
git remote -v

// make a first commit to your repo
git add .
git commit -m 'initial commit'
git push origin master

// install the boilerplate for your new app
yarn install

// run the boilerplate
yarn start
```

<br/><br/><a id="react-router" ></a>

# React Router

To check how React Router is implemented in the app - open (and analyze simple code) files listed below:

- src/index.tsx - look for usage _BrowserRouter_ component
- arc/App.tsx - look for _Navigation_ and _AppRoutes_ components

<br/><br/><a id="typescript" ></a>

# Typescript

## Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>tsconfig.json</b> file (located in the root folder of the project).

<br/><br/><a id="prettier" ></a>

# Prettier

## Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>.prettierc</b> file (located in the root folder of the project).

<br/>

## Using of Prettier in the project

### Manually

via terminal run command, which should fix or prettier issues in the project files.:

```
yarn format:fix
```

... the "format:fix" script is defined in the "package.json" file.

Recommendation: install also **"Prettier" plugin** in your IDE (e.g. "VS code"), where you may configure the plugin for run prettier on every save of changes on any project file. For the "VS code" - the configuration (for the mentioned plugin) is already added into ".csCode" folder in the project, but to use this config - you must install the Prettier plugin.

## Automatic run with the pre-commit hook

Prettier automatically runs (fixes prettier issues in the project files) on every commit to the git repository.

<br/><br/><a id="eslint" ></a>

# ESLint

## Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>.eslintrc.js</b> file (located in the root folder of the project).

<br/>

## Using of ESLint in the project

### Manually

via terminal run command, which should list (doesn't fix!) ESlint issues in the project files.:

```
yarn lint
```

OR run

```
yarn validate
```

... which does both (prettier and linting): fixes Prettier issues and shows or ESlint issues.

## Automatic run with the pre-commit hook

ESLint automatically runs on every commit-attempt to the git repository, so the hook **prevents developer from committing** changes with unresolved ESlint-issues in the code.

<br/><br/><a id="i18n" ></a>

# i18next

## How it works

The "another-react-starter" contains a sample UI Texts (like "_Welcome to Another React Starter_" in English and Polish). These texts are located in the /src/i18n/translations folder and all of them are used in the starter application - for example they are invoked in the _OtherPage/index.tsx_ file , with _useTranslate_ hook:

```
import { useTranslation } from 'react-i18next';
...
const { t } = useTranslation();
...
<p>{t('OTHER_PAGE.CONTENT')}</p>
```

<br/><br/><a id="lodash" ></a>

# Lodash

## How it works

Lodash "in action" is on the same example component - _OtherPage/index.tsx_:

```
import _ from 'lodash';
...
const sampleArray: Array<string> = ['1stt', '2nd', '3rd'];
...
//"last" function of the lodash library gets last ("3rd") element of the array
<div>{_.last(sampleArray)}</div>
```

<br/>

## Check the progress state of your translations

The starter contains [translation-check](https://github.com/locize/translation-check) plugin, useful mostly for catching e.g. untranslated message-keys.
Just go to this url http://localhost:3000?showtranslations (when your app runs of course), to check the statistics of _translation-check_ plugin.

<br/><br/>

# Useful Scripts

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
