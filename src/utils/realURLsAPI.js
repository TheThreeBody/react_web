const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://back.npsex.com'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
const CROSheadersGET = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
};
const CROSheadersPOST = {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // body: JSON.stringify(postData)
};

export const queryDouyuRoom = (roomNo) =>
    fetch(`${api}/douyu?roomNo=${roomNo}`, { CROSheadersGET })
        .then(res => res.json())
        .then(data => data.stream)

export const queryBilibiliRoom = (roomNo) =>
    fetch(`${api}/bilibili?roomNo=${roomNo}`, { CROSheadersGET })
        .then(res => res.json())
        .then(data => data.stream)

export const getAll = () =>
  fetch(`${api}/contacts`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)

export const remove = (contact) =>
  fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contacts)

export const create = (body) =>
  fetch(`${api}/contacts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
