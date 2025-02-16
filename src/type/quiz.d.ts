type QuizDatabase = {
  title: string;
  imageURL: string;
  data: {
    db_id: string;
  };
};

type QuizListData = {
  title: string;
  imageURL: string;
  default_format: string;
  option: string[];
};
