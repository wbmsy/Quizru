const getDatabaseProperties = (res: any) => {
  // console.log(res);
  let isAllHasDB = true;
  let DB = [];
  let QuizList = [];

  const resNum = res.results.length;

  let i = 0;
  while (isAllHasDB == true && i < resNum) {
    const properties = res.results[i].properties;
    if (
      !properties.data?.rich_text[0] ||
      !properties.data?.rich_text[0].mention.database
    ) {
      isAllHasDB = false;
    }
    i++;
  }

  if (isAllHasDB == true) {
    for (let i = 0; i < resNum; i++) {
      const properties = res.results[i].properties;

      const title = properties.title.title[0]
        ? properties.title.title[0].plain_text
        : "";
      const imageURL = properties.image.files[0]
        ? properties.image.files[0].file
          ? properties.image.files[0].file.url
          : properties.image.files[0].external.url
        : "/NO-IMAGE.jpg";
      const dbid = properties.data.rich_text[0]
        ? properties.data.rich_text[0].mention.database.id
        : "";

      DB[i] = {
        title: title,
        imageURL: imageURL,
        data: {
          dbid: dbid,
        },
      };
    }
    return { isAllHasDB, DB };
  } else if (isAllHasDB == false) {
    console.warn(
      "データベースが設定されていない要素があります。自動的にクイズデータとして扱います。意図していない場合は修正してください。"
    );
    for (let i = 0; i < resNum; i++) {
      const properties = res.results[i].properties;

      const title = properties.title
        ? properties.title.title[0]
          ? properties.title.title[0].plain_text
          : ""
        : "";
      const imageURL = properties.image.files[0]
        ? properties.image.files[0].file
          ? properties.image.files[0].file.url
          : properties.image.files[0].external.url
        : "none";

      //答えをある分だけ取ってくる
      let isHasMoreRight = true;
      let rightArray = [];
      let j = 1;
      while (isHasMoreRight == true) {
        properties["right_" + j]
          ? properties["right_" + j].rich_text[0]
            ? (rightArray[j - 1] =
                properties["right_" + j].rich_text[0].plain_text)
            : (isHasMoreRight = false)
          : (isHasMoreRight = false);
        j++;
      }

      const default_format = properties.default_format
        ? properties.default_format.select
          ? properties.default_format.select.name
          : "write"
        : "write";

      let isHasMoreOption = true;
      let optionArray = [];
      let k = 1;
      while (isHasMoreOption == true) {
        properties["option_" + k]
          ? properties["option_" + k].rich_text[0]
            ? (optionArray[k - 1] =
                properties["option_" + k].rich_text[0].plain_text)
            : (isHasMoreOption = false)
          : (isHasMoreOption = false);
        k++;
      }

      const dbid = properties.data
        ? properties.data.rich_text[0]
          ? properties.data.rich_text[0].mention.database
            ? properties.data.rich_text[0].mention.database.id
            : ""
          : ""
        : "";

      QuizList[i] = {
        title: title,
        imageURL: imageURL,
        rightArray: rightArray,
        default_format: default_format,
        option: optionArray,
        data: {
          dbid: dbid,
        },
      };
    }
    return { isAllHasDB, QuizList };
  } else {
    console.error("予期せぬエラーが発生しました。");
  }
};

export default getDatabaseProperties;
