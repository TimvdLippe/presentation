```html
<link rel="import" href="../bower_components/app-route/app-location.html">
<link rel="import" href="../bower_components/app-route/app-route.html">
<link rel="import" href="../bower_components/iron-lazy-pages/iron-lazy-pages.html">

<link rel="import" href="../../bower_components/app-layout/app-header-layout/app-header-layout.html">
<link rel="import" href="../../bower_components/app-layout/app-header/app-header.html">
<link rel="import" href="../../bower_components/app-layout/app-drawer-layout/app-drawer-layout.html">
<link rel="import" href="../../bower_components/app-layout/app-drawer/app-drawer.html">
<link rel="import" href="../../bower_components/app-layout/app-toolbar/app-toolbar.html">

<link rel="import" href="../../bower_components/paper-tabs/paper-tabs.html">
<link rel="import" href="../../bower_components/paper-tabs/paper-tab.html">
<link rel="import" href="../../bower_components/paper-menu/paper-menu.html">
<link rel="import" href="../../bower_components/paper-item/paper-item.html">
<link rel="import" href="../../bower_components/paper-icon-button/paper-icon-button.html">
<link rel="import" href="../../bower_components/iron-icons/iron-icons.html">

<link rel="import" href="../../bower_components/app-layout/app-scroll-effects/app-scroll-effects.html">
<link rel="import" href="../../bower_components/iron-media-query/iron-media-query.html">
<link rel="import" href="../../bower_components/iron-flex-layout/iron-flex-layout-classes.html">

<link rel="import" href="lancie-footer/lancie-footer.html">

<dom-module id="lancie-app">
  <template>
    <app-drawer-layout force-narrow fullbleed>
      <app-drawer id="drawer">
        <app-toolbar></app-toolbar>

        <!-- Nav on mobile: side nav menu -->
        <paper-menu selected="{{route.page}}" attr-for-selected="data-route">
          <paper-item data-route="" on-tap="_closeDrawer"><a href="/">Home</a></paper-item>
        </paper-menu>
      </app-drawer>

      <app-header-layout fullbleed>
        <app-header fixed effects="waterfall">

          <!-- Nav on mobile: side nav menu -->
          <app-toolbar class="layout horizontal center-center">
            <paper-tabs selected="{{route.page}}" attr-for-selected="data-route" hidden$="{{!wideLayout}}">
              <paper-tab data-route="" link>
                <a href="/">Home</a>
              </paper-tab>
            </paper-tabs>

          </app-toolbar>
        </app-header>

        <app-location route="{{route}}"></app-location>
        <app-route route="{{route}}" pattern="/:page" data="{{page}}"></app-route>

        <iron-lazy-pages attr-for-selected="data-route" selected="[[_filterConstruction(page.page)]]" fallback-selection="404">
          <lancie-home-page data-route="" data-path="lancie-home-page/lancie-home-page.html"></lancie-home-page>

          <...>

          <lancie-404 data-route="404" data-path="lancie-404.html"></lancie-404>
        </iron-lazy-pages>
        <lancie-footer></lancie-footer>
      </app-header-layout>
    </app-drawer-layout>
  </template>
  <script>
  (function() {
    'use strict';

    Polymer({
      is: 'lancie-app'
    });
  })();
  </script>
</dom-module>
```
