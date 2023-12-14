function pesan() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const tipeGitar = document.getElementById("tipeGitar");
    const jumlah = document.getElementById("jumlah");
    if (name !== null)
        if (email !== null)
            if (tipeGitar !== null)
                if (jumlah !== null)
                    alert("Berhasil. Silahkan menunggu^^");
                else
                    alert("Gagal. Silahkan masukkan jumlah pemesanan");
            else
                alert("Gagal. Silahkan masukkan tipe gitar");
        else
            alert("Gagal. Silahkan masukkan email");
    else
        alert("Gagal. Silahkan masukkan nama");
}