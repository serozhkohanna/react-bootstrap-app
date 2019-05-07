import setPoints from '../actions/setPoints';
import base from './base';

import prop from '@tinkoff/utils/object/prop';

import request from 'superagent';

export default function getPoints () {
    return dispatch => base(
        request
            .get('/api/example/get-points')
    )
        .then(payload => {
            const points = prop('body', payload);

            return dispatch(setPoints(points));
        });
}
