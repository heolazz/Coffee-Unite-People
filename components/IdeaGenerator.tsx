"use client";

import React, { useState, useRef } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { generateEventIdea } from '../services/geminiService';
import { GeneratedIdea } from '../types';

export const IdeaGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [idea, setIdea] = useState<GeneratedIdea | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setIdea(null);
    try {
      // Mocking response for UI development if service fails or is not connected
      // In production, this would use the actual service
      const result = await generateEventIdea(topic);
      if (result) setIdea(result);
      else {
        // Fallback dummy for design showcase
        setTimeout(() => {
          setIdea({
            id: 'generated-1',
            title: `Sesi ${topic} Santai`,
            description: `Sebuah pertemuan akrab untuk para penggemar ${topic} di kafe yang tenang.`,
            suggestedActivities: ['Diskusi Terbuka', 'Sesi Sharing', 'Networking Santai'],
            category: 'Komunitas',
            suitableLocationType: 'Quiet Cafe',
            estimatedDuration: '2 Jam'
          });
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 relative">
      <div className="max-w-5xl mx-auto text-center">

        {/* Interactive Sentence Builder */}
        <div className="mb-16 px-4">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black flex flex-col md:block items-center">
            <span className="mb-2 md:mb-0">Saya ingin mengadakan</span>
            <span className="relative inline-block mx-2 text-black/30">
              acara
            </span>
            <span className="relative inline-block">
              <input
                ref={inputRef}
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="ngopi sore..."
                className="bg-transparent border-b-4 border-black/10 focus:border-black outline-none placeholder:text-black/20 text-black text-center min-w-[200px] md:min-w-[300px] w-auto transition-colors duration-300 max-w-[80vw] text-xl md:text-6xl lg:text-7xl p-0 font-bold"
                style={{ width: `${Math.max(topic.length, 10)}ch` }}
              />
              {!isFocused && !topic && (
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none text-black/20 border-b-4 border-black/10 flex items-center justify-center">
                  ...
                </span>
              )}
            </span>
          </h2>

          <div className="mt-12 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={loading || !topic}
              className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-lg font-bold hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Sedang Memikirkan...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Buat Ide Acara
                </>
              )}
            </button>
          </div>
        </div>

        {/* Result Card - Minimal */}
        {idea && (
          <div className="max-w-2xl mx-auto animate-fade-in-up px-4">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-black/10 shadow-2xl shadow-black/5 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles className="w-32 h-32 text-black" />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-6 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest text-black/60">
                  Saran AI
                </span>
                <h3 className="text-2xl md:text-4xl font-bold mb-4 text-black">{idea.title}</h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed mb-8">
                  {idea.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {idea.suggestedActivities.map((act, i) => (
                    <span key={i} className="px-4 py-2 bg-stone-50 border border-black/5 rounded-full text-sm font-bold text-black/80">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};