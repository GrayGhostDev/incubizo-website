/**
 * HTMX Utility Functions
 * 
 * This file contains utility functions for working with HTMX in a Next.js application.
 */

/**
 * Initializes HTMX on the client side
 * This function should be called in a useEffect hook in client components
 */
export function initializeHtmx(): void {
  // Make sure we're in the browser environment
  if (typeof window === 'undefined') return;

  // Add custom CSS for HTMX indicators
  const style = document.createElement('style');
  style.textContent = `
    .htmx-indicator {
      opacity: 0;
      transition: opacity 200ms ease-in;
    }
    .htmx-request .htmx-indicator {
      opacity: 1;
    }
    .htmx-request.htmx-indicator {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  // Add global event listeners for HTMX events if needed
  document.body.addEventListener('htmx:beforeRequest', (event) => {
    console.log('HTMX request starting:', event);
  });

  document.body.addEventListener('htmx:afterRequest', (event) => {
    console.log('HTMX request completed:', event);
  });

  document.body.addEventListener('htmx:responseError', (event) => {
    console.error('HTMX response error:', event);
  });
}

/**
 * Creates an HTML response for HTMX requests
 * @param html The HTML content to return
 * @param status The HTTP status code (default: 200)
 * @returns Response object with HTML content
 */
export function htmxResponse(html: string, status = 200): Response {
  return new Response(html, {
    status,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

/**
 * Creates an error response for HTMX requests
 * @param message The error message
 * @param status The HTTP status code (default: 400)
 * @returns Response object with error HTML
 */
export function htmxErrorResponse(message: string, status = 400): Response {
  const html = `
    <div class="p-4 rounded-md bg-red-50 text-red-800">
      ${message}
    </div>
  `;
  
  return htmxResponse(html, status);
}

/**
 * Creates a success response for HTMX requests
 * @param message The success message
 * @returns Response object with success HTML
 */
export function htmxSuccessResponse(message: string): Response {
  const html = `
    <div class="p-4 rounded-md bg-green-50 text-green-800">
      ${message}
    </div>
  `;
  
  return htmxResponse(html);
} 