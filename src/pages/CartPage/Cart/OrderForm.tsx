export const OrderForm = () => {
  return (
    <form>
      <div>Enter your first name:</div>
      <input type="text" />
      <div>Enter your last name:</div>
      <input type="text" />
      <div>Enter your mobile phone number:</div>
      <input type="text" />
      <button onClick={(event) => event.preventDefault()}>
        Proceed to Checkout
      </button>
    </form>
  );
};
