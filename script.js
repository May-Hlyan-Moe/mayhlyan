var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
     strings: ['May Hlyan Moe'],
     autoStart: true,
     loop: true,
     cursor: '|',
     delay: 100,
     wrapperClassName: 'typeText',
     cursorClassName: 'typeCursor',
});