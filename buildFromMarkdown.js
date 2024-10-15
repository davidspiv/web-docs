// Get data from markdown files in /src
// Parse markdown and create HTML snippets with the marked dependency
// Wrap HTML snippets with boilerplate
// Write HTML to files in /dist

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const header = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" maximum-scale=1.0, user-scalable=no"/>
    <title>Home</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="output.css" />
  </head>

  <body>
  <header>
  <div class="content-wrapper">
    <button id="hamburger">
    </button>
    <a href="#Introduction"><p id="header-logo">Web Dev Notes</p></a>
  </div>
  <nav id="main-nav">
    <ul>
      <li class="nav-item">
        <a href="index.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="vs-code-settings.html" class="nav-link"
          >VS Code Settings</a
        >
      </li>
      <li class="nav-item">
        <a href="html.html" class="nav-link">HTML</a>
      </li>
      <li class="nav-item">
        <a href="css.html" class="nav-link">CSS</a>
      </li>
      <li class="nav-item">
        <a href="javascript.html" class="nav-link">Javascript</a>
      </li>
      <li class="nav-item">
        <a href="responsive-design.html" class="nav-link"
          >Responsive Design</a
        >
      </li>
      <li class="nav-item">
        <a href="accessibility.html" class="nav-link">Accessibility</a>
      </li>
      <li class="nav-item">
        <a href="algorithms.html" class="nav-link">Algorithms</a>
      </li>
      <li class="nav-item">
        <a href="data-structures.html" class="nav-link">Data Structures</a>
      </li>
      <li class="nav-item">
        <a href="dynamic-programming.html" class="nav-link"
          >Dynamic Programing</a
        >
      </li>
      <li class="nav-item">
        <a href="networking.html" class="nav-link">Networking</a>
      </li>
      <li class="nav-item">
        <a href="command-line.html" class="nav-link">Command Line</a>
      </li>
      <li class="nav-item">
        <a href="node.html" class="nav-link">Node.js</a>
      </li>
      <li class="nav-item">
        <a href="npm.html" class="nav-link">npm</a>
      </li>
      <li class="nav-item">
        <a href="linting.html" class="nav-link">Linting</a>
      </li>
      <li class="nav-item">
        <a href="git.html" class="nav-link">Git</a>
      </li>
    </ul>
  </nav>
</header>

    <div class="content-wrapper">
      <main>

`;

const footer = `
</main>
</div>
<footer></footer>
<script src="utils.js"></script>
<script src="script.js"></script>
</body>
</html>
`;

getMarkdownFromSrc('src/md/', /\.md$/, (fileName) => {
	parse(fileName);
});

function getMarkdownFromSrc(startPath, filter, callback) {
	if (!fs.existsSync(startPath)) {
		console.log('Mo markdown files in ', startPath);
		return;
	}

	const files = fs.readdirSync(startPath);

	for (let i = 0; i < files.length; i++) {
		const fileName = path.join(startPath, files[i]);
		if (filter.test(fileName)) callback(fileName);
	}
}

function parse(fileName) {
	fs.readFile(fileName, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}

		writeHtml(marked.parse(data), fileName);
	});
}

function writeHtml(data, fileName) {
	const formattedData = `${header}${data}${footer}`;

	console.log(fileName);
	const formattedFileName = fileName
		.replace('src/md/', '')
		.replace('.md', '.html');

	fs.writeFile(`dist/${formattedFileName}`, formattedData, (err) => {
		if (err) {
			console.error(err);
		}
	});
}
