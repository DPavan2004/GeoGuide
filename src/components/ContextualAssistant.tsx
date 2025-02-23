import React, { useState } from "react";
import { MessageSquare, Mic, Camera } from "lucide-react";

export function ContextualAssistant() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-[1000]">
      <div
        className={`bg-black/40 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg transition-all duration-300 overflow-hidden ${
          isExpanded ? "w-80" : "w-12"
        }`}
      >
        {/* Expanded Content */}
        {isExpanded && (
          <div className="p-4">
            <div className="mb-4">
              <p className="text-white/70 text-sm">AI Travel Assistant</p>
              <p className="text-white text-base">How can I help you plan your journey?</p>
            </div>
            {/* Input Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="w-full px-4 py-2 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Icons */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                  <Mic className="w-4 h-4 text-white/70" />
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                  <Camera className="w-4 h-4 text-white/70" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 flex items-center justify-center hover:bg-white/10 transition-colors rounded-2xl w-full"
          aria-label="Toggle Assistant"
        >
          <MessageSquare className="w-6 h-6 text-blue-400 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
