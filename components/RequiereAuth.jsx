import React from 'react';
import { useAppContext } from '../components/StateWarapper';
import { useRouter } from 'next/router';
const RequiereAuth = () => {
  const router = useRouter({ children });
  const { isLogin } = useAppContext();

  if (!isLogin) {
    return router.push('/login');
  }

  return children;
};

export default RequiereAuth;
