
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4247, hash: '75610d4ab127007f05b8e5181304f9e6843d934c8d6ecda7656eed0e8135d4d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 2024, hash: '89dec1a2f7cfed9f8799a18791f459131853b6b92dd5df331105470109fe0335', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-25KOCFMG.css', {size: 278602, hash: 'R7s08R9gdJk', text: () => import('./assets-chunks/styles-25KOCFMG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
