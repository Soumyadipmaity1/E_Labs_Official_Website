import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventDetails: [
    {
      id:101,
      name: "Design of Development",
      img:"https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
      venue: "Campus 12, Auditorium",
      date: "25-07-2024",
      shortDescription: "",
      Description:
        "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea.",
    },
    {
      id:201,
      name: "Web Development",
      img:"https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
      venue: "Campus 12, Auditorium",
      date: "25-07-2024",
      shortDescription: "",
      Description:
        "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea.",
    },
  ],

  memberDetails: [
    {
      name: "Md Asif Nawaz",
      position: "Asst.Lead Coordinator",
      imgSrc:
        "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
    },
    {
      name: "Md Asif Nawaz",
      position: "Asst.Lead Coordinator",
      imgSrc:
        "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
    },
  ],
  theme: "dark",
  feedback: [
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
    {
      name: "Soumyadeep Kundu",
      feedback:
        "I've found the classes offered by this society to be outstanding, surpassing those of any other society I've encountered.",
    },
    {
      name: "Naser Ahmed",
      feedback:
        "Of all the societies I've taken classes with, this one offers the most impressive and valuable learning experiences.",
    },
    {
      name: "Mohammad Danyaal",
      feedback:
        "The classes provided by this society are undoubtedly the best I've experienced across all the societies I've engaged with.",
    },
    {
      name: "Md Waliullah",
      feedback:
        "Without a doubt, the classes offered by this society are superior, I've encountered within the social organizations I've participated in.",
    },
    
  ],
  sliders: [
    {
      eventName: "",
      images: [
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620500/WhatsApp_Image_2025-01-12_at_00.01.53_f7526a2a_ktjrix.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620500/WhatsApp_Image_2025-01-12_at_00.01.53_f7526a2a_ktjrix.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620500/WhatsApp_Image_2025-01-12_at_00.01.53_f7526a2a_ktjrix.jpg",
        },

        
      ],
    },
    {
      eventName: "",
      images: [
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620490/WhatsApp_Image_2025-01-12_at_00.01.53_0241bbd5_cbsf2l.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620490/WhatsApp_Image_2025-01-12_at_00.01.53_0241bbd5_cbsf2l.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620490/WhatsApp_Image_2025-01-12_at_00.01.53_0241bbd5_cbsf2l.jpg",
        },

      
      ],
    },
    {
      eventName: "",
      images: [
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
        },

      ],
    },
    {
      eventName: "",
      images: [
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
        },
        
      ],
    },
    {
      eventName: "",
      images: [
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620488/WhatsApp_Image_2025-01-12_at_00.01.55_37c20ea0_zh4irm.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620488/WhatsApp_Image_2025-01-12_at_00.01.55_37c20ea0_zh4irm.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620488/WhatsApp_Image_2025-01-12_at_00.01.55_37c20ea0_zh4irm.jpg",
        },

      
      ],
    },
    {
      eventName: "",
      images: [
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620489/WhatsApp_Image_2025-01-12_at_00.01.54_8f4215e5_p5efl6.jpg",
        },

        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620489/WhatsApp_Image_2025-01-12_at_00.01.54_8f4215e5_p5efl6.jpg",
        },
        {
          url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620489/WhatsApp_Image_2025-01-12_at_00.01.54_8f4215e5_p5efl6.jpg",
        },

      ],
    },
  ],
  galleryImages: [
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620489/WhatsApp_Image_2025-01-12_at_00.01.54_8f4215e5_p5efl6.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620488/WhatsApp_Image_2025-01-12_at_00.01.55_37c20ea0_zh4irm.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620490/WhatsApp_Image_2025-01-12_at_00.01.53_0241bbd5_cbsf2l.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620489/WhatsApp_Image_2025-01-12_at_00.01.54_8da03650_pbmaec.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620490/WhatsApp_Image_2025-01-12_at_00.01.53_c48ffe37_nsf9mx.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
      eventName: "",
    },
    {
      url: "https://res.cloudinary.com/dpqdgcipi/image/upload/v1736620487/WhatsApp_Image_2025-01-12_at_00.01.56_4f0953b6_t6pkda.jpg",
      eventName: "",
    },
    // {
    //   url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    //   eventName: "Event 10",
    // },
    // {
    //   url: "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg",
    //   eventName: "Event 11",
    // },
    // {
    //   url: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    //   eventName: "Event 12",
    // },
  ],
  studyMaterials: [
    {
      domain: "WEB DEVELOPMENT",
      img: "/Images/Logo/WebDevelopment.png",
      sec: "webdev",
      resUrls: [
        {
          name: "pdf 1",
          url: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        },
        {
          name: "pdf 2",
          url: "",
        },
        {
          name: "pdf 3",
          url: "",
        },
        {
          name: "pdf 4",
          url: "",
        },
        {
          name: "pdf 5",
          url: "",
        },
        {
          name: "pdf 6",
          url: "",
        },
      ],
    },
    {
      domain: "AI/ML",
      img: "/Images/Logo/AIML.png",
      sec: "aiml",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "JAVA",
      img: "/Images/Logo/Java.png",
      sec: "java",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "UI / UX",
      img: "/Images/Logo/UIUX.png",
      sec: "uiux",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
   
    {
      domain: "IoT & EMBEDDED",
      img: "/Images/Logo/IoT&Embedded.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "ANDROID DEVELOPMENT",
      img: "/Images/Logo/AppDevelopment.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "GRAPHIC DESIGNING",
      img: "/Images/Logo/GD.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },


    {
      domain: "PHOTOGRAPGY & VIDEO-EDITING",
      img: "/Images/Logo/PhotoVideoEditing.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "GAME DEVELOPMENT",
      img: "/Images/Logo/GD.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "CONTENT WRITING",
      img: "/Images/Logo/ContentWriting.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "MARKETING & PR",
      img: "/Images/Logo/Marketing.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "CLOUD COMPUTING (NEW)",
      img: "/Images/Logo/CloudComputing.png",
      sec: "cloud",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "CYBER SECURITY (NEW)",
      img: "/Images/Logo/CyberSecurity.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "DATA ANALYTICS (NEW)",
      img: "/Images/Logo/DataAnalytics.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "COMING SOON...",
      img: "/Images/Logo/comingsoon.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    
  ],
};

const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addEvent: (state, action) => {},
    editEvent: (state, action) => {},
    addMember: (state, action) => {},
    editMember: (state, action) => {},
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { addEvent, editEvent, addMember, editMember } = slice.actions;
export default slice.reducer;
