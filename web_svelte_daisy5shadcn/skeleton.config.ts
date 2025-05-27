import { skeleton } from '@skeletonlabs/skeleton/vite';

export default {
  preprocess: [
    skeleton({
      prefix: 'sk-' // 👈 THIS activates the sk- prefix
    })
  ]
};