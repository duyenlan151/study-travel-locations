'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { emailValidation } from '@/utils/validation';

import { Button, Input } from '../ui';

type NewsletterFormData = {
  email: string;
};

const navQuickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/explore', label: 'Explore' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function MainFooter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    // eslint-disable-next-line no-console
    console.log('Form data:', data);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 w-full bg-background">
      <div className="container py-12 2xl:py-24 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold font-poppins text-primary">
            StudySpots
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Find your ideal place to study, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navQuickLinks.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="/facebook">
              <Facebook className="hover:text-indigo-400" />
            </Link>
            <Link href="/instagram">
              <Instagram className="hover:text-pink-400" />
            </Link>
            <Link href="/twitter">
              <Twitter className="hover:text-blue-400" />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3">Stay Updated</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <Input<NewsletterFormData>
              id="email"
              type="email"
              required
              errors={errors}
              register={register}
              validation={emailValidation({ required: true })}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none mb-1"
            />
            <Button label="Subscribe" type="submit" isLoading={isSubmitting} />
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              ©{currentYear} StudySpots. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <p className="text-sm text-muted-foreground">Duyen Vu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
