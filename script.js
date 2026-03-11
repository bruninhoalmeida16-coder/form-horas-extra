function sendWhatsapp() {
      let idtel = document.getElementById("idtel").value;
      let nome = document.getElementById("nome").value;
      let supervisor = document.getElementById("supervisor").value;
      let percentual = document.getElementById("percentual").value;
      let data = document.getElementById("data").value;
      let inicio = document.getElementById("inicio").value;
      let fim = document.getElementById("fim").value;
      let ta = document.getElementById("ta").value;
      let site = document.getElementById("site").value;
      let localidade = document.getElementById("localidade").value;
      const inputData = document.querySelector('input[type="date"]');
      const dataIso = data ;
      const dataBrasil = dataIso.split('-').reverse().join('/');

      let phoneNumber = ' 5517981661247 ';

      let url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text="  

       + "*Horas Extras⏱*" + "%0a" 
        + "%0a" 
        + "*Id.Tel:* " + idtel + "%0a"
        + "*Nome:* " + nome + "%0a" 
        + "*Supervisor:* " + supervisor+ "%0a"
        + "" + percentual + "%0a"
        + "*Data:* " + dataBrasil + "%0a"
        + "*Inicio:* " + inicio + "%0a"
        + "*Fim:* " + fim + "%0a"
        + "*Ta:* " + ta + "%0a"
        + "*Site:* " + site + "%0a"
        + "*Localidade:* " + localidade ;
        
        
      window.open(url, "_blank").focus;
    }
    
 