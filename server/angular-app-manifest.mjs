
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4196, hash: 'a6d45c85706a0673facbb6afa06de7bdded2d98d57bc4d97f13b47de73557c6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1973, hash: 'f3fb382d66631108a33a8f8a476567d421704ad012c5fcd2c5e2088636c9780d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-JUGAZ4YJ.css', {size: 267531, hash: 'm/SfHTKgVic', text: () => import('./assets-chunks/styles-JUGAZ4YJ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
