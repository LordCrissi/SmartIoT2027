const smartIoTSponsors = [
  { name: 'IEEE', logo: 'assets/sponsors/ieee.png', url: 'https://www.ieee.org/' },
  { name: 'IEEE Computer Society', logo: 'assets/sponsors/ieee.png', url: 'https://www.computer.org/' }
];

const sponsorSection = document.createElement('section');
sponsorSection.className = `sponsors-section${document.querySelector('.inner-main') ? ' sponsors-compact' : ''}`;
sponsorSection.innerHTML = `
  <div class="sponsors-heading">
    <p class="section-kicker">SUPPORTED BY</p>
    <h2>Conference Sponsors</h2>
    <p>IEEE SmartIoT 2027 is sponsored by IEEE and the IEEE Computer Society.</p>
  </div>
  <div class="sponsors-grid">
    ${smartIoTSponsors.map(sponsor => `
      <a class="sponsor-card" href="${sponsor.url}" target="_blank" rel="noopener" title="${sponsor.name}">
        <span><img src="${sponsor.logo}" alt="${sponsor.name} logo" loading="lazy"></span>
        <strong>${sponsor.name}</strong>
      </a>`).join('')}
  </div>`;

const footer = document.querySelector('footer');
const closingCTA = document.querySelector('.closing-cta');
if (closingCTA) closingCTA.before(sponsorSection);
else if (footer) footer.before(sponsorSection);
