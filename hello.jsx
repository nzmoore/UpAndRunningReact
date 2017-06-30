<html>
  <head>
    <meta charset="utf-8"></meta>
    <title>Hello React JSX</title>
  </head>
  <body>
    <div id="app">
      // my app renders here
    </div>
    <script src="react/build/react.js" ></script>
    <script src="react/build/react-dom.js" ></script>
    <script src="babel/browser.js" ></script>
    <script type="text/babel">
      // my apps code
      ReactDOM.render (
      <h1 id = "my-heading">
          Hello World with JSX
      </h1>,
        document.getElementById('app')
      );
    </script>
  </body>
</html>
