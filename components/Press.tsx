import React from 'react';
import { Download, FileImage, FileText, Palette, Mail } from 'lucide-react';
import { PressAsset } from '../types';

const assets: PressAsset[] = [
  {
    id: '1',
    title: 'Nebula Brand Guide',
    type: 'Guide',
    size: '12.4 MB',
    format: 'PDF',
    thumbnail: 'bg-studio-accent'
  },
  {
    id: '2',
    title: 'Logo Pack (Light/Dark)',
    type: 'Logo',
    size: '5.2 MB',
    format: 'ZIP',
    thumbnail: 'bg-white'
  },
  {
    id: '3',
    title: 'Echoes of Eternity Media Kit',
    type: 'Kit',
    size: '1.2 GB',
    format: 'ZIP',
    thumbnail: 'bg-[url(https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop)] bg-cover'
  },
  {
    id: '4',
    title: 'Cyber Strike 4K Screenshots',
    type: 'Kit',
    size: '850 MB',
    format: 'ZIP',
    thumbnail: 'bg-[url(https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop)] bg-cover'
  }
];

export const Press: React.FC = () => {

  const handleDownload = (assetTitle: string) => {
    // Create a dummy file for demonstration
    const element = document.createElement("a");
    const file = new Blob([`Placeholder content for ${assetTitle}. \n\nThis is a demo download file from Nebula Studios website.`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${assetTitle.replace(/\s+/g, '_')}_DEMO.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="pt-32 pb-24 bg-studio-black relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-2">Media Center</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">PRESS & ASSETS</h2>
          </div>
          <p className="max-w-md text-studio-light text-sm mt-4 md:mt-0 md:text-right">
            Official brand assets and high-resolution media kits for content creators and press.
            For specific inquiries, contact <a href="mailto:press@nebulastudios.fake" className="text-white border-b border-studio-accent hover:text-studio-accent transition-colors">press@nebulastudios.com</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <div key={asset.id} className="group bg-studio-card border border-white/5 rounded-xl overflow-hidden hover:border-studio-accent/50 transition-all duration-300 relative">
              {/* Thumbnail */}
              <div className={`h-40 w-full relative ${asset.thumbnail} flex items-center justify-center overflow-hidden`}>
                 {/* Dark overlay that appears on hover to help contrast the button, MUST be below the button but above image */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 z-10" />
                 
                 {/* Icons and Text (Lower Z-index) */}
                 {asset.type === 'Logo' && <div className="text-studio-black font-display font-bold text-3xl z-0 group-hover:opacity-20 transition-opacity">NEBULA</div>}
                 {asset.type === 'Guide' && <Palette className="text-white w-12 h-12 z-0 group-hover:opacity-20 transition-opacity" />}
                 
                 {/* Button - Higher Z-index */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button 
                      onClick={() => handleDownload(asset.title)}
                      className="bg-white text-studio-black p-3 rounded-full shadow-lg hover:bg-studio-accent hover:text-white transition-colors transform scale-90 group-hover:scale-100"
                      title="Download Asset"
                    >
                      <Download className="w-6 h-6" />
                    </button>
                 </div>
              </div>

              {/* Info */}
              <div className="p-6 relative bg-studio-card z-20">
                <div className="flex items-center gap-2 mb-3">
                  {asset.type === 'Guide' && <FileText className="w-4 h-4 text-studio-light" />}
                  {asset.type === 'Logo' && <FileImage className="w-4 h-4 text-studio-light" />}
                  {asset.type === 'Kit' && <FileImage className="w-4 h-4 text-studio-light" />}
                  <span className="text-xs font-bold text-studio-accent uppercase tracking-wider">{asset.format} • {asset.size}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-studio-accent transition-colors">
                  {asset.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};