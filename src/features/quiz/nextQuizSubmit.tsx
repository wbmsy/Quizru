const nextQuizSubmit = (
  e: React.MouseEvent<HTMLButtonElement>,
  dbid: string,
  num: number
) => {
  e.preventDefault();
  window.location.href = `/quiz/${dbid}/${Number(num) + 1}`;
};

export default nextQuizSubmit;
