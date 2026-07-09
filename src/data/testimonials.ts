export interface Testimonial {
  author: string
  rating: number
  text: string
  reviewUrl: string
  images: string[]
}

// Review photos use the bar's own real gallery assets (served locally) so they
// always load — the original Google `grass-cs` review-photo URLs do not hot-link.
export const testimonials: Testimonial[] = [
  {
    author: 'Jeff White',
    rating: 5,
    text: 'Great cocktails and knowledgeable bartenders. Large gin selection. Even had some mezcal which has been hard to find. Has an outdoor patio area as well. The shrimp appetizer was very tasty.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURlc3RiOVF3EAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgIDestb9Qw%7C%7C?hl=en',
    images: [
      '/assets/alavariumcocktailbar__2026-04-02T130942.000Z.jpg',
      '/assets/alavariumcocktailbar__2026-04-01T090048.000Z.jpg',
      '/assets/alavariumcocktailbar__2026-03-25T180321.000Z.jpg',
    ],
  },
  {
    author: 'Filipe Meliciano',
    rating: 5,
    text: 'Great place for a drink or a quick bite. The selection of alcohols is astonishing, from gins to whiskeys, and other tequilas or rhums. There’s something for everyone. The food menu is good too, with interesting "katsu sando", Japanese style sandwiches. All that in a pleasant warm place.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtcWVfa0RBEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgIC-qe_kDA%7C%7C?hl=en',
    images: [
      '/assets/alavariumcocktailbar__2026-02-12T121149.000Z.jpg',
      '/assets/alavariumcocktailbar__2024-01-11T132334.000Z.webp',
    ],
  },
  {
    author: 'Chris Carswell',
    rating: 5,
    text: 'Ok, this is my spot! Friendly staff, great drinks and nice atmosphere. You have to try their bruschettas, TASTY! Also ask for the different dipping sauces for the wings. Homemade and very good!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURqcXRUOEdnEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgIDjqtT8Gg%7C%7C?hl=en',
    images: [
      '/assets/alavariumcocktailbar__2023-04-11T193834.000Z.webp',
      '/assets/alavariumcocktailbar__2020-05-22T171716.000Z.jpg',
    ],
  },
  {
    author: 'Sam Van Dweller',
    rating: 5,
    text: 'Fabulous bar with great drinks and snacks. We enjoyed a couple of cocktails, some craft beers and some tapas. Lovely friendly staff and great vibe.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNlMnZ6cnpRRRAB!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgICe2vzrzQE%7C%7C?hl=en',
    images: [
      '/assets/alavariumcocktailbar__2018-11-17T214154.000Z.jpg',
      '/assets/alavariumcocktailbar__2026-04-01T090048.000Z_1.jpg',
      '/assets/alavariumcocktailbar__2024-12-27T140048.000Z.jpg',
    ],
  },
  {
    author: 'Bill Bartlow',
    rating: 5,
    text: 'Went here for a pre-dinner cocktail. Awesome, amazing gin selection and the bar tender was great and made a super yummy martini!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNScHZ1cEtBEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgICRpvupKA%7C%7C?hl=en',
    images: [
      '/assets/alavariumcocktailbar__2024-12-19T110232.000Z.jpg',
      '/assets/alavariumcocktailbar__2026-04-02T130942.000Z.jpg',
    ],
  },
  {
    author: 'Laurent Viau-Lapointe',
    rating: 5,
    text: 'Great place! It was perfect for late afternoon beers and snacks. For such a touristy city and area, everything was fairly priced. Service and tapas were great. I will come back! Thanks!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNPX2RDSEVnEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgICO_dCHEg%7C%7C?hl=en',
    images: [
      '/assets/alavariumcocktailbar__2026-04-01T090048.000Z.jpg',
      '/assets/alavariumcocktailbar__2026-03-25T180321.000Z.jpg',
    ],
  },
]
