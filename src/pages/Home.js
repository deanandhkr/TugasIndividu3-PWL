import { useEffect, useState } from "react";
import axios from "axios";
import { Image, Carousel } from "react-bootstrap";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=sports&from=2023-09-15&sortBy=publishedAt&apiKey=2cec721a651f4b1a80436877904cba3b`
        );
        setData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Carousel>
        {data.slice(2, 5).map((news, index) => (
          <Carousel.Item key={index}>
            <Image
              style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
              src={news.urlToImage}
              alt={news.title}
            />
            <Carousel.Caption>
              <h6 style={{ marginBottom: "0.5rem" }}>{news.title}</h6>
              <p style={{ fontSize: "0.9rem" }}>{news.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ padding: "10px", fontSize: "14px", textAlign: "center" }}>
        Outlet Home
      </div>
    </>
  );
}
