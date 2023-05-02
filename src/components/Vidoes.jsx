import React, { useContext, useEffect, useState } from "react";
import { fetchApi } from "../utils/fetchFromApi";
import VideoCard from "./VideoCard";
import { Col, Container, Row } from "react-bootstrap";
// import SearchProvider from "../provider/searchProvider";

const Vidoes = ({ selectedCatogory }) => {
  const [vidoes, setvidoes] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=id,snippet&&q=${selectedCatogory}`).then((data) => {
      console.log(data);
      setvidoes(data.items);
    });
  }, [selectedCatogory]);

  console.log(vidoes);
  return (
    <Container fluid style={{ backgroundColor: "black", color: "white" }}>
      <Row>
        <h4 key={selectedCatogory} style={{ color: "white" }}>
          {" "}
          {selectedCatogory} Videos
        </h4>
      </Row>
      <Row>
        {vidoes.map((video) => (
          <>
            {video.id.videoId && (
              <Col
                md={3}
                style={{ width: "380px", padding: "2px", margin: "1rem" }}
              >
                <VideoCard key={video.id.videoId} video={video} />
              </Col>
            )}
          </>
        ))}
      </Row>
    </Container>
  );
};

export default Vidoes;
