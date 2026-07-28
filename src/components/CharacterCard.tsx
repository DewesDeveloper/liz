import type { Character } from '../types';

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className="group relative overflow-hidden bg-[#111] border border-white/10 hover:border-gold/50 transition-all duration-500">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl text-gold mb-1">{character.name}</h3>
        <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">{character.actor}</p>
        <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {character.description}
        </p>
      </div>
    </div>
  );
};