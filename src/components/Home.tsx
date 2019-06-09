import React, { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Home.css";

const allNames = [
  "/images/2018-11-30 15-08-06.JPG",
  "/images/2018-11-30 15-08-15.JPG",
  "/images/2018-12-15 21-56-50.JPG",
  "/images/2018-12-17 22-04-56.JPG",
  "/images/2018-12-17 22-30-19.JPG",
  "/images/2018-12-22 13-49-08.JPG",
  "/images/2018-12-23 21-47-01.JPG",
  "/images/2019-04-06 20-42-37.JPG",
  "/images/2019-04-14 11-57-02.JPG",
  "/images/2019-04-16 22-31-13.JPG",
  "/images/2019-04-23 21-33-25.JPG",
  "/images/2019-04-29 21-14-29.JPG",
  "/images/2019-05-09 18-42-15.JPG",
  "/images/2018-12-28 22-33-01_1546065932553.JPG",
  "/images/2019-01-13 14-58-42.JPG",
  "/images/2019-01-25 20-19-00_1548656456112.JPG",
  "/images/2019-02-02 13-21-26.JPG",
  "/images/2019-02-27 15-33-48.JPG",
  "/images/2019-03-05 19-32-26.JPG",
  "/images/2019-03-05 19-33-39.JPG",
  "/images/2019-04-07 13-37-26.JPG",
  "/images/2019-05-09 18-42-15_1557457050733.JPG",
  "/images/2019-05-14 18-05-06.JPG",
  "/images/2019-05-16 15-24-46.JPG",
  "/images/2019-05-17 13-00-17.JPG",
  "/images/2019-05-17 13-22-22.JPG",
  "/images/2019-03-05 19-34-52_1551816924119.JPG",
  "/images/2019-03-17 15-41-22_1552857961293.JPG",
  "/images/2019-03-26 11-08-51.JPG",
  "/images/2019-03-27 22-18-41.JPG",
  "/images/2019-04-01 16-54-25.JPG",
  "/images/2019-04-06 12-36-55.JPG",
  "/images/2019-04-06 20-32-29.JPG",
  "/images/2019-04-10 14-57-06.JPG",
  "/images/2019-05-17 13-24-09.JPG",
  "/images/2019-05-21 22-18-56.JPG",
  "/images/2019-05-27 09-00-49.JPG",
  "/images/2019-05-27 15-25-43.JPG",
  "/images/2019-06-04 14-16-37.JPG",
  "/images/2019-06-04 14-17-01.JPG",
];

const column1 = allNames.slice(0,9);
const column2 = allNames.slice(10,19);
const column3 = allNames.slice(20,29);
const column4 = allNames.slice(30,40);

const ImageColumn: FunctionComponent<{ src: string[]}> = props => {
  const result = props.src.map(x => {
    return <LazyLoadImage key={x} src={x} />;
  });
  return <div className="column">
      {result}
    </div>;
};

export const Home: FunctionComponent = () => {
  return (
    <div className="row">
        <ImageColumn src={column1} />
        <ImageColumn src={column2} />
        <ImageColumn src={column3} />
        <ImageColumn src={column4} />
    </div>
  );
};
