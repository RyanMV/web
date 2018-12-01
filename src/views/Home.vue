<template>
  <main id="Home">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="first-slide" src="../../public/img/juntos.jpg" alt="First slide">
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Dale una oportunidad al amor.</h1>
              <p>El amor es una sensacion hermosa , que esparas!, confiezale tus sentimientos a esa persona que tanto te gusta .</p>
              <p><a class="btn btn-lg btn-primary bg-purple" href="/confesiones" role="button">Declarate ya</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="second-slide" src="../../public/img/ellanuncateamara.jpg" alt="Second slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>Nunca dejes de amar.</h1>
              <p>Ama cada vez mas, en itla crush puedes encontrar el amor y declararte.</p>
              <p><a class="btn btn-lg btn-primary bg-purple" href="/confesiones" role="button">Declarate ya</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="third-slide" src="../../public/img/estassoloylosabes.jpg" alt="Third slide">
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>El amor es amor !.</h1>
              <p>No pierdas la oportunidad y dile lo que sientes, esos podrian ser tu y ella.</p>
              <p><a class="btn btn-lg btn-primary bg-purple" href="/confesiones" role="button">Declarate ya</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </main>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>
