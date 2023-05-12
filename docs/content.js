const content={"/content/Get Started/Quick Start.html":"&lt;h1 id=&quot;quick-start&quot;&gt;Quick Start&lt;/h1&gt;\n&lt;p&gt;Welcome to the &lt;strong&gt;extrusive.md&lt;/strong&gt; documentation! This page will give you an introduction to the CLI and an installation and configuration walkthrough.&lt;/p&gt;\n&lt;p&gt;Looking for compiler instructions? &lt;a href=&quot;#compiling-your-app&quot;&gt;Click here!&lt;/a&gt;&lt;/p&gt;\n&lt;h2 id=&quot;installing-the-cli&quot;&gt;Installing the CLI&lt;/h2&gt;\n&lt;p&gt;Extrusive runs as a CLI for your workspace. To start building your documentation, install the CLI globally via your terminal:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npm i -g extrusive.md\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;or:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npm i -g https://github.com/NotTimTam/extrusive.md.git\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;After you have installed the &lt;strong&gt;extrusive.md&lt;/strong&gt; CLI, you can test it by running:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npx extrusive test\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;Which should output:&lt;/p&gt;\n&lt;p&gt;&lt;output&gt;extrusive.md is up and running!&lt;/output&gt;&lt;/p&gt;\n&lt;h2 id=&quot;creating-your-project-environment&quot;&gt;Creating your project environment&lt;/h2&gt;\n&lt;p&gt;To create your project environment, point your terminal at your desired working directory and run:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npx extrusive create\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;Or, if you would like to specify a sub-directory, run:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npx extrusive create --project-directory &amp;lt;project-directory&amp;gt;\n&lt;/code&gt;&lt;/pre&gt;&lt;p style=&quot;font-size: 0.75rem; color: var(--background-3);&quot;&gt;Tip: the &lt;code&gt;--force&lt;/code&gt; option will force the directory to be created, even if it overrides existing files. (WARNING: This is destructive!) &lt;/p&gt;\n\n&lt;p&gt;This will build a directory with all the files you will need to get started. 🎉&lt;/p&gt;\n&lt;h3 id=&quot;directory-layout&quot;&gt;Directory layout&lt;/h3&gt;\n&lt;p&gt;The newly created directory has several files and subdirectories.&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-plaintext&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;plaintext&lt;/span&gt;root/\n├─ content/\n│  ├─ README.md\n├─ public/\n│  ├─ favicon.svg\n├─ styles/\n│  ├─ custom.css\n├─ extrusive.config.json\n&lt;/code&gt;&lt;/pre&gt;&lt;h3 id=&quot;content&quot;&gt;content/&lt;/h3&gt;\n&lt;p&gt;The content directory will house all of your markdown documents.&lt;/p&gt;\n&lt;p&gt;This directory will house all your sub-directories and the markdown files within them.&lt;/p&gt;\n&lt;p&gt;While other filetypes aren&amp;#39;t official supported, they will show up in the compiled app.&lt;/p&gt;\n&lt;p&gt;The &lt;code&gt;README.md&lt;/code&gt; file in the root of the content directory is special. &lt;strong&gt;This file is the homepage of your app.&lt;/strong&gt; Unlike other documents added to this directory, the homepage does not show up in the navigation menu and is accessed via clicking the logo or routing to the host domain of your project. (ie. &lt;code&gt;www.myapp.com/&lt;/code&gt;) This file is also &lt;strong&gt;&lt;span style=&quot;color: var(--error)&quot;&gt;required!&lt;/span&gt; Deleting it will cause an error to be displayed when your site is loaded.&lt;/strong&gt;&lt;/p&gt;\n&lt;h3 id=&quot;public&quot;&gt;public/&lt;/h3&gt;\n&lt;p&gt;The public directory is compiled with static builds and the client of dynamic builds. This can contain any extra files you want on the client-side. &lt;strong&gt;Particularly images for use within your documentation.&lt;/strong&gt;&lt;/p&gt;\n&lt;h3 id=&quot;styles&quot;&gt;styles/&lt;/h3&gt;\n&lt;p&gt;This directory is similar to the public directory, but should contain any extra custom CSS files you wish to have on the clientside.&lt;/p&gt;\n&lt;a href=&quot;&quot; onclick=&quot;handleRequestFile(&#39;/content/Get%20Started/Setting%20up%20extrusive.config.json.html&#39;);&quot;&gt;\nThese files must be imported through your &lt;code&gt;extrusive.config.json&lt;/code&gt;\n&lt;/a&gt;\n&lt;br/&gt;\n\n&lt;p&gt;An initial &lt;code&gt;custom.css&lt;/code&gt; file is included and already set up to be imported for your use. This file can be safely deleted if unnecessary for your use-case.&lt;/p&gt;\n&lt;h2 id=&quot;what-to-do-next&quot;&gt;What to do next&lt;/h2&gt;\n&lt;ol&gt;\n&lt;li&gt;&lt;a href=&quot;&quot; onclick=&quot;handleRequestFile(&#39;/content/Get%20Started/Setting%20up%20extrusive.config.json.html&#39;)&quot;&gt;Configure your &lt;code&gt;extrusive.config.json&lt;/code&gt; file.&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;Add more content.&lt;/li&gt;\n&lt;li&gt;Create custom CSS.&lt;/li&gt;\n&lt;li&gt;&lt;a href=&quot;&quot; onclick=&quot;handleRequestFile(&#39;/content/More%20Info/Features.html&#39;)&quot;&gt;Look over additional features.&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;strong&gt;Compile your app!&lt;/strong&gt;&lt;/li&gt;\n&lt;/ol&gt;\n&lt;h2 id=&quot;compiling-your-app&quot;&gt;Compiling your app&lt;/h2&gt;\n&lt;p&gt;Once you are satisfied with your documentation&amp;#39;s configuration and content, you can build it for the web easily!&lt;/p&gt;\n&lt;p&gt;If you are looking to have a dynamic &lt;a href=&quot;https://expressjs.com/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferer&quot;&gt;express&lt;/a&gt;-based server, keep reading. Otherwise, skip to &lt;a href=&quot;#building-in-static-mode&quot;&gt;&amp;quot;Building in static mode.&amp;quot;&lt;/a&gt;&lt;/p&gt;\n&lt;h3 id=&quot;building-in-dynamic-mode-recommended&quot;&gt;Building in dynamic mode (recommended)&lt;/h3&gt;\n&lt;p&gt;To start the build process, simply point your terminal to the root of your project directory and run:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npx nodemon build\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;Or, if you would like to specify a sub-directory, run:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npx extrusive build --output-directory &amp;lt;output-directory&amp;gt;\n&lt;/code&gt;&lt;/pre&gt;&lt;p style=&quot;font-size: 0.75rem; color: var(--background-3);&quot;&gt;Tip: the &lt;code&gt;--force&lt;/code&gt; option will force the directory to be created, even if it overrides existing files. (WARNING: This is destructive!) &lt;/p&gt;\n\n&lt;p&gt;This will create a &lt;code&gt;build&lt;/code&gt; (or your specified output) directory. The build directory comes with a &lt;code&gt;server.js&lt;/code&gt; file, which is your app&amp;#39;s starting point.&lt;/p&gt;\n&lt;p&gt;First, configure your host port in the build folder&amp;#39;s &lt;code&gt;.env&lt;/code&gt;:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-env&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;env&lt;/span&gt;PORT=&amp;lt;port&amp;gt; # Default &amp;quot;3000&amp;quot;\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;Then, either use the &lt;code&gt;npm dev&lt;/code&gt;/&lt;code&gt;npm start&lt;/code&gt; commands to spin up the server, or, from a terminal in the build directory, run:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npm i\nnode server.js\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;The server will start up and indicate where it is listening. (usually &lt;a href=&quot;http://localhost:3000/&quot;&gt;localhost:3000&lt;/a&gt;)&lt;/p&gt;\n&lt;p&gt;Open up that link in your browser and you&amp;#39;re all set! 🎉&lt;/p&gt;\n&lt;h3 id=&quot;building-in-static-mode&quot;&gt;Building in static mode&lt;/h3&gt;\n&lt;p&gt;If you would prefer to have a static, standalone site, &lt;strong&gt;extrusive.md&lt;/strong&gt; supports that to! While static deployments have benefits, like free hosting on &lt;a href=&quot;https://pages.github.com/&quot;&gt;Github Pages&lt;/a&gt;, as well as all the features of dynamic deployments, they have a much larger client footprint, and may experience poor performance with larger numbers of documentation files.&lt;/p&gt;\n&lt;p&gt;Basically, you should only use static mode &lt;em&gt;if you have to.&lt;/em&gt;&lt;/p&gt;\n&lt;p&gt;Compiling in static mode is almost identical to compiling in dynamic mode, all you need to do is indicate to the compiler that you want a static site.&lt;/p&gt;\n&lt;p&gt;Point your terminal at the root of your project directory and run:&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-terminal&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;terminal&lt;/span&gt;npx extrusive build --static\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;Just as with dynamic mode, you can pick a specific output directory, (&lt;code&gt;--output-directory &amp;lt;output-directory&amp;gt;&lt;/code&gt;) and &lt;strong&gt;destructively&lt;/strong&gt; force an overwrite of existing build files. (&lt;code&gt;--force&lt;/code&gt;)&lt;/p&gt;\n&lt;p&gt;Upload your build folder wherever you like, or open the &lt;code&gt;index.html&lt;/code&gt; file locally. Your static documentation is ready! 🎉&lt;/p&gt;\n","/content/Get Started/Setting up extrusive.config.json.html":"&lt;h1 id=&quot;setting-up-extrusiveconfigjson&quot;&gt;Setting up &lt;code&gt;extrusive.config.json&lt;/code&gt;&lt;/h1&gt;\n&lt;p&gt;After &lt;a href=&quot;&quot; onclick=&quot;handleRequestFile(&#39;/content/Get%20Started/Quick%20Start.html&#39;)&quot;&gt;building your app&lt;/a&gt;, you can find an &lt;code&gt;extrusive.config.json&lt;/code&gt; file in the root directory.&lt;/p&gt;\n&lt;p&gt;This page will give you a comprehensive overview of the configuration file and possible options therein.&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-json&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;json&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;{&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;title&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;my extrusive app&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;,&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;author&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;Anonymous&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;,&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;description&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;Website built with extrusive.md! https://github.com/NotTimTam/extrusive.md&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;,&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;favicon&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;./public/favicon.svg&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;,&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;styles&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-punctuation&quot;&gt;[&lt;/span&gt;&lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;./styles/custom.css&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;]&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;,&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;copyright&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;© 2023 Anonymous&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;,&lt;/span&gt;\n    &lt;span class=&quot;hljs-attr&quot;&gt;&amp;quot;logo&amp;quot;&lt;/span&gt;&lt;span class=&quot;hljs-punctuation&quot;&gt;:&lt;/span&gt; &lt;span class=&quot;hljs-string&quot;&gt;&amp;quot;&amp;lt;ion-icon name=\\&amp;quot;code-slash-outline\\&amp;quot; size=\\&amp;quot;large\\&amp;quot;&amp;gt;&amp;lt;/ion-icon&amp;gt; &amp;lt;b&amp;gt;MY EXTRUSIVE APP&amp;lt;/b&amp;gt;&amp;quot;&lt;/span&gt;\n&lt;span class=&quot;hljs-punctuation&quot;&gt;}&lt;/span&gt;\n&lt;/code&gt;&lt;/pre&gt;&lt;h2 id=&quot;the-structure-of-extrusiveconfigjson&quot;&gt;The structure of &lt;code&gt;extrusive.config.json&lt;/code&gt;&lt;/h2&gt;\n&lt;table&gt;\n&lt;thead&gt;\n&lt;tr&gt;\n&lt;th&gt;Key&lt;/th&gt;\n&lt;th&gt;Type&lt;/th&gt;\n&lt;th&gt;Description&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;\n&lt;tbody&gt;&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;title&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;string&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;The title of the app. Used for metadata and &lt;code&gt;package.json&lt;/code&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;author&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;string&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;The app&amp;#39;s author. Used for metadata and &lt;code&gt;package.json&lt;/code&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;description&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;string&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;The app&amp;#39;s description. Used for metadata and &lt;code&gt;package.json&lt;/code&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;favicon&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;path&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;The path to the app&amp;#39;s favicon image. Should be a relative path to the public folder. (ie. &lt;code&gt;./public/favicon.ico&lt;/code&gt;)&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;styles&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;Array&amp;lt;path&amp;gt;&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;An array of absolute paths to custom CSS files. Should be a relative path to the styles folder. (e.g., &lt;code&gt;./styles/custom.css&lt;/code&gt;)&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;copyright&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;string&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;Copyright information to put in the app&amp;#39;s footer. Can also, ineffectively, be used to display other HTML code in that space.&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;logo&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;string&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;The logo data to place in the page header. Can be a string or &lt;strong&gt;more complex html&lt;/strong&gt;, like the default.&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;disableFooter&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;boolean&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;Setting this value to &lt;code&gt;true&lt;/code&gt; will stop the compiler from adding a footer to the DOM at all.&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;code&gt;appendBody&lt;/code&gt;/&lt;code&gt;appendHead&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;&lt;code&gt;string&lt;/code&gt;&lt;/td&gt;\n&lt;td&gt;Any additional content to add to the DOM. Appended to the end of the &lt;code&gt;&amp;lt;body/&amp;gt;&lt;/code&gt;/&lt;code&gt;&amp;lt;head/&amp;gt;&lt;/code&gt; tags respectively. Useful for importing custom scripts from the public folder, adding extra metadata, and more!&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n","/content/More Info/Features.html":"&lt;h1 id=&quot;features&quot;&gt;Features&lt;/h1&gt;\n&lt;p&gt;&lt;strong&gt;extrusive.md&lt;/strong&gt; is and always will be &lt;strong&gt;100% free and open-source&lt;/strong&gt;.&lt;/p&gt;\n&lt;p&gt;The CLI is a &lt;strong&gt;simple interface&lt;/strong&gt; that requires almost no set-up work.&lt;/p&gt;\n&lt;p&gt;&lt;strong&gt;extrusive.md&lt;/strong&gt; compiles your documentation with a &lt;strong&gt;mobile-first design&lt;/strong&gt; model that took inspiration from other &lt;a href=&quot;https://react.dev/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer noopener&quot;&gt;modern documentation websites&lt;/a&gt;.&lt;/p&gt;\n&lt;h2 id=&quot;custom-styles-and-scripts&quot;&gt;Custom styles and scripts&lt;/h2&gt;\n&lt;p&gt;&lt;strong&gt;extrusive.md&lt;/strong&gt; has built-in support for unlimited custom CSS and JavaScript files, allowing you to modify its design and extend its functionality.&lt;/p&gt;\n&lt;h2 id=&quot;dark-mode&quot;&gt;Dark mode&lt;/h2&gt;\n&lt;p&gt;Device-theme detecting light/dark mode and a manual toggle between the themes is easily accessible by users.&lt;/p&gt;\n&lt;h2 id=&quot;beautiful-icons-and-html&quot;&gt;Beautiful icons and HTML&lt;/h2&gt;\n&lt;p&gt;&lt;strong&gt;extrusive.md&lt;/strong&gt; has O.O.T.B. support for &lt;a href=&quot;https://ionic.io/ionicons&quot; target=&quot;_blank&quot; rel=&quot;noreferrer noopener&quot;&gt;ion-icons&lt;/a&gt;, a massive, open-source icon library.&lt;/p&gt;\n&lt;p&gt;You can include as much custom HTML, directly in your markdown, as you want! (this site is full of it)&lt;/p&gt;\n&lt;h2 id=&quot;pdfs-and-printing&quot;&gt;PDFs and printing&lt;/h2&gt;\n&lt;p&gt;A quick button and keyboard shortcuts allow users to instantly print your documentation with the same beautiful styling they see on the page.&lt;/p&gt;\n&lt;h2 id=&quot;self-deployement-in-seconds&quot;&gt;Self-deployement in seconds&lt;/h2&gt;\n&lt;p&gt;&lt;strong&gt;extrusive.md&lt;/strong&gt; can be deployed as an &lt;a href=&quot;https://expressjs.com/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferer&quot;&gt;express&lt;/a&gt; server, or a static site.&lt;/p&gt;\n&lt;p&gt;With just one command, the CLI will compile a fully functional app for you in seconds!&lt;/p&gt;\n&lt;h2 id=&quot;internal-linking&quot;&gt;Internal linking&lt;/h2&gt;\n&lt;p&gt;To create a &lt;em&gt;regular&lt;/em&gt; link, enclose the link text in brackets (e.g., &lt;code&gt;[example text]&lt;/code&gt;) and then follow it immediately with the URL in parentheses (e.g., (&lt;code&gt;https://www.example.com&lt;/code&gt;)).&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-markdown&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;markdown&lt;/span&gt;My favorite example domain is [&lt;span class=&quot;hljs-string&quot;&gt;example.com&lt;/span&gt;](&lt;span class=&quot;hljs-link&quot;&gt;https://example.com&lt;/span&gt;).\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;To link to another page within your documentation, simply add an &lt;code&gt;!&lt;/code&gt; before the relative path to the document. &lt;strong&gt;Make sure to include &lt;code&gt;%20&lt;/code&gt; instead of spaces in any paths you create!&lt;/strong&gt;&lt;/p&gt;\n&lt;pre&gt;&lt;code class=&quot;hljs language-markdown&quot;&gt;&lt;span class=&quot;label&quot; onclick=&quot;handleCopyCode(this)&quot;&gt;markdown&lt;/span&gt;Check out my other article: [&lt;span class=&quot;hljs-string&quot;&gt;other-article&lt;/span&gt;](&lt;span class=&quot;hljs-link&quot;&gt;!/content/Other%20Folder/Other%20File.html&lt;/span&gt;)\n&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;Including &lt;code&gt;/content&lt;/code&gt; at the start of the path, and &lt;code&gt;.html&lt;/code&gt; at the end works best, but links will work without them. (e.g., &lt;code&gt;(!/Other%20Folder/Other%20File)&lt;/code&gt;)&lt;/p&gt;\n&lt;h2 id=&quot;document-searching&quot;&gt;Document searching&lt;/h2&gt;\n&lt;p&gt;&lt;strong&gt;extrusive.md&lt;/strong&gt; comes packed with a built-in powerful search bar that remembers user&amp;#39;s searches.&lt;/p&gt;\n&lt;p&gt;The compiler auto-indexes your documentation and builds search results for you, so that you can focus on content.&lt;/p&gt;\n&lt;h2 id=&quot;what-next&quot;&gt;What next?&lt;/h2&gt;\n&lt;p&gt;Learn how to use all these features and more &lt;a href=&quot;&quot; title=&quot;null&quot; onclick=&quot;handleRequestFile(&#39;/content/Get%20Started/Quick%20Start.html&#39;)&quot;&gt;here&lt;/a&gt;!&lt;/p&gt;\n","/content/README.html":"&lt;div style=&quot;margin: 5rem 0 !important;&quot;&gt;\n&lt;div style=&quot;width: 6rem; height: 6rem; margin: 0 auto; margin-top: 6rem;&quot;&gt;\n    &lt;ion-icon name=&quot;terminal&quot; style=&quot;width: 100%; height: 100%;&quot;&gt;&lt;/ion-icon&gt;\n&lt;/div&gt;\n\n&lt;h1 style=&quot;text-align: center;&quot;&gt;extrusive.md&lt;/h1&gt;\n&lt;h3 style=&quot;text-align: center;&quot;&gt;Open-source &lt;ion-icon name=&quot;logo-markdown&quot; style=&quot;display: inline-block; vertical-align: bottom;&quot;&gt;&lt;/ion-icon&gt;-based documentation for the 🌎!&lt;/h3&gt;\n\n&lt;div style=&quot;display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; gap: .5rem; width: 100%;&quot;&gt;\n&lt;button class=&quot;input-button em&quot; onclick=&quot;handleRequestFile(&#39;/content/Get%20Started/Quick%20Start.html&#39;)&quot;&gt;Get Started&lt;/button&gt;\n&lt;button class=&quot;input-button&quot; onclick=&quot;window.open(&#39;https://github.com/NotTimTam/extrusive.md&#39;, &#39;_blank&#39;);&quot;&gt;&lt;ion-icon name=&quot;logo-github&quot;&gt;&lt;/ion-icon&gt; Repository&lt;/button&gt;\n&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;hr&gt;\n&lt;p style=&quot;text-align: center; margin-bottom: 8rem;&quot;&gt;&lt;a href=&quot;https://obsidian.md/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer noopener&quot;&gt;Obsidian&lt;/a&gt; is an &lt;b&gt;&quot;extrusive&quot;&lt;/b&gt; rock, which means it is made from magma that erupted out of a volcano.\n&lt;/p&gt;\n\n&lt;p style=&quot;text-align: center;&quot;&gt;\n&lt;b&gt;There are many options out there for markdown documentation tools.&lt;/b&gt;\n&lt;/p&gt;\n\n&lt;h3 style=&quot;text-align: center; margin-top: 0;&quot;&gt;&lt;b&gt;extrusive.md&lt;/b&gt; fills the niche that none of these do.&lt;/h3&gt;\n\n&lt;p&gt;&lt;button class=&quot;input-button em&quot; onclick=&quot;handleRequestFile(&#39;/content/More%20Info/Features.html&#39;)&quot; style=&quot;margin: 1rem auto !important;&quot;&gt;Explore Features&lt;/button&gt;&lt;/p&gt;\n"};