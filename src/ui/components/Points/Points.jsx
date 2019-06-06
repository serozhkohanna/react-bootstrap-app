import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import getPoints from '../../../services/getPoints';

import styles from './Points.css';

const mapStateToProps = ({ application }) => {
    return {
        points: application.points
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPoints: () => dispatch(getPoints())
});

class Points extends Component {
    static propTypes = {
        points: PropTypes.array,
        getPoints: PropTypes.func.isRequired
    };

    static defaultProps = {
        points: []
    };

    componentDidMount () {
        this.props.getPoints();
    }

    render () {
        const { points } = this.props;

        return <section className={styles.container}>
            <ul>
               { /* points.map((point, i) => <li className={styles.point} key={i}>{point}</li>) */ }
             </ul>
        </section>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Points);
