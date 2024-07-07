export const ContactForm = () => {
  return (
    <form className="flex flex-col ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <label htmlFor="name">Jméno</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Příjmení</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
      </div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="message">Vaše zpráva</label>
      <textarea name="message" id="message"></textarea>
    </form>
  );
};
