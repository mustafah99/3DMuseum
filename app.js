document.addEventListener('mousemove', e => { // Här så börjar vi med att ordna ett event där vi kan röra runt vår div med en vacker 3D effekt genom vår mus.
// För att se effekten av sidan, vänligen gå in på hemsidan och klicka på bilden med 3D effekt för att se effekten av .click metoden.

    $(document).ready(function () { // Här börjar vi med att använda oss utav jQuery.
        $('#card').click(function () {
            $(this) // När vi klickar på .card div:en så ändrar den både bakgrundsbild samt bilden inom vår div tag och texten till vänster om vår div tag där vi ser namnet av bilden.
                .css('background-image', 'url(https://picjumbo.com/wp-content/uploads/ink-in-water-abstract-free-photo-2210x1473.jpg)');
            $('#welcome').text(($('#welcome').text() == 'The Ink') ? 'The Ink' : 'The Ink').fadeIn();
            $('body')
                .css('background-image', 'url(https://picjumbo.com/wp-content/uploads/ink-in-water-abstract-free-photo-2210x1473.jpg)');

            $('#card').click(function () {
                $(this)
                    .css('background-image', 'url(https://wallpaperplay.com/walls/full/1/4/b/15250.jpg)');
                $('#welcome').text(($('#welcome').text() == 'The Shard') ? 'The Shard' : 'The Shard').fadeIn();
                $('body')
                    .css('background-image', 'url(https://wallpaperplay.com/walls/full/1/4/b/15250.jpg)');

                $('#card').click(function () {
                    $(this)
                        .css('background-image', 'url(http://getwallpapers.com/wallpaper/full/1/d/8/21028.jpg)');
                    $('#welcome').text(($('#welcome').text() == 'The Mirror Effect') ? 'The Mirror Effect' : 'The Mirror Effect').fadeIn();
                    $('body')
                    .css('background-image', 'url(http://getwallpapers.com/wallpaper/full/1/d/8/21028.jpg)');
                });
            });
        });
    });
// Här har vi skrivit in funktionerna av hur 3D effekten ska vara genom X och Y axeln.
    const x = e.pageX;
    const y = e.pageY;

    const elm = document.querySelector('#card');
    const coords = elm.getBoundingClientRect();

    const elmX = coords.left + (elm.offsetWidth / 2);
    const elmY = coords.top + (elm.offsetHeight / 2);

    const angleX = (elmY - y) / 25;
    const angleY = (elmX - x) / -25;

    elm.style.transform = `rotateX(${angleX}deg)
                            rotateY(${angleY}deg)`;
})