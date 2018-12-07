
const menuGlobal=[
    {
        id:'basiclayout',
        pid:'0',
        name:'一位不爱写代码的程序员',
        icon:'user',
        path: '/',
        component: () => import('../layouts/BasicLayout'),
    }, 
    {
        id:'aboutme',
        pid:'1',
        name:'关于我',
        icon:'user',
        path: '/aboutme',
        component: () => import('../components/contents/AboutMe'),
    }, 
  ];
  
export default {
    menuGlobal
}