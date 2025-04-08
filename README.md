# Appointment Booking SaaS

This project is a SaaS application for appointment booking, built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Services Feature

The application includes a services page that dynamically loads service data from Airtable. The services are displayed in a responsive grid layout with the following information:

- Thumbnail image
- Service name
- Description
- Price
- Buy Now button linking to Gumroad

## Environment Variables

To run this project, you need to set up the following environment variables:

- `PAT_TOKEN`: Your Airtable Personal Access Token
- `BASE_ID`: Your Airtable Base ID

Create a `.env.local` file in the root directory with these variables. A `.env.local.example` file is provided as a template.

## Airtable Setup

The services are stored in an Airtable base with the following configuration:

- Base Name: `AI Services Catalog`
- Table Name: `Services`
- Fields:
  - `Name` (text)
  - `Slug` (text)
  - `Description` (long text)
  - `Price` (number)
  - `Type` (single select: One-time / Subscription)
  - `Gumroad Link` (URL)
  - `Thumbnail` (Attachment - image)
  - `Active` (checkbox)

Only services with `Active` set to `true` are displayed on the website.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file with your Airtable credentials
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To build the application for production, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm start
``` 