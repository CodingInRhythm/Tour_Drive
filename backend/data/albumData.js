
  
const albumData = [
  // 1
  {
    name: "near, far, beyond",
    description: "Might be the greatest album of all time",
    albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/Cover_Artwork_resize_ybijrb.png",
    artistId: 1,
  },

  //2
  // {
  //   name: "Live With Friends, Part I",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet volutpat sapien, vitae ultrices tellus blandit maximus. Nulla ultricies velit quis elit ullamcorper mattis. Aliquam pellentesque laoreet dui quis suscipit. Duis ac dolor aliquet, vehicula lacus vel, interdum nulla. Proin aliquet, purus et viverra convallis, velit tellus eleifend libero, quis laoreet sapien metus nec sapien. Quisque feugiat commodo accumsan. Cras rhoncus ut risus in pulvinar. Donec sit amet ipsum sed ligula finibus bibendum sed ut lectus. Cras bibendum molestie turpis lobortis facilisis. Maecenas pellentesque lorem id nulla accumsan, vel tincidunt ipsum condimentum. Cras efficitur semper dui id interdum. Sed aliquet.",
  //   albumArt:
  //     "https://codinginrhythmbucket.s3.amazonaws.com/Mike+Forfia+-+Live+With+Friends+2017/cover.jpg",
  //   artistId: 2,
  // },

  {
    name: "Live With Friends, Part I",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet volutpat sapien, vitae ultrices tellus blandit maximus. Nulla ultricies velit quis elit ullamcorper mattis. Aliquam pellentesque laoreet dui quis suscipit. Duis ac dolor aliquet, vehicula lacus vel, interdum nulla. Proin aliquet, purus et viverra convallis, velit tellus eleifend libero, quis laoreet sapien metus nec sapien. Quisque feugiat commodo accumsan. Cras rhoncus ut risus in pulvinar. Donec sit amet ipsum sed ligula finibus bibendum sed ut lectus. Cras bibendum molestie turpis lobortis facilisis. Maecenas pellentesque lorem id nulla accumsan, vel tincidunt ipsum condimentum. Cras efficitur semper dui id interdum. Sed aliquet.",
    albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/cover_qs8xct.jpg",
    artistId: 2,
  },

  //3
  // {
  //   name: "Live With Friends, Part II",
  //   description:
  //     "Integer faucibus, dolor eget blandit aliquet, mauris est rhoncus justo, non aliquet lectus leo in arcu. Suspendisse a elit non sem ornare scelerisque. Pellentesque sit amet dolor magna. Fusce sed rhoncus ex. Nulla ac accumsan nisl. Sed vel laoreet felis. Praesent bibendum sed diam et finibus. Curabitur congue consectetur metus, ac faucibus lacus volutpat condimentum. Vivamus massa velit, ullamcorper sit amet est id, molestie auctor augue. Curabitur hendrerit, metus ac suscipit sollicitudin, justo orci bibendum dolor, vitae eleifend sapien leo ut arcu. Duis dignissim facilisis purus, ut viverra erat interdum vel. Nulla non dapibus ex. Donec tempor ultricies purus, a.",
  //   albumArt:
  //     "https://codinginrhythmbucket.s3.amazonaws.com/Mike+Forfia+-+Live+With+Friends+2017/cover.jpg",
  //   artistId: 2,
  // },
  {
    name: "Live With Friends, Part II",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet volutpat sapien, vitae ultrices tellus blandit maximus. Nulla ultricies velit quis elit ullamcorper mattis. Aliquam pellentesque laoreet dui quis suscipit. Duis ac dolor aliquet, vehicula lacus vel, interdum nulla. Proin aliquet, purus et viverra convallis, velit tellus eleifend libero, quis laoreet sapien metus nec sapien. Quisque feugiat commodo accumsan. Cras rhoncus ut risus in pulvinar. Donec sit amet ipsum sed ligula finibus bibendum sed ut lectus. Cras bibendum molestie turpis lobortis facilisis. Maecenas pellentesque lorem id nulla accumsan, vel tincidunt ipsum condimentum. Cras efficitur semper dui id interdum. Sed aliquet.",
    albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/cover_qs8xct.jpg",
    artistId: 2,
  },

  //4
  // {
  //   name: "Together, Alone",
  //   description:
  //     "Praesent consectetur lacus in lacus blandit, vel consectetur libero elementum. Suspendisse et viverra nisl. Proin faucibus risus vitae leo venenatis vestibulum. Ut id nisl accumsan, sagittis arcu eget, molestie tellus. Donec mollis ipsum augue, ut lobortis purus luctus ut. Aenean in est ut nisl sollicitudin dapibus ut quis dolor. Aliquam.",
  //   albumArt:
  //     "https://codinginrhythmbucket.s3.amazonaws.com/Steve+Whipple/Artist+image-1.png",
  //   artistId: 3,
  // },
  {
    name: "Together, Alone",
    description:
      "Praesent consectetur lacus in lacus blandit, vel consectetur libero elementum. Suspendisse et viverra nisl. Proin faucibus risus vitae leo venenatis vestibulum. Ut id nisl accumsan, sagittis arcu eget, molestie tellus. Donec mollis ipsum augue, ut lobortis purus luctus ut. Aenean in est ut nisl sollicitudin dapibus ut quis dolor. Aliquam.",
    albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/Artist_image_vtw2xs.png",
    artistId: 3,
  },
  // 5
  // {
  //   name: "Hold Onto Something",
  //   description:
  //     "Sed dui nibh, accumsan ut nisi mattis, pharetra laoreet elit. Donec ac nunc turpis. Duis euismod quam a elit cursus lacinia. Curabitur imperdiet tempor erat, tempus cursus tellus dignissim in. Phasellus a pharetra felis. Nam ac dui tempus, ornare sapien consequat, varius lectus. Cras ultricies blandit tellus, sagittis tempus purus.",
  //   albumArt:
  //     "https://codinginrhythmbucket.s3.amazonaws.com/Andrew+Angus/Drew+Angus+Hold+onto+Something+Cover.jpg",
  //   artistId: 4,
  // },
  {
    name: "Hold Onto Something",
    description:
      "Sed dui nibh, accumsan ut nisi mattis, pharetra laoreet elit. Donec ac nunc turpis. Duis euismod quam a elit cursus lacinia. Curabitur imperdiet tempor erat, tempus cursus tellus dignissim in. Phasellus a pharetra felis. Nam ac dui tempus, ornare sapien consequat, varius lectus. Cras ultricies blandit tellus, sagittis tempus purus.",
    albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/Drew_Angus_Hold_onto_Something_Cover_pvi0ad.jpg",
    artistId: 4,
  },

  // 6

  {
    name: "Brooklyn Elegy",
    description:
      "Cras sed velit purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut augue ut metus ornare varius. Nunc fermentum mi vel orci sagittis, quis varius tellus cursus. In volutpat porta tortor, vitae placerat augue dictum a. Praesent lobortis ligula id feugiat consequat. Vivamus viverra justo at malesuada semper. Nulla facilisi. Mauris bibendum dolor massa, eu maximus ante pellentesque eu.",
      albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/johngray_cover1_ewnsqh.jpg",
      artistId: 5,
    },
    
    // 7 
    {
        name: "Just For The Love",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ipsum in sem fermentum elementum. Ut dapibus fringilla risus sed placerat. Cras sit amet quam sed libero efficitur scelerisque quis ut sem. Nulla facilisis accumsan tortor sed elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed diam quam, ultricies nec odio nec, finibus vehicula urna. Duis.",
        albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/Just_For_the_Love_Album_Cover_pcmdr8.jpg",
        artistId: 6
    
      },
      // 8
    
      {
        name: "Just For The Love, II",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ipsum in sem fermentum elementum. Ut dapibus fringilla risus sed placerat. Cras sit amet quam sed libero efficitur scelerisque quis ut sem. Nulla facilisis accumsan tortor sed elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed diam quam, ultricies nec odio nec, finibus vehicula urna. Duis.",
        albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619884864/Album%20Covers/Album_art_rescale_zbnazg.png",
        artistId: 6
    
      },

      // 9
    {
    name: "Seven Angels",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum ipsum in sem fermentum elementum. Ut dapibus fringilla risus sed placerat. Cras sit amet quam sed libero efficitur scelerisque quis ut sem. Nulla facilisis accumsan tortor sed elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed diam quam, ultricies nec odio nec, finibus vehicula urna. Duis.",
    albumArt: "https://res.cloudinary.com/alex-clough/image/upload/v1619885364/Album%20Covers/_A7R9209_resize_aotkmy.jpg",
    artistId: 7
  },
  // 10

];


module.exports = albumData

