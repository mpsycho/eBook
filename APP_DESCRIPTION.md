# eBook - Appointment Booking Application

## Overview

eBook is a web-based appointment booking platform built with Angular 20 and TailwindCSS. The application allows users to manage bookings for various service-based businesses.

## Target Use Cases

- Hair salons
- Gyms
- Fitness classes
- Wellness centers
- Other appointment-based services

## Core Features

### Implemented

- **Home Page**: Landing page with hero section promoting the booking experience
- **Header Navigation**: Responsive navigation with desktop and mobile menu support
- **Routing**: Client-side routing between Home, Bookings, Services, and About pages

### Planned / In Progress

- **Service Catalog**: Browse available services (placeholder component exists)
- **Booking Calendar**: Schedule and manage appointments (placeholder component exists)
- **User Authentication**: Login functionality (UI placeholder exists)
- **Theming System**: Dynamic theming with Stencil (per TODO.md)

## Tech Stack

- **Framework**: Angular 20
- **Styling**: TailwindCSS 4 with TailwindPlus elements
- **Testing**: Karma + Jasmine
- **Build**: Angular CLI

## Application Structure

```
/src/app
├── components/
│   ├── home/           # Landing page
│   ├── header/         # Navigation header
│   ├── booking-calendar/ # Appointment scheduling
│   ├── service-catalog/  # Service listings
│   └── about/          # About page
├── app-routing-module.ts
└── app-module.ts
```

## Routes

| Path        | Component       | Description            |
|-------------|-----------------|------------------------|
| `/`         | Home            | Landing page           |
| `/bookings` | BookingCalendar | Appointment scheduling |
| `/services` | ServiceCatalog  | Service listings       |
| `/about`    | About           | About page             |

## Services

### Training

- Personal Training (1:1)
- Small Group Training
- Fitness Assessment / PT Intro

### Classes

- HIIT
- Strength / Conditioning
- Spin
- Yoga / Mobility
- Pilates

### Recovery & Wellness

- Sports Massage
- Stretch / Mobility Session
- Physiotherapy

### Facilities

- Sauna
- Steam Room
- Ice Bath / Cold Plunge

### Optional / Add-ons

- Nutrition Consultation
- Body Composition Scan
- Injury Check / Screening
