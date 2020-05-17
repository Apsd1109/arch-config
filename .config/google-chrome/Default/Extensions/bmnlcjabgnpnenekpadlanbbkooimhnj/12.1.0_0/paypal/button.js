// Check if paypal object is present on the current page
if (window.paypal
  && window.paypal.Buttons
  && window.paypal.Buttons.instances
  && window.paypal.Buttons.instances.length) {
  // Finds the element in which the PayPal Button will
  // be cloned

  const buttonContainer = document
  .getElementById('honeyContainer').shadowRoot
  .getElementById('paypal-button-clone');

  // Simulate click on find savings modal to close
  // Called after the PayPal modal/window pops up

  const closeHoneyModal = () => document
  .getElementById('honeyContainer').shadowRoot
  .getElementById('closeButton')
  .click();

  // Clones the PayPal Button (SPB) present on the page
  // Only works for the latest version of PayPal's SPB sdk
  // https://developer.paypal.com/docs/checkout/

  window.paypal.Buttons.instances[0].clone({
    decorate: (props) => {
      return {
        ...props,
        onClick: (...args) => {
          document.getElementById('honeyContainer').shadowRoot.getElementById('paypal-button-clone').click();
          closeHoneyModal();
          if (props.onClick) {
            return props.onClick(...args);
          }
          return null;
        },
        style: {
          color: 'gold',
          shape: 'rect',
          label: 'paypal',
        },
      };
    },
  }).render(buttonContainer);
}
