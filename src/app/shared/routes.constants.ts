export const ROUTE_PATHS = {
  HOME: '',
  BOOKINGS: 'bookings',
  SERVICES: 'services',
  ABOUT: 'about',
} as const;

export const ROUTES = {
  HOME: ['/'],
  BOOKINGS: ['/', ROUTE_PATHS.BOOKINGS],
  SERVICES: ['/', ROUTE_PATHS.SERVICES],
  ABOUT: ['/', ROUTE_PATHS.ABOUT],
} as const;
