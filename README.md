# ReactJS-Amazon-Clone

Bu proje, React kullanarak yapılmış basit bir Amazon Clone uygulamasıdır. Bu uygulama, temel React özelliklerini kullanarak bir e-ticaret platformu benzeri bir arayüz sağlar.

## Proje Özellikleri

- **ReactJS**: Uygulama temel olarak ReactJS ile yapılmıştır.
- **JSX**: React bileşenleri JSX kullanılarak yazılmıştır.
- **CSS**: Tasarım için temel CSS stilleri kullanılmıştır.
- **React Router DOM**: Sayfalar arasında gezinmek için `react-router-dom` kullanılmıştır.
- **Context API**: Uygulama durumunu yönetmek için Context API kullanılmıştır.

## Bu projede aşağıdaki özellikler bulunmakta:

Responsive Header Tasarımı

Header sayfası tamamen responsive olarak tasarlanmıştır ve farklı ekran boyutlarına uyum sağlar.
Linkler, temsili olarak eklenmiş olup, şu anda işlevsel değildir.

Ürün Listeleme (Props ile Dinamik Veri)

Ürünler, React'in props metoduyla dinamik bir şekilde listelenir.
Ürün bilgileri, dışarıdan gelen verilere göre güncellenebilir.

Sepet Sayfası

Sepet sayfası tasarlanmıştır ve eklenen ürünler burada listelenir.
Sepete ürün eklediğinizde:
Header alanındaki sepet ikonu otomatik olarak sepet adetini günceller.
Sepete eklenen her ürün, sepet sayfasında ilgili ürün bilgileriyle birlikte görüntülenir.

Sepet Güncellemeleri ve Fiyat Hesaplama

Sepetteki her ürünün tutarı, adet bilgisine göre otomatik olarak hesaplanır.
Sepet özeti kısmında:
Toplam tutar, tüm ürünlerin adedine ve fiyatına göre dinamik olarak güncellenir.
Sepetteki toplam ürün sayısı ve toplam fiyat, kullanıcının işlemi izleyebilmesi için güncellenir.
