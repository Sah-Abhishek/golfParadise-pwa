// generate-sitemap.js
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const BASE_URL = 'https://paradisegolfcard.com'; // Replace this with your real production domain

// Add all the static routes of your React app
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'yearly', priority: 0.8 },
  { url: '/contact', changefreq: 'yearly', priority: 0.7 },
  { url: '/pricing', changefreq: 'yearly', priority: 0.6 },
  // Add more routes here as needed
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream('./public/sitemap.xml');

// Write all the URLs to the sitemap
links.forEach(link => sitemapStream.write(link));
sitemapStream.end();

// Pipe the sitemap to the file and log success
sitemapStream.pipe(writeStream).on('finish', () => {
  console.log('✅ sitemap.xml successfully written to public/sitemap.xml');
});
