// Attributes
const planToggler = document.querySelector('#planToggler');

const plans = {
  monthly: {
    basic: '19.99',
    pro: '24.99',
    master: '39.99',
  },
  annually: {
    basic: '199.99',
    pro: '249.99',
    master: '399.99',
  },
};

// Functions
const handlePlanChange = e => {
  const checked = planToggler.checked;
  const priceElements = document.querySelectorAll(`[data-plan]`);

  for (const p of priceElements) {
    const type = checked ? 'monthly' : 'annually';
    const plan = p.getAttribute('data-plan');
    p.innerHTML = plans[type][plan];
  }
};

// Events
window.addEventListener('load', handlePlanChange);
planToggler.addEventListener('change', handlePlanChange);
