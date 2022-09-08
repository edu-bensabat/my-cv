import { useEffect, useState } from "react";
import Presentation from "../main/Presentation";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mycurriculum-439eb-default-rtdb.firebaseio.com/presentation.json"
      );

      const data = await response.json();

      await setData(data);
    };
    fetchData();
  }, []);

  let component;

  if (data) {
    component = Object.values(data)[0];
    component = component.map((a, i) => (
      <Presentation key={i} title={a.title} text={a.text} />
    ));
  }

  return <section>{data && component}</section>;
};

export default Home;
