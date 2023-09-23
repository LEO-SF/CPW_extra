function randomImages(){
    var imageUrls = [
        'https://media.istockphoto.com/id/477804786/pt/foto/paisagem-de-montanha.webp?s=2048x2048&w=is&k=20&c=Th578SGxU9h3J4V80YxCHSpYO0Hdp3zcWnySrwrv9BM=',
        'https://media.istockphoto.com/id/139956675/pt/foto/congelados-caixa-de-correio.webp?s=2048x2048&w=is&k=20&c=-K-SfYZJ2cMkMDFGrQeaXZxANwq9j_g5wmFo7RjGOac=',
        'https://media.istockphoto.com/id/1297349747/pt/foto/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.webp?s=2048x2048&w=is&k=20&c=bd1K_fGyZwk5O-2q3095l7O8zHo_VcS0lkiLr0p53uE=',
        'https://media.istockphoto.com/id/1159474019/pt/foto/part-of-the-iguazu-falls-seen-from-the-argentinian-national-park.webp?s=2048x2048&w=is&k=20&c=ZwXoyshvBo9gAFrJ4bE6-h5c9GYatilpFjqU-L1VL_k=',
        'https://media.istockphoto.com/id/944812540/pt/foto/mountain-landscape-ponta-delgada-island-azores.webp?s=2048x2048&w=is&k=20&c=Rc72Aa6nUDQtZH2-ezwljZAdX_F_RRgcxzUXmCCoVbs=',
        'https://media.istockphoto.com/id/607280514/pt/foto/tremo%C3%A7os-do-lago-tekapo.webp?s=2048x2048&w=is&k=20&c=EPCrcQ8svzFrwsI6N-M6FJYXZcYFZXU7eJgNryFgf40=',
        'https://media.istockphoto.com/id/1093110112/pt/foto/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.webp?s=2048x2048&w=is&k=20&c=857qR0-74kehKfLSDWTH_yYLRVtwwBPo0osspLkqsng=',
        'https://media.istockphoto.com/id/1038870630/pt/foto/woman-standing-and-looking-at-lago-di-carezza-in-dolomites.webp?s=2048x2048&w=is&k=20&c=OnYeGL6AXg4poxt4ILp1Q1YDu--H9a1rPD3EyjZLIL0=',
        'https://media.istockphoto.com/id/857789544/pt/foto/landscape-nature-view-background-view-from-window-at-a-wonderful-landscape-nature-view-with.webp?s=2048x2048&w=is&k=20&c=W5zpsimhiw8iuwuP4aCJMB4xfDZ9_1Y1fTmZToBYjsw=',
        'https://media.istockphoto.com/id/1069539210/pt/foto/fantastic-autumn-sunset-of-hintersee-lake.webp?s=2048x2048&w=is&k=20&c=YZu9ol5eGH6Y3Au7NgtXY7eSY3B0nYJwFIfdQqJuAao=',
        'https://media.istockphoto.com/id/577322516/pt/foto/landscape-chapada-diamantina-bahia-brazil.webp?s=2048x2048&w=is&k=20&c=hnxk5u-jIJIUPfjAjUVlFwO6HfEcNvxyEIrdJoupjPU=',
        'https://media.istockphoto.com/id/1010833258/pt/foto/misty-lilac-seascape-with-pink-clouds.webp?s=2048x2048&w=is&k=20&c=V5fGchcV92UHHC-7CguR5iZx5PKHG316QVCCAzLqwsg=',
        'https://media.istockphoto.com/id/498309616/pt/foto/estrada-grande-do-oceano-%C3%A0-noite-vista-da-via-l%C3%A1ctea.webp?s=2048x2048&w=is&k=20&c=c9XfLJobjUlroIMNUaSqvi46yUaKqWqYmwSjwUMqBNY=',
        'https://media.istockphoto.com/id/1066588820/pt/foto/lavender-field-at-sunset-provence-amazing-landscape-with-fiery-sky-france.webp?s=2048x2048&w=is&k=20&c=93hsK-JROp64jYLbRFE6M4OVRqL6f7FJqbKASwsT2VM=',
        'https://media.istockphoto.com/id/525508231/pt/foto/moraine-lake-montanhas-rochosas-canad%C3%A1.webp?s=2048x2048&w=is&k=20&c=yOrDJcmeA_wP2rY__MC9jylYtH8i7vbIf3QykW2yM3g=',
        'https://media.istockphoto.com/id/1368262606/pt/foto/tall-powerful-cross-ocean-wave-breaking-during-a-dark-stormy-evening.webp?s=2048x2048&w=is&k=20&c=SX3BuetXdjw-p2pjJQ-zXXsO-VTTkNJfcYOlBbXi4f0='
];   

var imagesContainer = document.getElementById('images');

function randomize(){

for (var i = 0; i < imageUrls.length; i++) {

    var imageRandom = Math.floor(Math.random() * (imageUrls.length));
    // Cria um elemento de imagem para cada URL
    var imageElement = document.createElement('img');
  
    // Define o atributo 'src' do elemento de imagem com a URL da imagem atual
    imageElement.src = imageUrls[imageRandom];

    imageElement.width = 1200;
    imageElement.height = 800;
  
    // Adiciona o elemento de imagem ao elemento contêiner
    imagesContainer.appendChild(imageElement);
  }
}

randomize();

window.addEventListener('scroll', endPage);

function endPage(){
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    randomize();
    }

}

}