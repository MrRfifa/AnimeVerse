import { AudioOutlined } from "@ant-design/icons";
import { Button, Slider } from "antd";
import { useRef, useState } from "react";
import { PropTypes } from "prop-types";

const AudioComponent = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const handleSliderChange = (value) => {
    const audio = audioRef.current;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <Button icon={<AudioOutlined />} onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Slider
        value={currentTime}
        max={audioRef.current?.duration || 0}
        onChange={handleSliderChange}
      />
    </div>
  );
};

AudioComponent.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioComponent;
