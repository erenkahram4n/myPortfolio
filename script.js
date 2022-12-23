$("#hesapla").click(function(){
    let kodlanacak = $("#kodlanacak").val();
    let nekadari = $("#nekadari").val();
    let sure = $("#sure").val();
    if(kodlanacak == "seciniz1" || nekadari == "seciniz2" || sure == "seciniz3"){
        alert("Tüm Seçimler Yapılmak Zorundadır!");
    }
    else if(kodlanacak == "website" && nekadari == "birkismi" && sure == "1hafta"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺2500");
    }
    else if(kodlanacak == "website" && nekadari == "tamami" && sure == "1hafta"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺5000");
    }
    else if(kodlanacak == "website" && nekadari == "birkismi" && sure == "2ay"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺1250");
    }
    else if(kodlanacak == "website" && nekadari == "tamami" && sure == "2ay"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺3500");
    }
    else if(kodlanacak == "mobil" && nekadari == "birkismi" && sure == "1hafta"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺4500");
    }
    else if(kodlanacak == "mobil" && nekadari == "tamami" && sure == "1hafta"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺8000");
    }
    else if(kodlanacak == "mobil" && nekadari == "birkismi" && sure == "2ay"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺3000");
    }
    else if(kodlanacak == "mobil" && nekadari == "tamami" && sure == "2ay"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺6000");
    }
    else if(kodlanacak == "oyun" && nekadari == "birkismi" && sure == "1hafta"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺8000");
    }
    else if(kodlanacak == "oyun" && nekadari == "tamami" && sure == "1hafta"){
        alert("Biraz İmkansız Gibi Gözüküyor!");
    }
    else if(kodlanacak == "oyun" && nekadari == "birkismi" && sure == "2ay"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺6500");
    }
    else if(kodlanacak == "oyun" && nekadari == "tamami" && sure == "2ay"){
        alert("Tahmini Ödemeniz Gereken Ücret : ₺14000");
    }
    else{
        alert("Bir Problem Oluştu, Formu Tekrar Doldurunuz.")
    }
})

$("#gonder").click(function(){
    let isim = $("#isim").val();
    let tel = $("#tel").val();
    let email = $("#email").val();
    let aciklama = $("#aciklama").val();
    if(isim != "" && tel != "" && email != ""){
        alert("Sayın, " + isim + ". Teşekkürler! Bilgileriniz Bize Ulaşmıştır.");
        $("#isim").val("");
        $("#tel").val("");
        $("#email").val("");
        $("#aciklama").val("");
    }
    else{
        alert("Lütfen Bilgileri Doğru Şekilde Doldurunuz!");
    }
})