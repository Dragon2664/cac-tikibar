
/* cargo la cabecera de mis paginas webs, todas iguales */

fetch('header.html')
    .then(response => response.text())
    .then(html => {
    document.querySelector('#header').innerHTML = html;
});


/* cargo el footer de las paginas html */

fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.querySelector('#footer').innerHTML = html;
});
