import PropTypes from 'prop-types';

const Controls = ({
  resetGrid,
  nextGeneration,
  toggleHeatmap,
  toggleAutoplay,
  isRunning,
  setSpeed,
  speed,
}) => {
  const handleSpeedChange = (e) => {
    setSpeed(parseInt(e.target.value));
  };


  return (
    <div>
      <button onClick={resetGrid}>Reset</button>
      <button onClick={nextGeneration} disabled={isRunning}>
        Next frame
      </button>
      <button onClick={toggleHeatmap}>HeatMap</button>
      <button onClick={toggleAutoplay}>{isRunning ? 'Stop' :
      'Autoplay'}</button>
      <label>
        Speed:
        <input
          type="range"
          min="100"
          max="1000"
          value={isRunning ? undefined : speed}
          onChange={handleSpeedChange}
          disabled={isRunning}
        />
        {speed} millisecond
      </label>
    </div>
  );
};

Controls.propTypes = {
  resetGrid: PropTypes.func.isRequired,
  nextGeneration: PropTypes.func.isRequired,
  toggleHeatmap: PropTypes.func.isRequired,
  toggleAutoplay: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  setSpeed: PropTypes.func.isRequired,
  speed: PropTypes.number,
};


export default Controls;