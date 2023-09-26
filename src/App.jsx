import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  {
    frase: "Lo que sospechabas es cierto, trata de ser amable con ellos, porque esta amabilidad ayudará a que todo mejore.",
    autor: "proverbia.net"
  },
  {
    frase: "Un hermoso sueño se hará realidad y verás cómo otros sueños se hacen realidad.",
    autor: "Proverbio japonés"
  },
  {
    frase: "La realidad del ser humano es su pensamiento, no su cuerpo material.",
    autor: "proverbia.net"
  },
  {
    frase: "Te casarás con un atleta profesional. Si la alimentación competitiva puede considerarse un deporte.",
    autor: "proverbia.net"
  },
  {
    frase: "Valiente es el que ama..",
    autor: "proverbia.net"
  },
  {
    frase: "No tienes que ser más rápido que el oso, sólo tienes que ser más rápido que el tipo más lento que huye de él.",
    autor: "proverbia.net"
  },
  {
    frase: "No te tomes la vida demasiado en serio. No saldrás vivo de ella.",
    autor: "proverbia.net"
  },
  {
    frase: "Mañana puede que sea demasiado tarde para disfrutar lo que tienes hoy.",
    autor: "ajescudero"
  },
  {
    frase: "Cuando busques lo que más deseas, recuerda hacer lo mejor que puedas.",
    autor: "ajescudero"
  },
  {
    frase: "No olvides que un amigo es un regalo que te haces a ti mismo.",
    autor: "ajescudero"
  },
  {
    frase: "Alégrate, te espera un camino de hermosas pasiones y debes recorrerlo.",
    autor: "ajescudero"
  },
  {
    frase: "Una reputación de mil años puede depender de la conducta de una hora",
    autor: "Proverbio japonés"
  },
  {
    frase: "Siente la felicidad esperándote y no olvides atraparla para tenerla contigo.",
    autor: "ajescudero"
  },
  {
    frase: "Alégrate, un camino de hermosas pasiones te espera y debes recorrerlo",
    autor: "ajescudero"
  },
  {
    frase: "No todos pueden recibir las mismas cosas. Se practicó.",
    autor: "ajescudero"
  }
];

const App = () => {
  const [quote, setQuote] = useState({});

  // Función para obtener una frase aleatoria
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Cuando se carga la aplicación, muestra una frase aleatoria
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  // Función para cambiar la frase actual
  const changeQuote = () => {
    setQuote(getRandomQuote());
  };

  const backgroundImages = [
    '/images/antigua-china-e1644342694383-800x400.jpeg',
    '/images/3075.600x450.jpg',
    '/images/1024x768-Great-Wall-of-China-Wallpaper.jpg',
    '/images/1024x768-Mavis-Fitzpatrick-antecedentes-de-China.jpg',
    '/images/3840x2160-4K-China-Fondo-de-pantalla-derrame-1-scaled.jpg',
    '/images/2560x1440-Papelador-de-pantalla-chino.jpg',
    '/images/1920x1080-Montanas-Tianzi-Fondo-de-pantalla-de-China.jpg',
    '/images/foto-gratis-gautum-buddha-vesak-purnima-estatua-simbolo-paz.jpg',
    '/images/estatua-buda-medita-flores-rosadas-bosque-generada-ia.jpg',
    '/images/estatua-buda-tallada-montana.jpg',
    '/images/mattia-faloretti-jbrR_ESWK2A-unsplash.jpg',
    '/images/amit-kumar-cT4wxa5jFKU-unsplash.jpg',
    /* Agrega más rutas de imágenes de fondo aquí */
  ];
  
  // ...
  
  // Función para cambiar el fondo aleatoriamente
  const changeBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomBackground = `url(${backgroundImages[randomIndex]})`;
    document.body.style.setProperty('--background-image', randomBackground);
  };

  const changeQuoteAndBackground = () => {
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
  
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomBackground = `url(${backgroundImages[randomIndex]})`;
    document.body.style.setProperty('--background-image', randomBackground);
  };
  

  return (
    <div className="quote-container">
      <p className="quote-text">{quote.frase}</p>
      <p className="quote-author">- {quote.autor}</p>
      <button onClick={changeQuoteAndBackground}>SUERTE</button>
    </div>
  );
};

export default App;
