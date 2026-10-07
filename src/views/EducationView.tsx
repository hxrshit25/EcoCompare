import React, { useState } from 'react';
import { EDUCATIONAL_TOPICS } from '../data/education';
import { 
  BookOpen, 
  Layers, 
  Leaf, 
  RefreshCw, 
  ShieldAlert, 
  Wrench, 
  Award,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const EducationView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(EDUCATIONAL_TOPICS[0].id);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      default: return <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const selectedTopic = EDUCATIONAL_TOPICS.find(t => t.id === selectedTopicId) || EDUCATIONAL_TOPICS[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Sustainability 101 Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
          Environmental Science Terminology
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Demystify complex chemical engineering and environmental assessment concepts to become an informed, greenwashed-proof consumer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Topic Selector List */}
        <div className="md:col-span-5 space-y-2">
          {EDUCATIONAL_TOPICS.map((topic) => {
            const isSelected = topic.id === selectedTopic.id;

            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-xs ring-1 ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 shrink-0">
                    {getTopicIcon(topic.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{topic.title}</h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">{topic.tagline}</p>
                  </div>
                </div>

                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-600' : 'bg-transparent'}`} />
              </div>
            );
          })}
        </div>

        {/* Right Detail Card */}
        <div className="md:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {selectedTopic.tagline}
              </span>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mt-0.5">
                {selectedTopic.title}
              </h2>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
              {getTopicIcon(selectedTopic.icon)}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-1.5">Overview</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {selectedTopic.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-gray-400 dark:text-gray-500 mb-2">Core Principles</h4>
            <div className="space-y-2 text-xs">
              {selectedTopic.keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-slate-950/60 border border-gray-100 dark:border-slate-800 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/80 space-y-1 text-xs">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-World Engineering Example:</span>
            </span>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {selectedTopic.example}
            </p>
          </div>

          <div className="p-3 bg-gray-50 dark:bg-slate-950 border border-gray-200/60 dark:border-slate-800 rounded-xl text-xs text-gray-500 dark:text-gray-400">
            <strong>Key Consumer Takeaway:</strong> {selectedTopic.takeaway}
          </div>
        </div>

      </div>

    </div>
  );
};
