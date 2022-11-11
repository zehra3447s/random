   function resim() {
        for (let i = 0; i < 15; i++) {
          let randomResim = `https://source.unsplash.com/random/200x200?sig=${
            Math.random() * 100
          }/`;
          document.getElementById(
            "galeri"
          ).innerHTML += `<div class="row-md-4 bosluk"><img src='${randomResim}' /></div>`;
          document.getElementById(
            "galeri1"
          ).innerHTML += `<div class="row-md-4 bosluk"><img src='${randomResim}' /></div>`;
          document.getElementById(
            "galeri2"
          ).innerHTML += `<div class="row-md-4 bosluk"><img src='${randomResim}' /></div>`;
        }
      }
      window.onload = resim;

        