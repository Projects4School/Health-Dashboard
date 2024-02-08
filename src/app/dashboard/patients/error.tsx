'use client';
 
import { Button } from '@/app/ui/button';
import { useEffect } from 'react';
 
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);
    
    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center">Something went wrong!</h2>
            <button
                className="mt-4 rounded-xl bg-secondary px-4 py-2 text-xl transition-all hover:bg-opacity-80 outline-primary"
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    );
}