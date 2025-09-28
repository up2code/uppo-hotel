import { useState, useCallback } from 'react';

interface UploadState {
  loading: boolean;
  error: string | null;
  progress: number;
  imageUrl: string | null;
}

interface UseUploadImageReturn extends UploadState {
  uploadImage: (file: File, endpoint?: string) => Promise<string | null>;
  reset: () => void;
}

export const useUploadImage = (): UseUploadImageReturn => {
  const [state, setState] = useState<UploadState>({
    loading: false,
    error: null,
    progress: 0,
    imageUrl: null,
  });

  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      progress: 0,
      imageUrl: null,
    });
  }, []);

  const uploadImage = useCallback(
    async (file: File, endpoint = '/api/images'): Promise<string | null> => {
      if (!file) {
        setState((prev) => ({ ...prev, error: 'No file provided' }));
        return null;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setState((prev) => ({ ...prev, error: 'File must be an image' }));
        return null;
      }

      setState((prev) => ({
        ...prev,
        loading: true,
        error: null,
        progress: 0,
      }));

      try {
        const formData = new FormData();
        formData.append('image', file);

        const xhr = new XMLHttpRequest();

        return new Promise((resolve, reject) => {
          xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
              const progress = Math.round((event.loaded * 100) / event.total);
              setState((prev) => ({ ...prev, progress }));
            }
          });

          xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                const response = JSON.parse(xhr.responseText);
                const imageUrl = response.url || response.imageUrl;

                setState((prev) => ({
                  ...prev,
                  loading: false,
                  imageUrl,
                  progress: 100,
                }));

                resolve(imageUrl);
              } catch {
                const errorMessage = 'Invalid response format';
                setState((prev) => ({
                  ...prev,
                  loading: false,
                  error: errorMessage,
                }));
                reject(new Error(errorMessage));
              }
            } else {
              const errorMessage = `Upload failed: ${xhr.statusText}`;
              setState((prev) => ({
                ...prev,
                loading: false,
                error: errorMessage,
              }));
              reject(new Error(errorMessage));
            }
          });

          xhr.addEventListener('error', () => {
            const errorMessage = 'Network error during upload';
            setState((prev) => ({
              ...prev,
              loading: false,
              error: errorMessage,
            }));
            reject(new Error(errorMessage));
          });

          xhr.open('POST', endpoint);
          xhr.send(formData);
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Upload failed';
        setState((prev) => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
        return null;
      }
    },
    [],
  );

  return {
    ...state,
    uploadImage,
    reset,
  };
};
