export async function handle({ event, resolve }) {
    console.log('*******************Incoming request:', event.url.pathname); // Log the request path
    return resolve(event);
  }