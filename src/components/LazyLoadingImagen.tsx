import { useState, useEffect, useRef } from "react";

// Componente LazyImage
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [isVisible, setIsVisible] = useState(false); // ¿Está visible en pantalla?
  const imgRef = useRef<HTMLImageElement | null>(null); // Referencia a la imagen

  // Observa si la imagen entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Solo se activa cuando la imagen es visible
      }
    });

    if (imgRef.current) observer.observe(imgRef.current); // Conecta la imagen con el observer

    return () => observer.disconnect(); // Limpia cuando el componente se desmonta
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""} // Carga la imagen solo si es visible
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        opacity: isVisible ? 1 : 0.5, // Transición para dar un efecto visual
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );
}

// Componente principal App
function App() {
  const images = [
  "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",
    "https://renofase.com/wp-content/uploads/2022/12/p10-Renofase-1024x558.png",
    "https://complotmagazine.com/wp-content/uploads/2016/03/BugattiChiron-1200x8011-1200x700.jpg",
    "https://elcomercio.pe/resizer/wD5a7i104ycGJTxBoHlaZyHsAek=/1214x698/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg",

  ];

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
