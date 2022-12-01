import emailjs from 'emailjs-com';


//   emailjs.sendForm('service_kl4nhbv','template_v9rmw9e', 'Jrc0SO05xvI0i7zUM')

export const Contacto = () => {
  const btn = document.getElementById('button');

  document.getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Enviando...';

      const serviceID = 'default_service';
      const templateID = 'template_v9rmw9e';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
  return (
<form id="form">
     <div class="mb-3">
    <div class="row">
      <div class="col-md-6 col-12">
        <label class="form-label" for="exampleForm.ControlInput1">Nombre</label>
      </div>
      <div class="col-md-6 col-12">
          <input name="from_name" placeholder="" type="text" id="exampleForm.ControlInput1" class="form-control"/>
      </div>
    </div>
     </div>
     <div class="mb-3">
  <div class="row">
    <div class="col-md-6 col-12">
        <label class="form-label" for="e-mail">Correo electrónico</label>
    </div>
    <div class="col-md-6 col-12">
        <input name="email" placeholder="" type="email" id="e-mail" class="form-control"/>
   </div>
  </div>
    </div>
    <div class="form-floating">
    <div class="row">
        <div class="col-md-6 col-12">
          <label class="form-label" for="comentario">Comentario</label>
        </div>
        <div class="col-md-6 col-12">
          <textarea name="message" placeholder="" id="comentario" class="form-control"></textarea>
        </div>
    </div>
      <label for="comentario"></label>
    </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="p-5 col">
        <button type="submit" value="Send" class="btn btn-success">Enviar</button> 
      </div>
    </div>
</form>
  
 
  )
}
export default Contacto