export type adultsState = {
  value: number
}

export type childrenState = {
  value: number
}

export type starState = {
  value: number
}

export type HotelDetails = {
  id: string
  name: string
  address1: string
  address2: string
  starRating: string
  images: {
    url: string
  }[]
}

export type Info = {
  hotelImages: {
    url: string
  }[]
  hotelName: string
  hotelAdresses: string[]
}

export type Rating = {
  rating: string
}

export type RoomDetails = {
  name: string
  occupancy: {
    maxAdults: number
    maxChildren: number
  }
  longDescription: string
}
