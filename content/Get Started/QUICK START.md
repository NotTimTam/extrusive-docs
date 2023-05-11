# Quick Start

Welcome to the **extrusive.md** documentation! This page will give you an introduction to the CLI and an installation and configuration walkthrough.

Looking for compiler instructions? <a href="#compiling-your-app">Click here!</a>

## Installing the CLI

Extrusive runs as a CLI for your workspace. To start building your documentation, install the CLI globally via your terminal:

```terminal
npm i -g extrusive.md
```

or:

```terminal
npm i -g https://github.com/NotTimTam/extrusive.md.git
```

After you have installed the **extrusive.md** CLI, you can test it by running:

```terminal
npx extrusive test
```

Which should output:

<output>extrusive.md is up and running!</output>

## Creating your project environment

To create your project environment, point your terminal at your desired working directory and run:

```terminal
npx extrusive create
```

Or, if you would like to specify a sub-directory, run:

```terminal
npx extrusive create --project-directory <project-directory>
```

<p style="font-size: 0.75rem; color: var(--background-3);">Tip: the <code>--force</code> option will force the directory to be created, even if it overrides existing files. (WARNING: This is destructive!) </p>

This will build a directory with all the files you will need to get started. 🎉

### Directory layout

The newly created directory has several files and subdirectories.

```plaintext
root/
├─ content/
│  ├─ README.md
├─ public/
│  ├─ favicon.svg
├─ styles/
│  ├─ custom.css
├─ extrusive.config.json
```

### content/

The content directory will house all of your markdown documents.

This directory will house all your sub-directories and the markdown files within them.

While other filetypes aren't official supported, they will show up in the compiled app.

The `README.md` file in the root of the content directory is special. **This file is the homepage of your app.** Unlike other documents added to this directory, the homepage does not show up in the navigation menu and is accessed via clicking the logo or routing to the host domain of your project. (ie. `www.myapp.com/`) This file is also **<span style="color: var(--error)">required!</span> Deleting it will cause an error to be displayed when your site is loaded.**

### public/

The public directory is compiled with static builds and the client of dynamic builds. This can contain any extra files you want on the client-side. **Particularly images for use within your documentation.**

### styles/

This directory is similar to the public directory, but should contain any extra custom CSS files you wish to have on the clientside.

<a href="" onclick="handleRequestFile('/content/Get%20Started/QUICK%20START.html');">
These files must be imported through your <code>extrusive.config.json</code>
</a>
<br/>

An initial `custom.css` file is included and already set up to be imported for your use. This file can be safely deleted if unnecessary for your use-case.

## What to do next

1.  <a href="" onclick="handleRequestFile('/content/Get%20Started/Setting%20up%20extrusive.config.json.html')">Configure your `extrusive.config.json` file.</a>
2.  Add more content.
3.  Create custom CSS.
4.  <a href="" onclick="handleRequestFile('/content/More%20Info/Features.html')">Look over additional features.</a>
5.  **Compile your app!**

## Compiling your app

Once you are satisfied with your documentation's configuration and content, you can build it for the web easily!

If you are looking to have a dynamic <a href="https://expressjs.com/" target="_blank" rel="noopener noreferer">express</a>-based server, keep reading. Otherwise, skip to <a href="#building-in-static-mode">"Building in static mode."</a>

### Building in dynamic mode (recommended)

To start the build process, simply point your terminal to the root of your project directory and run:

```terminal
npx nodemon build
```

Or, if you would like to specify a sub-directory, run:

```terminal
npx extrusive build --output-directory <output-directory>
```

<p style="font-size: 0.75rem; color: var(--background-3);">Tip: the <code>--force</code> option will force the directory to be created, even if it overrides existing files. (WARNING: This is destructive!) </p>

This will create a `build` (or your specified output) directory. The build directory comes with a `server.js` file, which is your app's starting point.

First, configure your host port in the build folder's `.env`:

```env
PORT=<port> # Default "3000"
```

Then, either use the `npm dev`/`npm start` commands to spin up the server, or, from a terminal in the build directory, run:

```terminal
npm i
node server.js
```

The server will start up and indicate where it is listening. (usually [localhost:3000](http://localhost:3000/))

Open up that link in your browser and you're all set! 🎉

### Building in static mode

If you would prefer to have a static, standalone site, **extrusive.md** supports that to! While static deployments have benefits, like free hosting on [Github Pages](https://pages.github.com/), as well as all the features of dynamic deployments, they have a much larger client footprint, and may experience poor performance with larger numbers of documentation files.

Basically, you should only use static mode _if you have to._

Compiling in static mode is almost identical to compiling in dynamic mode, all you need to do is indicate to the compiler that you want a static site.

Point your terminal at the root of your project directory and run:

```terminal
npx extrusive build --static
```

Just as with dynamic mode, you can pick a specific output directory, (`--output-directory <output-directory>`) and **destructively** force an overwrite of existing build files. (`--force`)

Upload your build folder wherever you like, or open the `index.html` file locally. Your static documentation is ready! 🎉
