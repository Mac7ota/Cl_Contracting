
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4196, hash: '5b4c575bb35fd91222f693dac8af8da963b8781cd25f36018496d80cb10ff3d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1973, hash: 'f399f4293e16510221a24a891280a0f7a55f7eea8829cdd883b2c704265c9322', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-JUGAZ4YJ.css', {size: 267531, hash: 'm/SfHTKgVic', text: () => import('./assets-chunks/styles-JUGAZ4YJ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
