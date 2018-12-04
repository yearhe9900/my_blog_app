
const menuGlobal=[
    {
        id:'acc',
        pid:'0',
        name:'acc页',
        icon:'user',
        path: '/',
        component: () => import('../routes/App'),
    }, 
    {
        id:'aaa',
        pid:'1',
        name:'aaa页',
        icon:'user',
        path: '/aaa',
        models: () => [import('../models/aaa')], //models可多个
        component: () => import('../routes/AAA'),
    }, 
    {
        id:'bbb',
        pid:'2',
        name:'bbb页',
        icon:'user',
        path: '/aaa/bbb',
        models: () => [import('../models/bbb')], //models可多个
        component: () => import('../routes/BBB'),
    }, 
    {
        id:'ccc',
        pid:'3',
        name:'ccc页',
        icon:'user',
        path: '/ccc',
        models: () => [import('../models/ccc')], //models可多个
        component: () => import('../routes/CCC'),
    }, 
  ];
  
export default {
    menuGlobal
}