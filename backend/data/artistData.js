const ArtistData = [
  // 1
  {
    name: "Alex Clough",
    bio: "He was a good man",
    location: "Everywhere",
    avatarUrl: "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/alex_clough-3652_flat_resize_copy_pcovk6.jpg"
  },

  // 2
  {
    name: "Mike Forfia",
    bio:
      "Duis vitae lobortis orci. Vestibulum lobortis ipsum ac porta molestie. Morbi sollicitudin cursus ligula at suscipit. Vivamus convallis mi egestas tellus ultrices, tincidunt venenatis dolor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor quis ante eu bibendum. Sed pellentesque eget turpis tempus gravida. Maecenas condimentum neque vitae.",
    avatarUrl: "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/cover_copy_w7alcc.jpg",
    location: "New York, NY",
  },

  // {
  //   name: "Mike Forfia",
  //   bio:
  //     "Duis vitae lobortis orci. Vestibulum lobortis ipsum ac porta molestie. Morbi sollicitudin cursus ligula at suscipit. Vivamus convallis mi egestas tellus ultrices, tincidunt venenatis dolor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor quis ante eu bibendum. Sed pellentesque eget turpis tempus gravida. Maecenas condimentum neque vitae.",
  //   avatarUrl:
  //   location: "New York, NY",
  // },

  // 3
  // {
  //   name: "Steve Whipple",
  //   bio:
  //     "Duis vitae lobortis orci. Vestibulum lobortis ipsum ac porta molestie. Morbi sollicitudin cursus ligula at suscipit. Vivamus convallis mi egestas tellus ultrices, tincidunt venenatis dolor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor quis ante eu bibendum. Sed pellentesque eget turpis tempus gravida. Maecenas condimentum neque vitae.",
  //   avatarUrl:
  //   location: "Brooklyn, NY",
  // },

  {
    name: "Steve Whipple",
    bio: 
      "Duis vitae lobortis orci. Vestibulum lobortis ipsum ac porta molestie. Morbi sollicitudin cursus ligula at suscipit. Vivamus convallis mi egestas tellus ultrices, tincidunt venenatis dolor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor quis ante eu bibendum. Sed pellentesque eget turpis tempus gravida. Maecenas condimentum neque vitae.",
    avatarUrl: 
    "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/Artist_image-1_copy_ab8dq7.png",
    location: "Brooklyn, NY",
  },

  // 4
  {
    name: "Andrew Angus",
    bio:
      "Duis vitae lobortis orci. Vestibulum lobortis ipsum ac porta molestie. Morbi sollicitudin cursus ligula at suscipit. Vivamus convallis mi egestas tellus ultrices, tincidunt venenatis dolor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor quis ante eu bibendum. Sed pellentesque eget turpis tempus gravida. Maecenas condimentum neque vitae.",
    avatarUrl: "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/Drew_Angus_Hold_onto_Something_Cover_copy_j1hq8q.jpg",
    location: "Brooklyn, NY",
  },

  // {
  //   name: "Andrew Angus",
  //   bio:
  //     "Duis vitae lobortis orci. Vestibulum lobortis ipsum ac porta molestie. Morbi sollicitudin cursus ligula at suscipit. Vivamus convallis mi egestas tellus ultrices, tincidunt venenatis dolor tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor quis ante eu bibendum. Sed pellentesque eget turpis tempus gravida. Maecenas condimentum neque vitae.",
  //   avatarUrl:
  //   location: "Brooklyn, NY",
  // },

  // 5

  {
    name: "John Gray",
    bio:
      "Praesent ligula nunc, eleifend malesuada turpis id, convallis ullamcorper est. Fusce id purus neque. Curabitur suscipit magna quis dolor facilisis cursus. Quisque nec odio lorem. Nunc vehicula massa et mattis ultricies. Proin commodo eleifend nisl. Duis ac magna ex. Pellentesque lacinia, erat ut lobortis facilisis, augue nibh vestibulum nisl, vitae porta erat nulla quis orci. Nam id sem tempus, ultrices nulla non, varius tellus. Duis vestibulum mattis nisi, tincidunt accumsan mauris tempor et. Praesent porttitor augue diam, et vestibulum velit mollis eget. Sed laoreet fermentum ipsum, nec vehicula nisl ultrices nec. Quisque vitae erat tincidunt, semper felis eget, iaculis ligula.",
    avatarUrl: "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/2nd_edits__1_copy_ezbbow.jpg",
    location: "Brooklyn, NY",
  },

  //6
  {
    name: "Adam Lomeo",
    bio:
      "Aliquam mauris lacus, imperdiet at dapibus et, scelerisque id elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum scelerisque at lacus ac fringilla. Fusce hendrerit consectetur risus ac posuere. Curabitur malesuada ante a felis aliquet euismod. Aliquam lorem mauris, commodo volutpat convallis in, vehicula a orci. Nam non efficitur mauris. Sed sed felis non odio porta vulputate et ut nibh. In vel pretium enim, ac egestas magna. In eros.",
    avatarUrl: "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/Snyder_Lapinsky_NovellaPhotography_WebSizedNovellaPhotography20180630400_0_low_copy_vwpnin.jpg",
    location: "Jersey City, NJ",
  },

  //7
  {
    name: "John Lake",
    bio:
      "Donec porta ex id est sollicitudin scelerisque. Curabitur aliquet aliquam ligula. Mauris sodales scelerisque enim vitae convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in quam nec ligula rutrum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nec vehicula enim. Proin iaculis erat sed dui venenatis, eget sagittis lectus congue. Etiam ut lacus ultricies, sodales mi eget, pulvinar augue. Suspendisse dictum nec risus in.",
    avatarUrl: "https://res.cloudinary.com/alex-clough/image/upload/v1619885970/headshots_resized/_A7R9130_copy_giyvmv.jpg",
    location: "Brooklyn, NY",
  },
];
/*
{
name:
bio:
avatarUrl:
location:
}
*/

module.exports = ArtistData;
