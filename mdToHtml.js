// Get data from markdown files in /src
// Parse markdown and create HTML snippets with the marked dependency
// Wrap HTML snippets with boilerplate
// Write HTML to files in /dist

import fs from "fs";
import path from "path";
import { marked } from "marked";

const header = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="output.css" />
    <!-- <link rel="stylesheet" href="../src/styles.css" /> -->
  </head>

  <body>
    <header>
      <div class="content-wrapper">
        <button class="hamburger">
          <img
            id="purple"
            src="/assets/svg-icons/hamburger.svg"
            alt="expanding menu"
          />
        </button>
        <a href="#Introduction" id="header-logo"><p>Web Dev Notes</p></a>
      </div>
      <nav id="main-nav">
        <ul>
          <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="basic-tools.html" class="nav-link">Basic Tools</a>
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
            <a href="datastructures.html" class="nav-link">Data Structures</a>
          </li>
          <li class="nav-item">
            <a href="dynamic-programing.html" class="nav-link"
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

getMarkdownFromSrc("src/", /\.md$/, function (fileName) {
  parse(fileName);
});

function getMarkdownFromSrc(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log("Mo markdown files in ", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);

  for (let i = 0; i < files.length; i++) {
    const fileName = path.join(startPath, files[i]);
    if (filter.test(fileName)) callback(fileName);
  }
}

function parse(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = marked.parse(data);

    //Janky
    // data = data
    //   .replace(`<h3>`, `</section><section><h3>`)
    //   .replace(`</h2>\n</section>`, "</h2>")
    //   .replace(`</main>`, `</section></main>`);

    writeHtml(data, fileName);
  });
}

function writeHtml(data, fileName) {
  data = `${header}${data}${footer}`;

  fileName = fileName.replace("md", "html");
  fileName = fileName.replace("src\\", "");

  fs.writeFile(`dist/${fileName}`, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Edited - ${fileName}`);
    }
  });
}
