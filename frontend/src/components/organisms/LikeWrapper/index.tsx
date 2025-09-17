import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { LikeWrapper } from "./styled";
import { getLikes } from "../../../services/apicalls/getcall";
import { doLike } from "../../../services/apicalls/updatecall";

const LikeFeature = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    const { data, error } = await getLikes();
    if (!error && data) {
      setLikes(data.count);
    }
  };

  const handleLike = async () => {
    if (liked) return;
    const { data, error } = await doLike(likes);
    if (!error && data) {
      setLikes(data.count);
      setLiked(true);
    }
  };

  return (
    <LikeWrapper>
      <button
        className={liked ? "liked" : ""}
        onClick={handleLike}
        aria-label="Like"
      >
        <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
      </button>
      <span>{likes}</span>
    </LikeWrapper>
  );
};

export default LikeFeature;
