
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4171, hash: '95610d4af1d93f987241ca37b3c02d69ab737767e7916e3e35c2058c332546f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1948, hash: 'd142452fab0fb0054cf89560130c9526f503feb5194fa82c3bbe6845bcb8e455', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-JUGAZ4YJ.css', {size: 267531, hash: 'm/SfHTKgVic', text: () => import('./assets-chunks/styles-JUGAZ4YJ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
