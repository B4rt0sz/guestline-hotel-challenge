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
