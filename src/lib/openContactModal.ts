export function openContactModal() {
  const dialog = document.getElementById('contact-modal');
  if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
}
