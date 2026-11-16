# GitHub Pages için kişisel/teknik portföy şablonu

Responsive, Türkçe, açık/koyu temalı ve proje filtreleme özelliğine sahip statik web sitesi. **Tamamen ücretsiz GitHub Pages barındırmasında çalışır.** Herhangi bir paket kurulumu, sunucu veya veritabanı gerektirmez.

## Önizleme

`index.html` dosyasını tarayıcıda aç. İnternet bağlantısı gerekmez.

## Kişiselleştirme

`index.html` dosyasında:

1. `Ad Soyad` ve `AD.SOYAD` ifadelerini kendi isminle değiştir.
2. `merhaba@example.com` değerini kendi e-posta adresinle değiştir.
3. Hakkımda ve proje açıklamalarını kendi bilgilerine göre düzenle. **Projeler şu anda örnek içeriktir.**
4. `styles.css` dosyasının başındaki `:root` renklerini isteğine göre ayarla.
5. İstersen proje kartlarını çoğalt; `data-category="hardware software system"` gibi sınıflandırmalarla filtreleri kullan.
6. `assets/social-preview.svg` içindeki örnek adı da değiştir.

## GitHub Pages'de yayınlama

1. [github.com/new](https://github.com/new) bağlantısından yeni bir depo (repository) aç.
2. Depo adını **KULLANICIADIN.github.io** olarak gir (`KULLANICIADIN` yerine GitHub kullanıcı adın) ve **Public** seç.
3. Bu ZIP'i açıp `index.html`, `styles.css`, `script.js`, `.nojekyll`, `assets/` ve `README.md` öğelerini **deponun ana dizinine** yükle. ZIP dosyasını tek başına yükleme.
4. GitHub'da depo > **Settings > Pages** menüsüne gir.
5. **Build and deployment > Source: Deploy from a branch** seç.
6. **Branch: main / (root)** ayarını seçip **Save** de.
7. Yayımlanmasını bekleyip `https://KULLANICIADIN.github.io/` adresini ziyaret et.

**Not:** Başka adlı bir depoda da kullanabilirsin. Bu durumda tipik site adresi `https://KULLANICIADIN.github.io/DEPOADI/` olur. Tüm CSS/JS yolları göreli tanımlandığı için bu senaryoda da çalışır.

## Dosyalar

```text
index.html             Sayfa yapısı ve metinler
styles.css             Stil, mobil uyumluluk ve tema
script.js              Tema, menü ve proje filtreleri
.nojekyll              Jekyll işleme aşamasını kapatır
assets/favicon.svg     Sekme simgesi
assets/social-preview.svg  Sosyal paylaşım görseli
README.md              Kurulum ve yayınlama yönergeleri
```

## Sınırlar

GitHub Pages statik site sunar; sunucu tarafı kodu veya veritabanını doğrudan çalıştırmaz. Mevcut e-posta bağlantısı telefonun/bilgisayarın e-posta uygulamasını açar; herhangi bir iletişim formu veri toplamıyor.

Resmi kaynak: [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart)
