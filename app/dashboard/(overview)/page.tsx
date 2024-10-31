import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { lusitana } from '../../ui/fonts';
import { Suspense } from 'react';
import CardWrapper from '../../ui/dashboard/cards';
import {
  RevenueChartSkeleton,
  InvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Overview',
};
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} md:text-2x1 mb-4 text-xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
