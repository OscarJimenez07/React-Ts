
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
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
