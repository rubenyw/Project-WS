# NOTES

## Cara Pakai API RajaOngkir di Axios

-   Berikut Penggunaan Api Raja Ongkir dengan Axios

    ```js
    const { default: axios } = require("axios");
    const result = await axios.get("https://api.rajaongkir.com/starter/city", {
        headers: {
            key: "api-key-kita", // API key pas daftar akun
        },
    });
    ```

## Pembagian Controller

```json
"barang.js" : {
	"sender/request/kirim_barang"
	"sender/request/edit_barang"
	"sender/request/lacak_barang"
	"sender/request/batalkan_barang"
	"sender/request/rating"
	"traveller/request/lihat_request"
	"traveller/request/terima_request"
	"traveller/request/complete_request"
}

"perjalanan.js" : {
	"sender/request/cek_harga_durasi"
	"sender/request/lihat_riwayat"
	"traveller/request/set_perjalanan"
	"traveller/request/lihat_riwayat"
	"traveller/complete_trip"
}

"saldo.js" : {
	"sender/request/topup_saldo"
	"sender/request/topup_kuota"
	"traveller/request/cek_saldo"
	"traveller/request/tarik_saldo"
}

"user.js" : {
	"register/sender"
	"register/travel"
	"login/sender"
	"login/traveller"
}
```

## Cara membuatnya gimana?

    -   Kita bisa membuat website biasa dengan html/css biasa lalu kita buat sendiri
    -   Atau kalau mau otomatis bisa menggunakan postman

## Step by step membuat dokumentasi postman

    -   Buat dulu collection (supaya rapi saja dokumentasi kita dan jadi 1)
    -   Buat dulu sebuah http request di postman menuju ke endpoint kita (di dalam collectionnya)
    -   Pastikan endpoint berhasil ditembak

    -   Kalau berhasil ditembak, akan menampilkan sebuah tombol bernama save as example (diatas responsenya)
        -   Tombol save as example ini supaya dokumentasi kita nanti memiliki contoh hasil kembalian
        -   Kita bisa membuat banyak example dari sebuah request, misalnya contoh request dengan parameter A,B,C dan contoh request hanya dengan parameter A misalnya
        -   Untuk setiap example jangan lupa untuk di rename kalau mau lebih jelas

    -   Pada collection klik options (icon titik tiga) > view documentation
        -   Perhatikan, jika kita tidak buat example maka dokumentasi kita cuman berisi method, nama, URL, lalu parametersnya saja
        -   Namun jika kita sudah membuat example maka dokumentasi kita dilengkapi dengan contoh hasil kembalian/response

## Membuat dokumentasi yang deskriptif

    -   Collection description : untuk mengubah deskripsi dari collection kalian
    -   Request description : untuk mengubah deskripsi dari request kalian
    -   Parameter description : untuk mengubah deskripsi dari parameter inputan yang diharapkan
    -   Pada deskripsi bisa menambahkan markdown-markdown sederhana misal nya `code`, *italic*, **bold**
    -   Contoh semua markdown bisa dibaca disini https://markdownlivepreview.com

## Publishing dokumentasi kita

    -   Jika dokumentasi sudah oke, di halaman view documentation, kalian bisa klik publish
    -   WARNING, untuk publish sepertinya kalian harus sudah membuat sebuah account dulu
    -   Hasil publish bisa kalian preview dulu sebelum kalian publish secara real
    -   Setting, kita bisa mengubah beberapa settingan
        -   Versi
        -   Environment kita
        -   Custom domain
        -   Bentuk dokumentasi, bisa kiri kanan (double column), bisa atas bawah (single column)
        -   Warna-warna dokumentasi kita
    -   Custom domain:
        -   Jika kita kepingin untuk menggunakan domain kita sendiri (tidak pakai punyanya postman), kita bisa setting dulu domain kita, cuman dalam kuliah ini tidak akan saya demokan karena harus menambahkan entri TXT DNS ke hostingan kita (DNS Zone Editor)
        -   Silakan baca ini dulu ya : https://learning.postman.com/docs/publishing-your-api/custom-doc-domains/#adding-a-custom-domain
    -   Setelah di publish, pengguna kita bisa menggunakan beberapa fitur seperti:
        -   Atur layout, atur environment, dan atur dokumentasi cara menembak mau dalam bentuk bahasa apa

# Auto Testing

## Steps untuk automated testing

    -   Buat sebuah request baru
    -   Pilih tab test, jangan lupa pada tab dibawah(dibagian response diganti menjadi test result)
    -   Postman menggunakan sebuah library bernama Chai.js https://www.chaijs.com/api/bdd/
    -   Postman juga menyediakan console, untuk menangkap console.log kita, jadi kalian bisa cek di footnote (bar paling bawah di postman kita) bagian console

# Sebagai tambahan ajarkan juga mengenai ENV

    -   Setiap program bahkan postman sebaiknya menggunakan env jadi kita bisa ganti environment nya sesuka hati

QueryBukuORM

```js
pm.test("Status code sudah benar (200)", function () {
    // pm.response.to.have.status(200);
    pm.expect(pm.response.code).equal(200);
});

pm.test(
    `Pencarian dengan parameter keyword=${pm.variables.get(
        "var_keyword"
    )}, tahun_terbit_awal, tahun_terbit_akhir`,
    function () {
        // console.log(pm.request)

        const params = pm.request.url.query.reduce((hasil, item) => {
            return { ...hasil, [item.key]: item.value };
        }, {});
        console.log(params);

        const hasil = pm.response.json();
        for (h of hasil) {
            // pm.expect(h.buku_nama.toLowerCase()).include(params.keyword)
            // pm.expect(Number(h.buku_tahun_terbit)).gte(params.tahun_terbit_awal).and.lte(params.tahun_terbit_akhir)
            pm.expect(h).satisfy(() => {
                return (
                    h.buku_nama.toLowerCase().includes(params.keyword) ||
                    (h.buku_tahun_terbit >= params.tahun_terbit_awal &&
                        h.buku_tahun_terbit <= params.tahun_terbit_akhir)
                );
            });
        }
    }
);

pm.test("Struktur kembalian benar", function () {
    const hasil = pm.response.json();
    pm.expect(h).have.keys([
        "buku_nama",
        "keterangan_lengkap",
        "buku_tahun_terbit",
    ]);
});
```

StoreBukuORM

```js
pm.test("Status code sudah benar", function () {
    const body = pm.request.body.urlencoded.reduce((hasil, item) => {
        if (!item.disabled) {
            return { ...hasil, [item.key]: item.value };
        } else {
            return { ...hasil };
        }
    }, {});
    console.log(body);

    if (
        body.buku_nama === undefined ||
        body.buku_tahun_terbit === undefined ||
        body.kategori_id === undefined
    ) {
        pm.expect(pm.response.code).equal(400);
    } else {
        pm.expect(pm.response.code).equal(200);
    }
});

pm.test("Kembalian sudah benar", function () {
    const hasil = pm.response.json();
    pm.expect(hasil.msg)
        .include("Berhasil insert buku dengan id ")
        .and.not.include("undefined");
});
```
