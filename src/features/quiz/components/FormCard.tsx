import React from "react";

interface CardProps {
  title: string;
  imageURL: string;
  default_format: string;
  option: string[];
  labelText: string;
  value: string;
  placeholder: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormCard: React.FC<CardProps> = ({
  title,
  imageURL,
  default_format,
  option,
  labelText,
  value,
  placeholder,
  onSubmit,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-[500px] mx-auto border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {title}
        </h2>
        {imageURL != "none" && (
          <img className="w-full h-auto mb-4" src={imageURL} alt={title} />
        )}
        {default_format == "write" && (
          <>
            <form onSubmit={onSubmit}>
              <label
                className="block text-gray-700 text-md font-semibold mb-2"
                htmlFor="text"
              >
                {labelText}
              </label>
              <div className="mb-4">
                <input
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 font-medium"
                  type="text"
                  defaultValue={value}
                  placeholder={placeholder}
                  id="text"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                送信する
              </button>
            </form>
          </>
        )}
        {default_format == "select" && (
          <>
            <form onSubmit={onSubmit}>
              {option
                .sort(() => Math.random() - 0.5)
                .map((item, index) => (
                  <div key={index} className="mb-4">
                    <label
                      htmlFor={item}
                      className="flex items-center space-x-4 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer"
                    >
                      <input
                        className="form-radio h-6 w-6 text-blue-600 transition duration-150 ease-in-out"
                        type="radio"
                        name="radio"
                        id={item}
                      />
                      <span className="block text-base font-semibold text-gray-800">
                        {item}
                      </span>
                    </label>
                  </div>
                ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                送信する
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default FormCard;
