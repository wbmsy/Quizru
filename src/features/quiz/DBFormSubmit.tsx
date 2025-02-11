const DBFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const input = form.querySelector("#DataBaseID") as HTMLInputElement;
  window.location.href = `/quiz/${input.value}`;
};

export default DBFormSubmit;
