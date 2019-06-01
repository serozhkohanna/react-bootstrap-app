import setPoints from '../actions/setPoints';
import base from './base';

import request from 'superagent';

export default function getPoints () {
    return dispatch => base(
        request
            .get('/api/example/get-points')
    )
        .then(payload => {
            return dispatch(setPoints(payload));
        });
}
