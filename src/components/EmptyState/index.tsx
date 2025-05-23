'use client';

import { useRouter } from 'next/navigation';

import { Button } from '../ui';

import Heading from './Heading';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  label?: string;
  reset?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
  label = 'Remove all filters',
  showReset,
  reset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div
        className="w-[22em] mt-4 flex
        flex-row
        gap-3 "
      >
        {showReset && (
          <Button
            variant="outline"
            label={label ?? 'Remove all filters'}
            onClick={() => reset && reset()}
          />
        )}
        <Button label="Go Back" onClick={() => router.push('/')} />
      </div>
    </div>
  );
};
