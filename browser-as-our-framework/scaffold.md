```html
<...>
    <div class="pages">
      <iron-lazy-pages id="pages" attr-for-selected="data-route" fallback-selection="404">
        <symposium-homepage data-route="" data-path="/2017/src/symposium-homepage.html"></symposium-homepage>
        <symposium-program data-route="program" data-path="/2017/src/symposium-program.html"></symposium-program>
        <div data-route="tickets" class="fast-path">
    <style>
      :host {
        display: block;
      }

      ... {}
    </style>

    <section>
      <h1>Tickets</h1>

      <div class="types">
        <label for="student">
          <span>Student</span>
          <span>€ 5</span>
          <input id="student" value="Student" type="radio" name="type">
        </label>
        <label for="alumni">
          <span>Alumni/TU Delft employee</span>
          <span>€ 25</span>
          <input id="alumni" value="Alumni/TU Delft employee" type="radio" name="type">
        </label>
        <label for="ngi-ngn">
          <span>Ngi-NGN employee</span>
          <span>€ 25</span>
          <input id="ngi-ngn" value="Ngi-NGN employee" type="radio" name="type">
        </label>
        <label for="external">
          <span>External</span>
          <span>€ 80</span>
          <input id="external" value="External" type="radio" name="type">
        </label>
      </div>

      <div class="field">
        <label><span>Full name:</span><input name="name" type="name"></label>
      </div>
      <div class="field">
        <label><span>Email:</span><input name="email" type="email"></label>
      </div>

      <symposium-tickets-button>
        <button disabled="">Buy!</button>
      </symposium-tickets-button>
      <div class="note">* External tickets receive an invoice within 1 week.</div>
    </section>

  </div>
<...>
```
