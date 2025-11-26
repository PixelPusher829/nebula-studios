import React, { useState } from 'react';
import { Calendar, ArrowUpRight, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { NewsItem } from '../types';
import ReactMarkdown from 'react-markdown';

const news: NewsItem[] = [
  {
    id: '1',
    category: 'Development',
    title: 'Behind the Scenes: The Sound Design of Void Walker',
    date: 'OCT 24, 2024',
    excerpt: 'Our audio team breaks down how they created the terrifying soundscapes...',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
    content: `
# The Sound of Silence: Crafting Void Walker's Audio
*By James Aris, Audio Lead*

When we set out to create **Void Walker**, we knew that audio wouldn't just be an aesthetic choice—it had to be a gameplay mechanic. In a game where you are hunted by something you cannot always see, your ears become your most valuable survival tool.

![Sound Engineer Working](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop)

## The "Presence" Engine

We developed a custom audio occlusion system called the "Presence Engine". Unlike standard ray-tracing for audio, which can be CPU intensive, we utilized a voxel-based approach to determine how sound propagates through the station's twisting corridors. This allows us to simulate realistic echoing, muffling, and distortion in real-time.

> "True horror isn't a jump scare. It's the sound of footsteps stopping just outside your door."

### Foley Recording: Getting Dirty
We spent weeks in abandoned warehouses and industrial parks recording:
*   Metal groaning under stress
*   Hydraulic fluid dripping on concrete
*   The unique echo of heavy boots on grating

![Foley Recording Setup](https://images.unsplash.com/photo-1525134706596-f949c81c6339?q=80&w=2070&auto=format&fit=crop)

The result is a soundscape that feels alive, oppressive, and utterly terrifying. We can't wait for you to hear it.
    `
  },
  {
    id: '2',
    category: 'Community',
    title: 'NebulaCon 2024: Everything You Missed',
    date: 'SEP 15, 2024',
    excerpt: 'A recap of our biggest community event yet, featuring cosplay winners and...',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop',
    content: `
# NebulaCon 2024 Recap
What a weekend! Over 15,000 of you joined us in San Diego for our biggest celebration of gaming culture yet. The energy in the hall was absolutely electric.

![Convention Floor](https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop)

## Cosplay Contest Winners
The level of craft this year was insane. We saw everything from 3D-printed armor to hand-stitched leather.
1.  **Grand Prize:** Sarah K. as *The Void Walker* (That animatronic tail!)
2.  **Runner Up:** Mike T. as *Agent Zero* from Cyber Strike.

## The Big Reveal: Project Aether
We officially teased our next project, codenamed **Project: Aether**. While we can't say much yet, those who attended the keynote saw a glimpse of a floating city that defied gravity.

![Concept Art Teaser](https://images.unsplash.com/photo-1534278931827-8a259344abe7?q=80&w=2070&auto=format&fit=crop)

Thank you to everyone who came out. We build these worlds, but you bring them to life.
    `
  },
  {
    id: '3',
    category: 'Patch Notes',
    title: 'Cyber Strike: Season 4 Update Notes',
    date: 'AUG 30, 2024',
    excerpt: 'Detailed changes to weapon balancing, map rotations, and the new competitive mode.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    content: `
# Season 4: "Neon Nights" is Live!

Agents, welcome to Season 4. We've heard your feedback on the ranked meta and have made significant adjustments to ensure a fair and competitive playing field.

![Cyber Strike Gameplay](https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop)

### Weapon Balancing
*   **Viper SMG:** Damage falloff increased at 20m range. It was dominating mid-range encounters too easily.
*   **Titan LMG:** Recoil pattern smoothed out for the first 10 shots, making it more viable for suppressive fire.
*   **Nano-Blade:** Attack speed reduced by 10%.

### Map Updates
*   **Sector 7:** Added new cover options in the central courtyard to break up long sniper sightlines.
*   **Night Market:** Lighting improved in the lower tunnels to increase visibility.

### New Mode: Uplink
Secure the data, extract the package. One life per round. No respawns. This is competitive play at its purest. Good luck out there.
    `
  },
  {
    id: '4',
    category: 'Tech Blog',
    title: 'Scaling Servers for 10 Million Players',
    date: 'AUG 12, 2024',
    excerpt: 'How our backend engineering team managed the massive influx of players during the Echoes launch.',
    image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop',
    content: `
# Handling the Flood: Server Architecture

When *Echoes of Eternity* launched, we saw 2 million concurrent users in the first 4 hours. Here is how our infrastructure stayed standing when the floodgates opened.

![Server Room](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop)

## The Stack
We utilized a hybrid cloud approach, leveraging Kubernetes for orchestration. Our primary challenge was the database write-heavy load from player inventory updates.

### Sharding Strategy
We implemented dynamic sharding based on player region.
*   NA-East
*   EU-West
*   Asia-Pacific

This ensured latency remained under 50ms for 90% of players, even during peak loads.
    `
  },
  {
    id: '5',
    category: 'Art',
    title: 'The Architecture of Starlight Drift',
    date: 'JUL 04, 2024',
    excerpt: 'Concept art showcase: Designing race tracks that defy physics and gravity.',
    image: 'https://images.unsplash.com/photo-1614726365723-49cfae972fcb?q=80&w=2000&auto=format&fit=crop',
    content: `
# Designing the Impossible Track

In *Starlight Drift*, gravity is a suggestion, not a law. Our art team looked at Mobius strips and non-Euclidean geometry for inspiration to create tracks that are mind-bending to drive on.

![Track Concept Art](https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop)

## The "Neon-Gothic" Style
We wanted the tracks to feel ancient yet futuristic. We combined gothic cathedral architecture with cyberpunk neon aesthetics. This contrast creates a unique visual identity that separates Starlight from other racers.

### Key References
*   Brutalist architecture
*   F1 circuit layouts
*   Bioluminescent deep-sea creatures

Check out the full gallery below to see the evolution from sketch to final 3D asset.
    `
  },
  {
    id: '6',
    category: 'Culture',
    title: 'Wellness Week at Nebula',
    date: 'JUN 20, 2024',
    excerpt: 'Why we take a week off every summer to recharge, learn, and disconnect.',
    image: 'https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=2000&auto=format&fit=crop',
    content: `
# Recharging the Creative Battery

Burnout is the enemy of creativity. That is why every June, Nebula Studios shuts down for "Wellness Week".

![Team Hike](https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop)

## No Emails, No Slack
We encourage our team to disconnect completely. Go hiking, play video games, learn to bake bread. Work will still be there when you get back.

### The Results
We've found that when the team returns, productivity and morale skyrocket. Great ideas don't happen when you're exhausted. They happen when you have space to dream.
    `
  }
];

export const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const openArticle = (item: NewsItem) => {
    setSelectedArticle(item);
    window.scrollTo(0,0);
  };

  return (
    <section className="bg-studio-black relative min-h-screen">
       {/* List View */}
       {!selectedArticle && (
         <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">LATEST NEWS</h2>
            <div className="w-24 h-1 bg-studio-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {news.map((item) => (
               <article key={item.id} onClick={() => openArticle(item)} className="group cursor-pointer flex flex-col h-full">
                 <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                   <img 
                     src={item.image} 
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute top-4 left-4">
                     <span className="bg-studio-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                       {item.category}
                     </span>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-2 text-studio-light text-xs font-bold tracking-widest mb-3 uppercase">
                   <Calendar className="w-3 h-3" />
                   {item.date}
                 </div>
                 
                 <h3 className="text-2xl font-display font-bold text-white mb-3 leading-tight group-hover:text-studio-accent transition-colors">
                   {item.title}
                 </h3>
                 
                 <p className="text-studio-light font-sans text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                   {item.excerpt}
                 </p>
                 
                 <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wide group-hover:underline decoration-studio-accent underline-offset-4 mt-auto">
                   Read Article <ArrowUpRight className="w-4 h-4" />
                 </div>
               </article>
             ))}
          </div>
         </div>
       )}

       {/* Article Reader View */}
       {selectedArticle && (
         <div className="animate-in fade-in duration-500 bg-studio-black">
            
            {/* FULL WIDTH HERO HEADER */}
            <div className="relative w-full h-[65vh] min-h-[500px] flex items-end">
                {/* Background Image Parallax-ish */}
                <div className="absolute inset-0">
                    <img src={selectedArticle.image} className="w-full h-full object-cover" alt={selectedArticle.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/40 to-black/30" />
                </div>
                
                {/* Back Button (Absolute Top) */}
                <div className="absolute top-24 left-0 w-full px-6 z-20">
                    <div className="max-w-4xl mx-auto">
                        <button onClick={() => setSelectedArticle(null)} className="inline-flex items-center gap-2 text-white/80 hover:text-white bg-black/40 hover:bg-studio-accent backdrop-blur-md px-4 py-2 rounded-full transition-all font-bold uppercase text-xs tracking-wide">
                            <ArrowLeft className="w-4 h-4" /> Back to News
                        </button>
                    </div>
                </div>

                {/* Hero Text Content */}
                <div className="relative z-10 w-full pb-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-studio-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm mb-6 inline-block shadow-lg">
                            {selectedArticle.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                            {selectedArticle.title}
                        </h1>
                        <div className="flex items-center gap-6 text-white text-sm font-bold tracking-widest uppercase border-t border-white/20 pt-6">
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-studio-accent" /> {selectedArticle.date}</div>
                            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                            <div>4 min read</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="relative bg-studio-black -mt-6 pt-16 rounded-t-3xl z-20">
                <div className="max-w-3xl mx-auto px-6 pb-24">
                <div className="markdown-content">
                    <ReactMarkdown>{selectedArticle.content}</ReactMarkdown>
                </div>
                </div>
            </div>

            {/* Related Articles */}
            <div className="bg-studio-dark py-20 border-t border-white/5">
               <div className="max-w-7xl mx-auto px-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-10 border-l-4 border-studio-accent pl-4">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {news.filter(n => n.id !== selectedArticle.id).slice(0, 3).map((item) => (
                        <div key={item.id} onClick={() => openArticle(item)} className="cursor-pointer group">
                           <div className="rounded-lg overflow-hidden h-48 mb-4 relative shadow-lg">
                              <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                              <span className="absolute top-2 left-2 bg-studio-black/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 uppercase rounded tracking-wider">{item.category}</span>
                           </div>
                           <h4 className="text-white font-bold font-display text-xl group-hover:text-studio-accent transition-colors leading-tight mb-2">{item.title}</h4>
                           <span className="text-studio-light text-xs font-bold uppercase tracking-wide">{item.date}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
       )}
    </section>
  );
};