# WanderLux Travel Agency — ICT502 student project

## Project pages
This project contains six linked pages: Home (`index.html`), Destinations & Services (`destinations.html`), Trip Cost Calculator (`calculator.html`), Appointment Request (`appointment.html`), About Us (`about.html`) and Contact (`contact.html`). Shared styling is in `styles.css`; interactions are in `script.js`.

## Run locally
1. Extract the ZIP file into a folder.
2. Open the extracted folder.
3. Double-click `index.html` to open the home page in a browser.
4. Use the navigation menu to test all six pages.

An internet connection is needed for remote photographs, Google Fonts and the illustrative OpenStreetMap embed. The core pages and calculator work locally without a server.

## Features
- Responsive layout for desktop, tablet and mobile screens.
- Consistent navigation, semantic page structure, descriptive page titles and meta descriptions.
- Scroll reveal effects with a reduced-motion accessibility fallback.
- Rotating featured-destination caption on the home page.
- JavaScript trip cost calculator with input validation and illustrative AUD rates.
- Appointment and contact demonstration forms with browser validation and local confirmation.

## Important: demonstration forms
The contact and appointment forms are demo-only. They validate the entered fields and show a local confirmation, but they do not send email or store information. This is intentional because the agency is fictional and no real recipient address or form backend has been supplied. Do not describe these forms as delivering emails. A real deployment would require a verified recipient and a form backend such as Formspree or Netlify Forms, followed by end-to-end testing.

## Calculator model
Estimated total = (destination daily allowance + accommodation allowance) × travellers × days × travel-style multiplier. Multipliers: Budget 0.8, Standard 1.0, Luxury 1.65. Rates are illustrative and are not live travel quotes. Flights, visas, insurance and seasonal changes are excluded.

## Suggested test checklist
- Open each of the six HTML pages and test every navigation link.
- Resize the browser to desktop, tablet and mobile widths.
- Submit the calculator with valid values for every destination and travel style.
- Test calculator boundaries: 1 and 20 travellers; 1 and 60 days; also test invalid/blank inputs.
- Try blank and incorrectly formatted values in both forms.
- Confirm appointment dates in the past cannot be selected.
- Confirm the demo forms clearly state that no email is sent and no information is stored.
- Check keyboard focus and readable contrast.

## GitHub Pages deployment
Upload the contents of this folder (not just the ZIP) to the root of a public GitHub repository. In repository Settings > Pages, choose Deploy from a branch, select `main` and `/ (root)`, then Save. Wait for the Pages deployment to complete and test the published URL. Add the verified live URL to the report.

## Project authenticity
WanderLux is a fictional agency created for an educational demonstration. All agency details and cost rates are illustrative. Remote photographs are used for visual prototyping; review image licensing and attribution requirements before any commercial use.
