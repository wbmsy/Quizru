import getQuizData from "./getQuizData";

export const judgeDBorQuiz = async (db_id: string) => {
  const quizData = await getQuizData(db_id);
  const resNum: number = quizData.results.length;
  let isAllHasData = true;
  let i = 0;

  while (isAllHasData && i < resNum) {
    const properties = quizData.results[i].properties;
    if (!properties.data?.rich_text[0]?.mention?.database) {
      isAllHasData = false;
    }
    i++;
  }

  switch (isAllHasData) {
    case true:
      return "DB";
    case false:
      return "Quiz";
    default:
      return "Unknown";
  }
};

export const getQuizDatabase = async (db_id: string) => {
  const quizData = await getQuizData(db_id);
  const quizDataLength: number = quizData.results.length;
  const QuizDatabase: QuizDatabase[] = [];

  for (let i = 0; i < quizDataLength; i++) {
    const properties = quizData.results[i].properties;

    const title: string = properties.title
      ? properties.title.title[0]
        ? properties.title.title[0].plain_text
        : "none"
      : "none";

    const imageURL: string = properties.image
      ? properties.image.files[0]
        ? properties.image.files[0].file
          ? properties.image.files[0].file.url
          : properties.image.files[0].external
          ? properties.image.files[0].external.url
          : "/NO-IMAGE.jpg"
        : "/NO-IMAGE.jpg"
      : "/NO-IMAGE.jpg";

    const db_id: string = properties.data
      ? properties.data.rich_text[0]
        ? properties.data.rich_text[0].mention.database.id
        : ""
      : "";

    QuizDatabase[i] = {
      title: title,
      imageURL: imageURL,
      data: {
        db_id: db_id,
      },
    };
  }
  return { QuizDatabase };
};

export const getQuizListData = async (db_id: string) => {
  const quizData = await getQuizData(db_id);
  const quizDataLength: number = quizData.results.length;

  const QuizListData: QuizListData[] = [];
  for (let i = 0; i < quizDataLength; i++) {
    const properties = quizData.results[i].properties;

    const title: string = properties.title
      ? properties.title.title[0]
        ? properties.title.title[0].plain_text
        : ""
      : "";
    const imageURL: string = properties.image
      ? properties.image.files[0]
        ? properties.image.files[0].file
          ? properties.image.files[0].file.url
          : properties.image.files[0].external
          ? properties.image.files[0].external.url
          : "none"
        : "none"
      : "none";

    const default_format: string = properties.default_format
      ? properties.default_format.select
        ? properties.default_format.select.name
        : "write"
      : "write";

    //オプションをある分だけ取ってくる
    let isHasMoreOption = true;
    const optionArray: string[] = [];
    let k = 1;
    while (isHasMoreOption) {
      if (properties["option_" + k]) {
        if (properties["option_" + k].rich_text[0]) {
          optionArray[k - 1] =
            properties["option_" + k].rich_text[0].plain_text;
        } else {
          isHasMoreOption = false;
        }
      } else {
        isHasMoreOption = false;
      }
      k++;
    }

    // 今のところ使用していないが、クイズデータにデータベースを紐づける際(複数解答欄を設ける機能など)で使用予定。
    // const db_id = properties.data
    //   ? properties.data.rich_text[0]
    //     ? properties.data.rich_text[0].mention.database
    //       ? properties.data.rich_text[0].mention.database.id
    //       : ""
    //     : ""
    //   : "";

    QuizListData[i] = {
      title: title,
      imageURL: imageURL,
      default_format: default_format,
      option: optionArray,
      // 今のところ使用していないが、クイズデータにデータベースを紐づける際(複数解答欄を設ける機能など)で使用予定。
      // data: {
      //   db_id: db_id,
      // },
    };
  }
  return { QuizListData };
};

export const getQuizCorrectAnswer = async (db_id: string, num: number) => {
  const quizData = await getQuizData(db_id);
  const rightArray: string[] = [];
  const properties = quizData.results[num - 1].properties;

  //答えをある分だけ取ってくる
  let isHasMoreCorrectAnswer = true;
  let i = 1;
  while (isHasMoreCorrectAnswer) {
    if (properties["correct_" + i]) {
      if (properties["correct_" + i].rich_text[0]) {
        rightArray[i - 1] = properties["correct_" + i].rich_text[0].plain_text;
      } else {
        isHasMoreCorrectAnswer = false;
      }
    } else {
      isHasMoreCorrectAnswer = false;
    }
    i++;
  }
  return rightArray;
};
