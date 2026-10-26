import { dev } from 'astro';

console.log('Starting Astro dev server on all network interfaces...');
try {
  const server = await dev({
    root: '.',
    host: true, // Listen on all network addresses (0.0.0.0)
    port: 4321,
  });
  console.log('Astro dev server is running on local network: http://192.168.0.101:4321');
} catch (err) {
  console.error('Failed to start Astro dev server:', err);
}
