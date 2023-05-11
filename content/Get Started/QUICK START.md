# Quick Start

Welcome to the **extrusive.md** documentation! This page will give you an introduction to the CLI and an installation and configuration walkthrough.

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

1.  Configure your `extrusive.config.json` file.
2.  Add more content.
3.  Create custom CSS.
4.  Compile your app.
5.  Look over additional features.
