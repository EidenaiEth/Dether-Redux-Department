export const DETHER_GET_TELLERS_ALL_REQUEST = 'DETHER_GET_TELLERS_ALL_REQUEST'
export const DETHER_GET_TELLERS_ALL_SUCCESS = 'DETHER_GET_TELLERS_ALL_SUCCESS'
export const DETHER_GET_TELLERS_ALL_FAILURE = 'DETHER_GET_TELLERS_ALL_FAILURE'

export const DETHER_GET_TELLER_REQUEST = 'DETHER_GET_TELLER_REQUEST'
export const DETHER_GET_TELLER_SUCCESS = 'DETHER_GET_TELLER_SUCCESS'
export const DETHER_GET_TELLER_FAILURE = 'DETHER_GET_TELLER_FAILURE'

export const DETHER_GET_TELLER_BALANCE_REQUEST = 'DETHER_GET_TELLER_BALANCE_REQUEST'
export const DETHER_GET_TELLER_BALANCE_SUCCESS = 'DETHER_GET_TELLER_BALANCE_SUCCESS'
export const DETHER_GET_TELLER_BALANCE_FAILURE = 'DETHER_GET_TELLER_BALANCE_FAILURE'

export const DETHER_GET_TELLERS_IN_ZONE_REQUEST = 'DETHER_GET_TELLERS_IN_ZONE_REQUEST'
export const DETHER_GET_TELLERS_IN_ZONE_SUCCESS = 'DETHER_GET_TELLERS_IN_ZONE_SUCCESS'
export const DETHER_GET_TELLERS_IN_ZONE_FAILURE = 'DETHER_GET_TELLERS_IN_ZONE_FAILURE'

export const DETHER_GET_USER_REQUEST = 'DETHER_GET_USER_REQUEST'
export const DETHER_GET_USER_SUCCESS = 'DETHER_GET_USER_SUCCESS'
export const DETHER_GET_USER_FAILURE = 'DETHER_GET_USER_FAILURE'

export const DETHER_ADD_SELL_POINT_REQUEST = 'DETHER_ADD_SELL_POINT_REQUEST'
export const DETHER_ADD_SELL_POINT_SUCCESS = 'DETHER_ADD_SELL_POINT_SUCCESS'
export const DETHER_ADD_SELL_POINT_FAILURE = 'DETHER_ADD_SELL_POINT_FAILURE'

export const DETHER_DELETE_SELL_POINT_REQUEST = 'DETHER_DELETE_SELL_POINT_REQUEST'
export const DETHER_DELETE_SELL_POINT_SUCCESS = 'DETHER_DELETE_SELL_POINT_SUCCESS'
export const DETHER_DELETE_SELL_POINT_FAILURE = 'DETHER_DELETE_SELL_POINT_FAILURE'

export const DETHER_GET_ADDRESS_REQUEST = 'DETHER_GET_ADDRESS_REQUEST'
export const DETHER_GET_ADDRESS_SUCCESS = 'DETHER_GET_ADDRESS_SUCCESS'
export const DETHER_GET_ADDRESS_FAILURE = 'DETHER_GET_ADDRESS_FAILURE'

export const DETHER_GET_BALANCE_REQUEST = 'DETHER_GET_BALANCE_REQUEST'
export const DETHER_GET_BALANCE_SUCCESS = 'DETHER_GET_BALANCE_SUCCESS'
export const DETHER_GET_BALANCE_FAILURE = 'DETHER_GET_BALANCE_FAILURE'

export const DETHER_GET_INFO_REQUEST = 'DETHER_GET_INFO_REQUEST'
export const DETHER_GET_INFO_SUCCESS = 'DETHER_GET_INFO_SUCCESS'
export const DETHER_GET_INFO_FAILURE = 'DETHER_GET_INFO_FAILURE'

export const DETHER_SEND_TO_BUYER_REQUEST = 'DETHER_SEND_TO_BUYER_REQUEST'
export const DETHER_SEND_TO_BUYER_SUCCESS = 'DETHER_SEND_TO_BUYER_SUCCESS'
export const DETHER_SEND_TO_BUYER_FAILURE = 'DETHER_SEND_TO_BUYER_FAILURE'
// dether :: GetTellersAll |  DETHER_GET_TELLERS_ALL
export const detherGetTellersAllRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLERS_ALL_REQUEST,
  payload,
  metadata
})

