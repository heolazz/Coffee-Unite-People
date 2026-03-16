import { Event } from './types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Sabtu Pagi Espresso & Coding',
    date: 'SAB, 22 MAR',
    time: '10:00 WIB',
    location: 'Titik Temu Coffee, Senopati',
    category: 'Teknologi',
    attendees: 12,
    imageUrl: '/coffee-shop/titik-temu-coffee.jpg',
    host: 'Aris Setiawan'
  },
  {
    id: '2',
    title: 'Workshop Latte Art Pemula',
    date: 'MIN, 23 MAR',
    time: '14:00 WIB',
    location: 'Jacob Koffie Huis, Depok',
    category: 'Workshop',
    attendees: 25,
    imageUrl: '/coffee-shop/jacob-koffie-huis.jpg',
    host: 'Dinda Kirana'
  },
  {
    id: '3',
    title: 'Networking Freelancer Kreatif',
    date: 'SEN, 24 MAR',
    time: '09:00 WIB',
    location: 'Kopi Kotak, Margonda',
    category: 'Bisnis',
    attendees: 8,
    imageUrl: '/coffee-shop/kopi-kotak-margonda.webp',
    host: 'Raka Pratama'
  },
  {
    id: '4',
    title: 'Klub Buku: Klasik & Cappuccino',
    date: 'RAB, 26 MAR',
    time: '18:30 WIB',
    location: 'Kylau Common Space, Jakarta',
    category: 'Budaya',
    attendees: 15,
    imageUrl: '/coffee-shop/kylau-common-space.jpg',
    host: 'Siska Amelia'
  }
];