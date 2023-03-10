import showSeasons from './modules/showSeasons.js';
import updateNav from './modules/updateNav.js';
import showEpisode from './modules/showEpisode.js';
import showCharacter from './modules/showCharacter.js';
import showLocation from './modules/showLocation.js';
import searchPanel from './modules/searchPanel.js';

document.addEventListener('click', handleClick);
function handleClick({ target }) {
  handleIfSeasonSelector(target);
  handleIfEpisodeSelector(target);
  handleIfCharacterSelector(target);
  handleLocationSelector(target);
}
function handleIfEpisodeSelector(target) {
  if (!defineElementByAttribute(target, 'episode-selector')) return;
  const episodeSelector = defineElementByAttribute(target, 'episode-selector');
  const episodeID = episodeSelector.getAttribute('episode-selector');
  showEpisode(`${episodeID}`);
}

function handleIfSeasonSelector(target) {
  if (!defineElementByAttribute(target, 'season-selector')) return;
  const seasonSelector = defineElementByAttribute(target, 'season-selector');
  const seasonID = seasonSelector.getAttribute('season-selector');
  updateNav(`${seasonID}`);
}

function handleIfCharacterSelector(target) {
  if (!defineElementByAttribute(target, 'character-selector')) return;
  const characterSelector = defineElementByAttribute(
    target,
    'character-selector'
  );
  const characterID = characterSelector.getAttribute('character-selector');
  showCharacter(`${characterID}`);
}

function handleLocationSelector(target) {
  if (!defineElementByAttribute(target, 'location-selector')) return;
  const locationSelector = defineElementByAttribute(
    target,
    'location-selector'
  );
  const nameLocation = locationSelector.getAttribute('location-selector');
  console.log(`${nameLocation}`);
  showLocation(`${nameLocation}`);
}

function defineElementByAttribute(target, dataAttributeSelector) {
  const element = target.hasAttribute(dataAttributeSelector)
    ? target
    : target.closest(`[${dataAttributeSelector}]`)
    ? target.closest(`[${dataAttributeSelector}]`)
    : false;
  return element;
}

showSeasons();
searchPanel();
