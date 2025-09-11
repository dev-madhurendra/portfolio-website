import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import styled, { keyframes } from "styled-components";
import { supabase } from "../../../services/apicalls/supabaseClient";

// Bubble animation
const bubble = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.4); }
  60% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const LikeWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 5rem; 
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 10;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: transform 0.2s ease;

    &.liked {
      color: #e1306c; 
      animation: ${bubble} 0.4s ease;
    }
  }

  span {
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 1024px) {
    top: auto;
    bottom: 2rem;
    right: 50%;
    transform: translateX(50%);
    button {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    bottom: 1.5rem;
    button {
      font-size: 1.25rem;
    }
  }
`;

const LikeFeature = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    const { data, error } = await supabase
      .from("likes")
      .select("count")
      .eq("id", 1)
      .single();

    if (!error && data) {
      setLikes(data.count);
    }
  };

  const handleLike = async () => {
    if (liked) return;

    const { data, error } = await supabase
      .from("likes")
      .update({ count: likes + 1 })
      .eq("id", 1)
      .select("count")
      .single();

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
