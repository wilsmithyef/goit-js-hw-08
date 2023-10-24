const iframe = document.querySelector('iframe');
const player = new Vimeo.player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

const onPlay = function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('play', onPlay);

player.off('play');

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') ?? 0);

import throttle from "lodash.throttle";

player.on(
    'timeupdate',
    throttle(function (data) {
        const currentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000)
);



