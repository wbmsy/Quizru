const getQuizData = async (apiBase: string, dbid: string) => {
  const res = await fetch(`${apiBase}/api/notion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dbid }),
  });
  if (res.status == 500) {
    return "error";
  } else {
    return res.json();
  }
};

export default getQuizData;
