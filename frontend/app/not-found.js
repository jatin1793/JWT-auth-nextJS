"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(()=>{
    setTimeout(() => {
        router.push("./")
    }, 3000);
  })

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for does not exist.
        <h2>Redirecting to previous route.........</h2>
      </p>
    </div>
  );
};

export default NotFoundPage;
