import { Padding } from "@mui/icons-material";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { snippet, id } = video;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <Row style={{ color: "white" }}>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to={`/VideoDetails/${id.videoId}`}
      >
        <Col md={6}>
          <img
            src={thumbnails.high.url}
            alt=""
            style={{
              width: "378px",
              height: "280px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </Col>
        <Col>
          <div>
            <span>
              <h5>{title}</h5>
            </span>
            <p style={{ opacity: 0.7, marginTop: "3px" }}>{channelTitle}</p>
          </div>
        </Col>
      </Link>
    </Row>
  );
};

export default VideoCard;
