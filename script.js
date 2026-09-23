document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Variables
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validación 1: Nombre debe tener al menos 3 caracteres
  if (nombre.length < 3) {
    alert('El nombre debe tener al menos 3 caracteres.');
    return;
  }

  // Validación 2: Correo debe tener formato válido
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    alert('Por favor ingresa un correo electrónico válido.');
    return;
  }

  // Validación 3: Teléfono debe ser numérico y de al menos 10 dígitos
  const telefonoRegex = /^[0-9]{10,}$/;
  if (!telefonoRegex.test(telefono)) {
    alert('El teléfono debe contener al menos 10 dígitos numéricos.');
    return;
  }

  // Validación 4: Debe seleccionar al menos un interés
  if (intereses.length === 0) {
    alert('Selecciona al menos un interés.');
    return;
  }

  // Validación 5: La fecha debe ser futura
  const hoy = new Date();
  const fechaEvento = new Date(fecha);
  if (fechaEvento <= hoy) {
    alert('La fecha del evento debe ser posterior a hoy.');
    return;
  }

  // Si todo está bien
  alert('Registro exitoso. ¡Gracias por registrarte!');
});
