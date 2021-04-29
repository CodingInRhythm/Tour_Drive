const AudioSlider = ({value, duration}) => {

return (
    <input
    type="range"
    value={value}
    step="1"
    min="0"
    max={duration ? duration : `${duration}`}
    className="progress"
    onChange={(e) => onScrub(e.target.value)}
    onMouseUp={onScrubEnd}
    onKeyUp={onScrubEnd}
    />
)
}

export default AudioSlider