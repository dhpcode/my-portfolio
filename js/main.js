
const elSiteHeader = document.querySelector('.site-header');
const elSitenav = elSiteHeader.querySelector('.sitenav');
const elSiteHeaderToggler = elSiteHeader.querySelector('.site-header__toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', () => {
    elSiteHeader.classList.toggle('site-header--open');
  })
}
