# Setting up `extrusive.config.json`

After <a href="" onclick="handleRequestFile('/content/Get%20Started/Quick%20Start.html')">building your app</a>, you can find an `extrusive.config.json` file in the root directory.

This page will give you a comprehensive overview of the configuration file and possible options therein.

```json
{
	"title": "my extrusive app",
	"author": "Anonymous",
	"description": "Website built with extrusive.md! https://github.com/NotTimTam/extrusive.md",
	"favicon": "./public/favicon.svg",
	"styles": ["./styles/custom.css"],
	"copyright": "© 2023 Anonymous",
	"logo": "<ion-icon name=\"code-slash-outline\" size=\"large\"></ion-icon> <b>MY EXTRUSIVE APP</b>"
}
```

## The structure of `extrusive.config.json`

| Key                       | Type          | Description                                                                                                                                                                                              |
| ------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                   | `string`      | The title of the app. Used for metadata and `package.json`                                                                                                                                               |
| `author`                  | `string`      | The app's author. Used for metadata and `package.json`                                                                                                                                                   |
| `description`             | `string`      | The app's description. Used for metadata and `package.json`                                                                                                                                              |
| `favicon`                 | `path`        | The path to the app's favicon image. Should be a relative path to the public folder. (ie. `./public/favicon.ico`)                                                                                        |
| `styles`                  | `Array<path>` | An array of absolute paths to custom CSS files. Should be a relative path to the styles folder. (e.g., `./styles/custom.css`)                                                                               |
| `copyright`               | `string`      | Copyright information to put in the app's footer. Can also, ineffectively, be used to display other HTML code in that space.                                                                             |
| `logo`                    | `string`      | The logo data to place in the page header. Can be a string or **more complex html**, like the default.                                                                                                   |
| `disableFooter`           | `boolean`     | Setting this value to `true` will stop the compiler from adding a footer to the DOM at all.                                                                                                              |
| `appendBody`/`appendHead` | `string`      | Any additional content to add to the DOM. Appended to the end of the `<body/>`/`<head/>` tags respectively. Useful for importing custom scripts from the public folder, adding extra metadata, and more! |
