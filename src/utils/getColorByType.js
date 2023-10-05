export const getColorByType = (type) => {
  switch (type) {
    case 'normal':
      return '#B5B9C4';
    case 'fighting':
      return '#EB4971';
    case 'flying':
      return '#83A2E3';
    case 'poison':
      return '#9F6E97';
    case 'ground':
      return '#F78551';
    case 'rock':
      return '#D4C294';
    case 'bug':
      return '#8BD674';
    case 'ghost':
      return '#8571BE';
    case 'steel':
      return '#4C91B2';
    case 'fire':
      return '#fb6c6c';
    case 'water':
      return '#76bdfe';
    case 'grass':
      return '#48d0b0';
    case 'electric':
      return '#ffd86f';
    case 'psychic':
      return '#FF6568';
    case 'ice':
      return '#91D8DF';
    case 'dragon':
      return '#7383B9';
    case 'dark':
      return '#6F6E78';
    case 'fairy':
      return '#EBA8C3';
    case 'unknown':
      return '#DFDFDF';
    case 'shadow':
      return ' #855AC9';
    default:
      return '#000';
  }
};
