import SignIn from '@/views/pages/SignIn.vue';
import SignUp from '@/views/pages/SignUp.vue';
import Otp from '@/views/pages/Otp.vue';

const authRouter = [{
  path: '/signin',
  name: 'signin',
  component: SignIn,
  redirect: {
    name: 'signin',
  },
  meta: {
    isVisible: false,
  },
},
{
  path: '/signup',
  name: 'signup',
  component: SignUp,
  redirect: {
    name: 'login',
  },
  meta: {
    isVisible: false,
  },
},
{
  path: '/otp',
  name: 'otp',
  component: Otp,
  redirect: {
    name: 'otp',
  },
  meta: {
    isVisible: false,
  },
},
];

export default authRouter;
