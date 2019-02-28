
import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as api from '../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* getTestimonialData() {
  const { data } = yield call(api.getTestimonialData);
  yield put({ type: t.SET_TESTIMONIAL_DATA, data });
}

function* actionWatcher() {
  yield takeLatest(t.GET_TESTIMONIAL_DATA, getTestimonialData);
}

export default function* sagas() {
  yield all([
    actionWatcher(),
  ]);
}
