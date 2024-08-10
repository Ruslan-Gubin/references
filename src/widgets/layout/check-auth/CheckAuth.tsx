'use client';
import { usePathname, useRouter,  } from "next/navigation";
import { useEffect } from "react";


const CheckAuth = () => {
  const router = useRouter();
  const patchname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return;

     const isLogin = !!window.localStorage.getItem('isLogin');

      if (!isLogin && patchname !== '/login') {
        router.push('/login');
      }
    
  },[patchname]);


  return (<></>);
};

export { CheckAuth };