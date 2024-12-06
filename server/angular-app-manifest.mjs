
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4247, hash: 'aa56f5f2e49846e16fd42a4e3bad4a6cf7d488696293717e6741378a25fb374b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 2024, hash: 'c5dc9b38dee44e577d373f9da5c3e89d51206f87e62da82b5943cbd34f8a6bee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-25KOCFMG.css', {size: 278602, hash: 'R7s08R9gdJk', text: () => import('./assets-chunks/styles-25KOCFMG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
