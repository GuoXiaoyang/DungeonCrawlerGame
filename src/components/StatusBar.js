import React from 'react';
import PropTypes from 'prop-types';
import PlayerStat from './PlayerStat';
import GameStat from './GameStat';
import '../styles/statusBar.css';


const StatusBar = (props) => {
  const { player, game } = props;
  return (
    <div className="status">
      <PlayerStat player={player}/>
      <GameStat game={game}/>
      <div>
        <div>
          <button className="button">Toggle Darkness</button>
        </div>
        <div>
          <button className="button">Restart Game</button>
        </div>       
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  player: PropTypes.object.isRequired,
  game:  PropTypes.object.isRequired
};

export default StatusBar;
