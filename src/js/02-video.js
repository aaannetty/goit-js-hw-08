import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const onPlay = function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(time || 0);
