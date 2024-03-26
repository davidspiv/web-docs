import fs from "fs";
const header = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="header.css" />
  </head>

  <body>
    <header>
      <button class="hamburger">
        <img src="/assets/svg-icons/hamburger.svg" alt="expanding menu" />
      </button>
      <a href="#Introduction" id="nav-logo"><h1>Web Dev Notes</h1></a>
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

    <main>

`;

const footer = `

</main>
<script src="/src/utils.js"></script>
<script src="/src/script.js"></script>
</body>
</html>
`;

fs.readFile("dist/html1.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data = `${header}${data}${footer}`;

  fs.writeFile("dist/html1.html", data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.error("yay!");
    }
  });
});