export const detherGetTellersAllSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLERS_ALL_SUCCESS,
  payload,
  metadata
})

export const detherGetTellersAllFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLERS_ALL_FAILURE,
  payload,
  metadata
})
  
// dether :: GetTeller |  DETHER_GET_TELLER
export const detherGetTellerRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLER_REQUEST,
  payload,
  metadata
})

export const detherGetTellerSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLER_SUCCESS,
  payload,
  metadata
})

export const detherGetTellerFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLER_FAILURE,
  payload,
  metadata
})
  
// dether :: GetTellerBalance |  DETHER_GET_TELLER_BALANCE
export const detherGetTellerBalanceRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLER_BALANCE_REQUEST,
  payload,
  metadata
})

export const detherGetTellerBalanceSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLER_BALANCE_SUCCESS,
  payload,
  metadata
})

export const detherGetTellerBalanceFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLER_BALANCE_FAILURE,
  payload,
  metadata
})
  
// dether :: GetTellersInZone |  DETHER_GET_TELLERS_IN_ZONE
export const detherGetTellersInZoneRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLERS_IN_ZONE_REQUEST,
  payload,
  metadata
})

export const detherGetTellersInZoneSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLERS_IN_ZONE_SUCCESS,
  payload,
  metadata
})

export const detherGetTellersInZoneFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_TELLERS_IN_ZONE_FAILURE,
  payload,
  metadata
})
  
// dether :: GetUser |  DETHER_GET_USER
export const detherGetUserRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_USER_REQUEST,
  payload,
  metadata
})

export const detherGetUserSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_USER_SUCCESS,
  payload,
  metadata
})

export const detherGetUserFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_USER_FAILURE,
  payload,
  metadata
})
  
// dether :: AddSellPoint |  DETHER_ADD_SELL_POINT
export const detherAddSellPointRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_ADD_SELL_POINT_REQUEST,
  payload,
  metadata
})

export const detherAddSellPointSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_ADD_SELL_POINT_SUCCESS,
  payload,
  metadata
})

export const detherAddSellPointFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_ADD_SELL_POINT_FAILURE,
  payload,
  metadata
})
  
// dether :: DeleteSellPoint |  DETHER_DELETE_SELL_POINT
export const detherDeleteSellPointRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_DELETE_SELL_POINT_REQUEST,
  payload,
  metadata
})

export const detherDeleteSellPointSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_DELETE_SELL_POINT_SUCCESS,
  payload,
  metadata
})

export const detherDeleteSellPointFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_DELETE_SELL_POINT_FAILURE,
  payload,
  metadata
})
  
// dether :: GetAddress |  DETHER_GET_ADDRESS
export const detherGetAddressRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_ADDRESS_REQUEST,
  payload,
  metadata
})

export const detherGetAddressSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_ADDRESS_SUCCESS,
  payload,
  metadata
})

export const detherGetAddressFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_ADDRESS_FAILURE,
  payload,
  metadata
})
  
// dether :: GetBalance |  DETHER_GET_BALANCE
export const detherGetBalanceRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_BALANCE_REQUEST,
  payload,
  metadata
})

export const detherGetBalanceSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_BALANCE_SUCCESS,
  payload,
  metadata
})

export const detherGetBalanceFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_BALANCE_FAILURE,
  payload,
  metadata
})
  
// dether :: GetInfo |  DETHER_GET_INFO
export const detherGetInfoRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_INFO_REQUEST,
  payload,
  metadata
})

export const detherGetInfoSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_INFO_SUCCESS,
  payload,
  metadata
})

export const detherGetInfoFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_GET_INFO_FAILURE,
  payload,
  metadata
})
  
// dether :: SendToBuyer |  DETHER_SEND_TO_BUYER
export const detherSendToBuyerRequest = ({payload = {}, metadata = {}}) => ({
  type: DETHER_SEND_TO_BUYER_REQUEST,
  payload,
  metadata
})

export const detherSendToBuyerSuccess = ({payload = {}, metadata = {}}) => ({
  type: DETHER_SEND_TO_BUYER_SUCCESS,
  payload,
  metadata
})

export const detherSendToBuyerFailure = ({payload = {}, metadata = {}}) => ({
  type: DETHER_SEND_TO_BUYER_FAILURE,
  payload,
  metadata
})