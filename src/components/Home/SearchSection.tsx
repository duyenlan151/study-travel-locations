'use client';

import { useForm } from 'react-hook-form';
// import { useState } from 'react';
import { Search } from 'lucide-react';

import { Button, Input } from '@/components/ui';

export function SearchSection() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      email: '',
    },
  });

  return (
    <div className="mt-6 w-full flex flex-1">
      <div className="flex flex-col sm:flex-row w-full flex-1">
        {/* Input */}
        <div className="relative sm:w-4/6 border border-gray-300 dark:border-gray-700">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input<any>
            id="search"
            name="search"
            register={register}
            type="text"
            errors={errors}
            placeholder="Search for a study spot..."
            className="pl-10 h-11 w-full"
          />
        </div>

        {/* Dropdown */}
        <div className="mt-1 sm:mt-0 sm:w-1/6 border sm:border-l-0 border-gray-300 dark:border-gray-700">
          <select
            className="w-full h-11 px-4 text-sm dark:bg-gray-800 dark:text-white focus:outline-none rounded-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select location
            </option>
            <option value="vietnam">Vietnam</option>
            <option value="japan">Japan</option>
            <option value="korea">Korea</option>
            <option value="thailand">Thailand</option>
          </select>
        </div>

        {/* Button */}
        <div className="mt-1 sm:mt-0 sm:w-1/6 h-[46px]">
          <Button className="w-full h-full rounded-none" label="Search" />
        </div>
      </div>
    </div>
  );
}
