export interface Testimonial {
  author: string
  rating: number
  text: string
  reviewUrl: string
  images: string[]
}

export const testimonials: Testimonial[] = [
  {
    author: 'Jeff White',
    rating: 5,
    text: 'Great cocktails and knowledgeable bartenders. Large gin selection. Even had some mezcal which has been hard to find. Has an outdoor patio area as well. The shrimp appetizer was very tasty.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURlc3RiOVF3EAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgIDestb9Qw%7C%7C?hl=en',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1ka9i-MO7vPd6kWosCZOQm67NG2TKUZbXpxnm06ZitLIHDQXjxeYFkcLz1_zhK6jPy2ovXdIligpiYT2IcSt5me3SPdAEWIUVirqflf9diiomXiLSu2hkcS3RLVLOWlAZ-tI78=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1GVq6VLooVX9Oy00N42LXwQMWo9JjHBwxttSDLTgMwdMUWnct_YZ6INWTATjSvyz-xTDX7QXzlekL2IA9fpQ1FJnWCZZB3SlamC0rTMOijeiJzdhDr28iFsRqJUFa1MsJTjqJpIA=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn3GwDQejIT6-5TFtgX4A6q1_YGKqgCBHiRA7w2epna073ounJ3orkEPe-6RCTcuRaLbT-CZ5rdP3guYmyGIowP5ZGh3V_bAZ6PEJ8z2fMjvyfHfG1XJrVuS4UgP6pt_U4MjpJOn=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn3mASb0Cpw-WPvbuLAS-q3-YHJzqoaeoUT4bJJCVhAfMacUcQqdPVUEn70KFcw9W35RfCMohIChK0Xx18gUeH0GknTurcN2d3oJodqaoS9jP3ZlgIAEriZgGlpIx58JreXpsKyx=k-no',
    ],
  },
  {
    author: 'Filipe Meliciano',
    rating: 5,
    text: 'Great place for a drink or a quick bite. The selection of alcohols is astonishing, from gins to whiskeys, and other tequilas or rhums. There’s something for everyone. The food menu is good too, with interesting "katsu sando", Japanese style sandwiches. All that in a pleasant warm place.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMtcWVfa0RBEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgIC-qe_kDA%7C%7C?hl=en',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1miOBNjydD9nA1NIX9lMXICLpsbBLU9UMgcOAw6WMyfN1D0d4WUEx9amWdzyZ08mfiG6B1AR37zsH8lJ_Ftzw4-fx1q2Ts02XwZh6mWnVuNIE5MM0nLEDDlaUwfXmbtoXl5cUrWg=k-no',
    ],
  },
  {
    author: 'Chris Carswell',
    rating: 5,
    text: 'Ok, this is my spot! Friendly staff, great drinks and nice atmosphere. You have to try their bruschettas, TASTY! Also ask for the different dipping sauces for the wings. Homemade and very good!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURqcXRUOEdnEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgIDjqtT8Gg%7C%7C?hl=en',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn2_GUhsvXfb7IVkoUO9OjdtBrb0m9HkhVOOVwiOxpo3obrMLxqOSEYgLdTP1hE4YJZ45r3W5Fk2hRLVtAdGFltJxwBowB3wUshKNbXEpKglklaPBB-VqEzelL2l1Jqc6npFkxqX0g=k-no',
    ],
  },
  {
    author: 'Sam Van Dweller',
    rating: 5,
    text: 'Fabulous bar with great drinks and snacks. We enjoyed a couple of cocktails, some craft beers and some tapas. Lovely friendly staff and great vibe.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNlMnZ6cnpRRRAB!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgICe2vzrzQE%7C%7C?hl=en',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn2j7XeyWRaHcYPjWZjqVdpbmvOqRKYlV3jj3M-m2yLsji_XW6JZHiKyWyZuGbugAUzY9CnrPg2LtW3X5CmyN8KVtHsixoeI-oj7RQjv85mNawPVDIeOo0ku1nOAiOptypeKrseeOA=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn3zjyRDJPPAsANYa15mfzgUAUfEn_mgoK1NDgwdY09ynmXtVwNxfYfM3J0ODnzeydEWeNuaYyPGRvj8ogLUFTVBGyixi0YeB-UKaTxN-hSikRg1T8bbDSkE6v-xLEK9mJPymRA=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1BW357FUM5SWrBDxGiiIV8oX37t7fNqw5ETFIt3L3HkrOmtHwvpd8SCHYBt8BGVmP_s6kKaeoZNx5eckZ0GpkFI1yVxRJQ45VAWRGlorY5xScWYRb34LXtVyGpqbjAj5HYFu48=k-no',
    ],
  },
  {
    author: 'Bill Bartlow',
    rating: 5,
    text: 'Went here for a pre-dinner cocktail. Awesome, amazing gin selection and the bar tender was great and made a super yummy martini!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNScHZ1cEtBEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgICRpvupKA%7C%7C?hl=en',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1fVLIakd_3FyFrfRkmuL9Yk4143xWcqpROAWf-VCdPMbNWPtEyB1hCyG_qrAbnxjWrQWfOn6YTuSGLaZJlt92tnJ1nObFAUZ4Pq_hQ0_J9Wgw4KnlgZeiasjiPyt2JpQ-dQHKY4Q=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1tHHhnJjRIyQU6b2nBiY1qIiZH6VpcqkPi-bj4dgy0nThs5gLJAQ5dEcrnAU50HeEQJp7vl5UW_9sRQyGP4qacE67YEtoOQozO63mThTWb7M_DpmTtaQfUXmUVghiwEsQA0dcu=k-no',
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn0vTklU7YVtzdbUASJviaObtXrRf6qycEOfj0sApzG1y8Bm2wI7WBTrNcci3T0Vh8yHs4pFcOZzW1YdZImmj4rFBSkUksYgFf8TDCk28A76_rsd4-RihoUnwlW057GkMhky5LkL=k-no',
    ],
  },
  {
    author: 'Laurent Viau-Lapointe',
    rating: 5,
    text: 'Great place! It was perfect for late afternoon beers and snacks. For such a touristy city and area, everything was fairly priced. Service and tapas were great. I will come back! Thanks!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNPX2RDSEVnEAE!2m1!1s0x0:0xe8dde7e6b0398a7a!3m1!1s2@1:CIHM0ogKEICAgICO_dCHEg%7C%7C?hl=en',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/ANxoTn1Yh0vB9PRB-rTD2M-O6Bd4-M9mxYQqrkFd7Iv05fdjcmX-1Z0prLSpDic00LVxrarnny8vXoswWVRM0TFmE2xrJLKsBjdgb2zOQdNkIkFTdbYdg8y4w1r2p7dRb8GkW1z3myh0bA=k-no',
    ],
  },
]
