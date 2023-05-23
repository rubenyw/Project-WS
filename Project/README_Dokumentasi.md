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

## Cara pakai validation supaya bisa di stack

    ```js
    const { error, value } = rate.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }
    ```

## Pembagian Controller

```json
"barang.js" : {
	"sender/request/pay/kirim_barang"

	"sender/request/pay/edit_barang"

	"sender/request/free/lacak_barang"

	"sender/request/pay/batalkan_barang"

	"sender/request/free/rating"

	"traveller/request/free/lihat_request"

	"traveller/request/free/terima_request"

	"traveller/request/free/complete_request"
}

"perjalanan.js" : {
	"sender/request/pay/cek_harga_durasi"

	"sender/request/free/lihat_riwayat"

	"traveller/request/pay/set_perjalanan"

	"traveller/request/free/lihat_riwayat"

	"traveller/free/complete_trip"
}

"saldo.js" : {
	"sender/request/free/topup_saldo"

	"sender/request/free/topup_kuota"

	"traveller/request/free/cek_saldo"

	"traveller/request/free/tarik_saldo"
}

"user.js" : {
	"register/sender"

	"register/travel"

	"login/sender"

	"login/traveller"
}
```
