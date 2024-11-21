
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 3243, hash: 'ddab985c9d0d729d30a2e33ad15010e3e2b4ef3e4781ade8989dd383e0b6a9a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1976, hash: 'f89ff5bf022b0d5cb2c8039c2062760fcefa629c4a6dbdaf264489652d42cd2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-IWXC3ISF.css', {size: 158850, hash: 'lYo0xiDvPiA', text: () => import('./assets-chunks/styles-IWXC3ISF_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
