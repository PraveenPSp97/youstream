import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { MdCheckCircle } from "react-icons/md";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setvideoDetails] = useState({
    snippet: {
      title: "",
    },
  });
  const [suggestedVideos, setsuggestedVideos] = useState([]);

  const fetchVideoDetails = () => {
    fetchApi("videos", {
      part: "contentDetails,snippet,statistics",
      id: `${id}`,
    }).then((res) => {
      setvideoDetails(res.items[0]);
    });
  };

  const fetchSuggestDetails = () => {
    fetchApi("search", {
      relatedToVideoId: `${id}`,
      part: "id,snippet",
      maxResults: "10",
      type: "video",
    }).then((res) => {
      setsuggestedVideos(res.items);
    });
  };
  useEffect(() => {
    fetchVideoDetails();
    fetchSuggestDetails();
  }, []);
  console.log("snippet", videoDetails);
  return (
    <Row style={{ background: "black", color: "white" }} className="p-2 p-md-5">
      <Col md={9}>
        <Row className="player-wrapper reactplayer">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="100%"
            controls={true}
            className="react-player"
          />
        </Row>
        <Row className="mt-4">
          <Col>
            <h3>{videoDetails && videoDetails.snippet.title}</h3>

            <h5 style={{ display: "inline", opacity: "0.7" }} className="m-1">
              {videoDetails.snippet.channelTitle}
            </h5>
            <MdCheckCircle className="m-1" />
          </Col>
        </Row>
        <Row>{/* <MdCheckCircle /> */}</Row>
      </Col>
      <Col md={3} style={{ overflowY: "scroll" }}>
        <Row className="overflow-auto">
          {suggestedVideos.map((suggestedVideo) => (
            <VideoCard key={suggestedVideo.id.videoId} video={suggestedVideo} />
          ))}
        </Row>
        <Row>
          <MdCheckCircle />
        </Row>
      </Col>
    </Row>
  );
};

export default VideoDetails;
