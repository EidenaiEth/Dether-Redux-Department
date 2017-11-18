/* ------------------------- External Dependencies -------------------------- */
import { put, takeEvery } from 'redux-saga/effects';
import dether from 'detherjs'

/* ------------------------- Internal Dependencies -------------------------- */

import {
  DETHER_GET_TELLERS_ALL_REQUEST,
  DETHER_GET_TELLER_REQUEST,
  DETHER_GET_TELLER_BALANCE_REQUEST,
  DETHER_GET_TELLERS_IN_ZONE_REQUEST,
  DETHER_GET_USER_REQUEST,
  DETHER_ADD_SELL_POINT_REQUEST,
  DETHER_DELETE_SELL_POINT_REQUEST,
  DETHER_GET_ADDRESS_REQUEST,
  DETHER_GET_BALANCE_REQUEST,
  DETHER_GET_INFO_REQUEST,
  DETHER_SEND_TO_BUYER_REQUEST,
} from './actions'
import {
  detherGetTellersAllSuccess,
  detherGetTellersAllFailure,
  detherGetTellerSuccess,
  detherGetTellerFailure,
  detherGetTellerBalanceSuccess,
  detherGetTellerBalanceFailure,
  detherGetTellersInZoneSuccess,
  detherGetTellersInZoneFailure,
  detherGetUserSuccess,
  detherGetUserFailure,
  detherAddSellPointSuccess,
  detherAddSellPointFailure,
  detherDeleteSellPointSuccess,
  detherDeleteSellPointFailure,
  detherGetAddressSuccess,
  detherGetAddressFailure,
  detherGetBalanceSuccess,
  detherGetBalanceFailure,
  detherGetInfoSuccess,
  detherGetInfoFailure,
  detherSendToBuyerSuccess,
  detherSendToBuyerFailure,
} from './actions'

console.log(DetherJS)
const DetherJS = new dether()
const DetherUser = DetherJS.getUser()

/*---*--- Get Tellers All ---*---*/
function* getTellersAll({payload, metadata}) {
  try {
    const tellers = yield DetherJS.getAllTellers()
    yield put(detherGetTellersAllSuccess({
      payload: tellers, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetTellersAllFailure({payload: e, metadata}))
  }
}


/*---*--- Get Teller ---*---*/
function* getTeller({payload, metadata}) {
  try {
    const address = payload
    const teller = yield DetherJS.getTeller(address)
    yield put(detherGetTellerSuccess({
      payload: teller, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetTellerFailure({payload: e, metadata}))
  }
}


/*---*--- Get Teller Balance ---*---*/
function* getTellerBalance({payload, metadata}) {
  try {
    const address = payload
    const teller = yield DetherJS.getTellerBalance(address)
    yield put(detherGetTellerBalanceSuccess({
      payload: teller, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetTellerBalanceFailure({payload: e, metadata}))
  }
}


/*---*--- Get Tellers In Zone ---*---*/
function* getTellersInZone({payload, metadata}) {
  try {
    const zone = payload
    const tellers = yield DetherJS.getTellerBalance(zone)
    yield put(detherGetTellersInZoneSuccess({
      payload: tellers, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetTellersInZoneFailure({payload: e, metadata}))
  }
}


/*---*--- Get User ---*---*/
function* getUser({payload, metadata}) {
  try {
    const encryptedWallet = payload
    const user = yield DetherJS.getUser(encryptedWallet)
    yield put(detherGetUserSuccess({
      payload: user, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetUserFailure({payload: e, metadata}))
  }
}


/*---*--- Add Sell Point ---*---*/
function* addSellPoint({payload, metadata}) {
  try {
    const { sellPoint, password } = payload
    const sellPointRegistered = DetherUser.addSellPoint(sellPoint, password)
    yield put(detherAddSellPointSuccess({
      payload: sellPointRegistered, 
      metadata
    }))
  } catch(e) {
    yield put(detherAddSellPointFailure({payload: e, metadata}))
  }
}


/*---*--- Delete Sell Point ---*---*/
function* deleteSellPoint({payload, metadata}) {
  try { 
    const password = payload
    const sellPointRegistered = DetherUser.deleteSellPoint(password)
    yield put(detherDeleteSellPointSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(detherDeleteSellPointFailure({payload: e, metadata}))
  }
}


/*---*--- Get Address ---*---*/
function* getAddress({payload, metadata}) {
  try {
    const address = DetherUser.getAddress()
    yield put(detherGetAddressSuccess({
      payload: address, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetAddressFailure({payload: e, metadata}))
  }
}


/*---*--- Get Balance ---*---*/
function* getBalance({payload, metadata}) {
  try {
    const balance = DetherUser.getBalance()
    yield put(detherGetBalanceSuccess({
      payload: balance, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetBalanceFailure({payload: e, metadata}))
  }
}


/*---*--- Get Info ---*---*/
function* getInfo({payload, metadata}) {
  try {
    const balance = DetherUser.getInfo()
    yield put(detherGetInfoSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(detherGetInfoFailure({payload: e, metadata}))
  }
}

/*---*--- Send To Buyer ---*---*/
function* sendToBuyer({payload, metadata}) {
  try {
    const { options, password } = payload
    const confirmation = DetherUser.sendToBuyer(options, password)
    yield put(detherSendToBuyerSuccess({
      payload: confirmation, 
      metadata
    }))
  } catch(e) {
    yield put(detherSendToBuyerFailure({payload: e, metadata}))
  }
}

export default function* DepartmentSaga() {
  yield [
   takeEvery(DETHER_GET_TELLERS_ALL_REQUEST, getTellersAll),
   takeEvery(DETHER_GET_TELLER_REQUEST, getTeller),
   takeEvery(DETHER_GET_TELLER_BALANCE_REQUEST, getTellerBalance),
   takeEvery(DETHER_GET_TELLERS_IN_ZONE_REQUEST, getTellersInZone),
   takeEvery(DETHER_GET_USER_REQUEST, getUser),
   takeEvery(DETHER_ADD_SELL_POINT_REQUEST, addSellPoint),
   takeEvery(DETHER_DELETE_SELL_POINT_REQUEST, deleteSellPoint),
   takeEvery(DETHER_GET_ADDRESS_REQUEST, getAddress),
   takeEvery(DETHER_GET_BALANCE_REQUEST, getBalance),
   takeEvery(DETHER_GET_INFO_REQUEST, getInfo),
   takeEvery(DETHER_SEND_TO_BUYER_REQUEST, sendToBuyer),
  ];
}