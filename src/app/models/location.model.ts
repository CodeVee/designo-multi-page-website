interface Location {
  latitude: number;
  longitude: number;
  id: Place
}

enum Place {
  Canada = 'canada',
  Australia = 'australia',
  UK = 'uk'
}

export const Locations: Location[] = [
  { id: Place.Canada, latitude: 43.648180, longitude: -79.375750 },
  { id: Place.Australia, latitude:  -30.329530, longitude: 149.788190 },
  { id: Place.UK, latitude: 40.514280, longitude: -107.547400 },
];
