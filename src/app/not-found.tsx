'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/EmptyState';

interface NotFoundStateProps {
  error: Error;
}

const NotFound: React.FC<NotFoundStateProps> = ({ error }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="🚧 Under Construction"
      subtitle="We're working hard to bring this page to life. Please check back later!"
      showReset
      label="Go back home"
    />
  );
};

export default NotFound;
