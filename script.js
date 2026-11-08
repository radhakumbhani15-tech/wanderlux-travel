'use strict';
const destinationRates = {
  Bali:{daily:110,stay:75}, Tokyo:{daily:165,stay:115}, Paris:{daily:190,stay:145},
  Sydney:{daily:155,stay:125}, Queenstown:{daily:175,stay:135}, Maldives:{daily:230,stay:190}
};
const travelMultipliers = {Budget:0.8, Standard:1, Luxury:1.65};

document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal animation, with a graceful fallback for older browsers.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  // Rotating featured destination caption on the home page.
  const featuredText = document.querySelector('#featured-text');
  if (featuredText) {
    const featured = ['Bali · Island escapes', 'Tokyo · Culture and cuisine', 'Queenstown · Mountain adventures'];
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % featured.length;
      featuredText.textContent = featured[index];
    }, 3500);
  }

  // Trip cost calculator. Estimates are illustrative AUD values, not live prices.
  const calculator = document.querySelector('#calculator');
  if (calculator) {
    calculator.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(calculator);
      const destination = data.get('destination');
      const travellers = Number(data.get('travellers'));
      const days = Number(data.get('days'));
      const style = data.get('style');
      const output = document.querySelector('#estimate');

      if (!destinationRates[destination] || !Number.isInteger(travellers) ||
          travellers < 1 || travellers > 20 || !Number.isInteger(days) ||
          days < 1 || days > 60 || !travelMultipliers[style]) {
        output.innerHTML = '<p class="error">Please choose a destination and enter 1–20 travellers and 1–60 days.</p>';
        return;
      }
      const rate = destinationRates[destination];
      const total = Math.round((rate.daily + rate.stay) * travellers * days * travelMultipliers[style]);
      const money = new Intl.NumberFormat('en-AU', {style:'currency', currency:'AUD', maximumFractionDigits:0}).format(total);
      output.replaceChildren();
      const heading = document.createElement('h3');
      heading.textContent = `Estimated total: ${money}`;
      const summary = document.createElement('p');
      summary.textContent = `Estimated cost for ${travellers} traveller(s) to ${destination} for ${days} days — ${style} Travel Package.`;
      const note = document.createElement('p');
      note.className = 'notice';
      note.textContent = 'Illustrative AUD estimate only. It excludes flights, visas, insurance and seasonal price changes. No booking is made.';
      output.append(heading, summary, note);
    });
  }

  // Demonstration-only forms: validate and show a local confirmation.
  // They do not send or store personal information.
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Thank you. Your demonstration form has been completed successfully. No email has been sent and no information has been stored.';
        status.className = 'notice success';
      }
      form.reset();
    });
  });

  // Prevent appointment dates in the past.
  const dateInput = document.querySelector('#date');
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0,10);
    dateInput.min = localToday;
  }
});
