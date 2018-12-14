
const menuGlobal=[
    {
        id:'blog',
        pid:'0',
        name:'学无止境',
        icon:'blog',
        path: '/blog',
        component: () => import('../components/contents/BlogContent'),
    },
    {
        id:'diary',
        pid:'1',
        name:'个人日记',
        icon:'diary',
        path: '/diary',
        component: () => import('../components/contents/DiaryContent'),
    },  
    {
        id:'about',
        pid:'2',
        name:'关于我',
        icon:'about',
        path: '/about',
        component: () => import('../components/contents/AboutMe'),
    },
    {
        id:'blogcontent',
        pid:'3',
        name:'关于我',
        icon:'blog',
        path: '/blog/content/:id',
        component: () => import('../components/blog/BlogContent'),
    },
  ];
  
export default {
    menuGlobal
}