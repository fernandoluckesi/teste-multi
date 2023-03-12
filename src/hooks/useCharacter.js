import { useState, useEffect } from 'react';
import { getByUrl } from '../services/apis';

export function useCharacter(url) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getByUrl(url)
      .then((data) => {
        setCharacter(data);
      })
      .catch(() => {
        setCharacter(false);
      });
  }, []);

  if (character) {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created,
    };
  }
  return 'Not Found';
}
