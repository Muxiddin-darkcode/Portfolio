import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sparkles, setSparkles] = useState<number[]>([]);

  useEffect(() => {
    setIsClient(true);

    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }

    // Listen for realtime updates from Firestore
    const likeDocRef = doc(db, "likes", "counter");
    const unsubscribe = onSnapshot(likeDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const currentLikes = docSnap.data().likes;
        setLikes(Math.max(0, currentLikes));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLike = async () => {
    if (isProcessing || isLiked) return;

    // Optimistic Update
    const previousLikes = likes;
    setLikes((prev) => prev + 1);
    setIsLiked(true);
    setSparkles([1, 2, 3, 4, 5, 6]);
    localStorage.setItem("websiteIsLiked", "true");

    setTimeout(() => setSparkles([]), 800);

    try {
      setIsProcessing(true);
      const likeDocRef = doc(db, "likes", "counter");
      await updateDoc(likeDocRef, {
        likes: increment(1),
      });
    } catch (error) {
      console.error("Error updating likes:", error);
      setLikes(previousLikes);
      setIsLiked(false);
      localStorage.removeItem("websiteIsLiked");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="relative flex items-center font-mono">
      <motion.button
        onClick={handleLike}
        disabled={isProcessing || isLiked}
        whileHover={!isLiked ? { scale: 1.06, y: -1 } : {}}
        whileTap={!isLiked ? { scale: 0.94 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`
          group relative h-9 flex items-center justify-center px-4 py-1.5
          rounded-xl border transition-all duration-300
          ${
            isLiked
              ? "border-orange-500 bg-orange-500/20 text-orange-400 shadow-[0_0_18px_rgba(255,107,0,0.4)] cursor-default"
              : "border-orange-500/30 hover:border-orange-400 hover:text-orange-300 bg-[#0c0c12]/90 hover:bg-orange-500/10 cursor-pointer shadow-md"
          }
        `}
      >
        {/* Animated Heart SVG */}
        <motion.svg
          animate={isLiked ? { scale: [1, 1.4, 1.1] } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 transition-colors duration-300 ${
            isLiked
              ? "text-orange-500 drop-shadow-[0_0_10px_#ff6b00]"
              : "text-slate-400 group-hover:text-orange-400"
          }`}
        >
          <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
        </motion.svg>

        <span className="text-xs pl-2 font-bold text-slate-200">
          {likes > 0 ? `${likes} Like` : "Like"}
        </span>
      </motion.button>

      {/* Burst Sparkles when liked */}
      <AnimatePresence>
        {sparkles.map((i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = Math.cos(angle) * 32;
          const y = Math.sin(angle) * 32;

          return (
            <motion.span
              key={i}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 1.5, x, y }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 pointer-events-none shadow-[0_0_8px_#ff6b00]"
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default LikeButton;
