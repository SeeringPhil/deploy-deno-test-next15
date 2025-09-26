import React from 'react';
import { notFound } from 'next/navigation';
import ReservationContent from '../../components/ReservationContent';
import reservationsData from '../../../data/reservations.json';

interface ReservationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return reservationsData.map((reservation) => ({
    slug: reservation.slug,
  }));
}

export default function ReservationPage({ params }: ReservationPageProps) {
  const reservation = reservationsData.find(res => res.slug === await params.slug);

  if (!reservation) {
    notFound();
  }

  return <ReservationContent reservation={reservation} />;
}