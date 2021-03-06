export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/blog' },
      // blog
      {
        path: '/blog',
        name: 'blog',
        component: './Blog/BlogList',
      },
      {
        path: '/blog-detail',
        name: 'blogdetail',
        component: './Blog/BlogDetail',
        hideInMenu: true,
      },
      // classification
      {
        path: '/about',
        name: 'aboutme',
      },
      {
        component: '404',
      },
    ],
  },
];
