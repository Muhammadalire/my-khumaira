// components/AudioPlayer.tsx
"use client";

import { useRef, useEffect } from "react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Function to play audio
    const playAudio = () => {
      audio.play().catch(error => {
        // Log errors if autoplay is prevented
        console.error("Audio play prevented:", error);
      });
    };

    // This is the "on touch" or "on click" handler
    const handleFirstInteraction = () => {
      // We only want this to run once
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      
      playAudio();
    };

    // Add event listeners for the first user interaction
    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    // Cleanup function to remove listeners
    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []); // Empty array ensures this runs only once on mount

  return (
    // The <audio> element
    // - `loop` handles the "repeat on ends"
    // - `ref` connects it to our React logic
    // - No `controls` attribute, so it's invisible
    <audio ref={audioRef} loop src="/Beautiful_As_You.mp3">
      Your browser does not support the audio element.
    </audio>
  );
}