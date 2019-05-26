import Button from '../../atoms/Button';
import Home from '../../pages/Home';
import Resume from '../../pages/Resume';
import Blogs from '../../pages/Blogs';

export default [
  {
    id: 'home',
    renderer: Button,
    route: '/',
    label: 'Me',
    routeComponent: Home,
    rendererProps: {
      ghost: true,
      type: 'link',
    },
  },
  {
    id: 'resume',
    renderer: Button,
    route: '/resume',
    label: 'Resume',
    routeComponent: Resume,
    rendererProps: {
      ghost: true,
      type: 'link',
    },
  },
  {
    id: 'blogs',
    renderer: Button,
    route: '/blogs',
    label: 'Blogs',
    routeComponent: Blogs,
    rendererProps: {
      ghost: true,
      type: 'link',
    },
  },
];
