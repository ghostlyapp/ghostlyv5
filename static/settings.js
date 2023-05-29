let url = window.location.protocol + '//' + window.location.host;
let favicon = document.getElementById('favicon');
let bgeffectInput = document.getElementById('bg-effect');

function changeTitle(title) {
    document.title = title;
    localStorage.setItem('title', title);
}
switch (localStorage.getItem('title')) {
    case null:
        localStorage.setItem('title', 'My Drive - Google Drive');
        document.title = 'My Drive - Google Drive';
        break;
    case '':
        localStorage.setItem('title', 'My Drive - Google Drive');
        document.title = 'My Drive - Google Drive';
        break;
    default:
        document.title = localStorage.getItem('title');
}

function changeFavicon(value) {
    favicon.href = value;
    localStorage.setItem('favicon', value);
}
switch (localStorage.getItem('favicon')) {
    case null:
        localStorage.setItem('favicon', url + 'images/icon.png');
        favicon.href = url + 'images/icon.png';
        break;
    case '':
        localStorage.setItem('favicon', url + 'images/icon.png');
        favicon.href = url + 'images/icon.png';
        break;
    default:
        favicon.href = localStorage.getItem('favicon');
}