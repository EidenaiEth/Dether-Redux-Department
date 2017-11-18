import {
DETHER_GET_TELLERS_ALL_REQUEST,
DETHER_GET_TELLERS_ALL_SUCCESS,
DETHER_GET_TELLERS_ALL_FAILURE,
DETHER_GET_TELLER_REQUEST,
DETHER_GET_TELLER_SUCCESS,
DETHER_GET_TELLER_FAILURE,
DETHER_GET_TELLER_BALANCE_REQUEST,
DETHER_GET_TELLER_BALANCE_SUCCESS,
DETHER_GET_TELLER_BALANCE_FAILURE,
DETHER_GET_TELLERS_IN_ZONE_REQUEST,
DETHER_GET_TELLERS_IN_ZONE_SUCCESS,
DETHER_GET_TELLERS_IN_ZONE_FAILURE,
DETHER_GET_USER_REQUEST,
DETHER_GET_USER_SUCCESS,
DETHER_GET_USER_FAILURE,
DETHER_ADD_SELL_POINT_REQUEST,
DETHER_ADD_SELL_POINT_SUCCESS,
DETHER_ADD_SELL_POINT_FAILURE,
DETHER_DELETE_SELL_POINT_REQUEST,
DETHER_DELETE_SELL_POINT_SUCCESS,
DETHER_DELETE_SELL_POINT_FAILURE,
DETHER_GET_ADDRESS_REQUEST,
DETHER_GET_ADDRESS_SUCCESS,
DETHER_GET_ADDRESS_FAILURE,
DETHER_GET_BALANCE_REQUEST,
DETHER_GET_BALANCE_SUCCESS,
DETHER_GET_BALANCE_FAILURE,
DETHER_GET_INFO_REQUEST,
DETHER_GET_INFO_SUCCESS,
DETHER_GET_INFO_FAILURE,
DETHER_SEND_TO_BUYER_REQUEST,
DETHER_SEND_TO_BUYER_SUCCESS,
DETHER_SEND_TO_BUYER_FAILURE,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, {type, payload, metadata}) => {
  switch (type) {


      case DETHER_GET_TELLERS_ALL_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_TELLERS_ALL_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_TELLERS_ALL_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_TELLER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_TELLER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_TELLER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_TELLER_BALANCE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_TELLER_BALANCE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_TELLER_BALANCE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_TELLERS_IN_ZONE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_TELLERS_IN_ZONE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_TELLERS_IN_ZONE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_USER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_USER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_USER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_ADD_SELL_POINT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_ADD_SELL_POINT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_ADD_SELL_POINT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_DELETE_SELL_POINT_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_DELETE_SELL_POINT_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_DELETE_SELL_POINT_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_ADDRESS_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_ADDRESS_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_ADDRESS_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_BALANCE_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_BALANCE_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_BALANCE_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_GET_INFO_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_GET_INFO_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_GET_INFO_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }


      case DETHER_SEND_TO_BUYER_REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'REQUESTED'
          }
        }
      case DETHER_SEND_TO_BUYER_SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'SUCCESS',
            data: payload
          }
        }
      case DETHER_SEND_TO_BUYER_FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: 'FAILURE',
            error: payload
          }
        }
    default:
      return state
  }
}