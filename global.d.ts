// global.d.ts
declare global {
  interface Window {
    dataLayer: Array<{ [key: string]: any }>; // Adjust this type if you know the specific structure
  }
}

// This export makes the file a module, which is necessary for TypeScript to recognize it.
export {};
