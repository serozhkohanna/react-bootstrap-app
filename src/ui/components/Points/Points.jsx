import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import setPoints from '../../../actions/setPoints';

import styles from './Points.css';

const mapStateToProps = ({ application }) => {
    return {
        points: application.points
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPoints: (payload) => dispatch(setPoints(payload))
});

class Points extends Component {
    static propTypes = {
        points: PropTypes.array,
        setPoints: PropTypes.func.isRequired
    };

    static defaultProps = {
        points: []
    };

    handleLikeClick = i => () => {
        const { points } = this.props;
        const newPoints = [...points];

        newPoints[i].likes = newPoints[i].likes + 1

        this.props.setPoints(newPoints);
    };

    render () {
        const { points } = this.props;

        return <section className={styles.container}>
            <ul>
                { points.map((point, i) => {
                    return <li className={styles.point} key={i}>
                        Лайки: {point.likes} <button onClick={this.handleLikeClick(i)}>Добавить лайк</button>
                    </li>;
                }) }
            </ul>
        </section>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Points);
