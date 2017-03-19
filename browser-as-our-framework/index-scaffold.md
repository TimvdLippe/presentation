```html
<!doctype html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta name="description" content="AreaFiftyLAN gaming event">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AreaFiftyLAN - Gaming Event</title>

  <..>

  <style>
    body {
      background: #fafafa;
      font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #333;
      background-color: #eeecec;
      margin: 0;
    }

    .placeholder-header {
      height: 64px;
      background-color: #1a2b43;
    }

    .placeholder-slider {
      height: 500px;
    }
  </style>

  <script>
    window.Polymer = {
      lazyRegister: true,
      dom: 'shadow'
    };

    // Load webcomponentsjs polyfill if browser does not support native
    // Web Components
    (function() {
      'use strict';
      var onload = function() {
        // For native Imports, manually fire WebComponentsReady so user code
        // can use the same code path for native and polyfill'd imports.
        if (!window.HTMLImports) {
          document.dispatchEvent(
            new CustomEvent('WebComponentsReady', {bubbles: true})
          );
        }
      };
      var webComponentsSupported = (
        'registerElement' in document &&
        'import' in document.createElement('link') &&
        'content' in document.createElement('template')
      );
      if (!webComponentsSupported) {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
        script.onload = onload;
        document.head.appendChild(script);
      } else {
        onload();
      }
    })();
  </script>

  <link rel="import" href="src/lancie-app.html" async />
</head>

<body class="fullbleed layout vertical">
  <lancie-app>
    <div class="placeholder-header"></div>
    <div class="placeholder-slider"></div>
  </lancie-app>
</body>

</html>
```
