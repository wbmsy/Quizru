import React from "react";

interface ListImageProps {
  listTitle: string;
  imageURL: string;
}

const ListImage: React.FC<ListImageProps> = ({ listTitle, imageURL }) => {
  return (
    <>
      <div className=" relative w-11/12 h-auto aspect-[4/3] m-2">
        <h2 className="absolute text-left text-xl font-bold text-white p-2 rounded-md bg-slate-800">
          {listTitle}
        </h2>
        <img
          className="w-full h-full rounded-md object-cover"
          src={imageURL}
          alt={listTitle}
        />
      </div>
    </>
  );
};

export default ListImage;
