/* eslint-disable no-console */

export default {
    namespaced: true,
    state:{
      genreList: [
        {
          name: "居酒屋"
          , code: "G001"
        },
        {
          name: "ダイニングバー・バル"
          , code: "G002"
        },
        {
          name: "創作料理"
          , code: "G003"
        },
        {
          name: "和食"
          , code: "G004"
        },
        {
          name: "洋食"
          , code: "G005"
        },
        {
          name: "イタリアン・フレンチ"
          , code: "G006"
        },
        {
          name: "中華"
          , code: "G007"
        },
        {
          name: "焼肉・ホルモン"
          , code: "G008"
        },
        {
          name: "韓国料理"
          , code: "G017"
        },
        {
          name: "アジア・エスニック料理"
          , code: "G009"
        },
        {
          name: "各国料理"
          , code: "G010"
        },
        {
          name: "カラオケ・パーティ"
          , code: "G011"
        },
        {
          name: "バー・カクテル"
          , code: "G012"
        },
        {
          name: "お好み焼き・もんじゃ"
          , code: "G016"
        }
      ],
    },
    getters:{
      genreList: state => {
        return state.genreList;
      },
    },
    actions:{
    },
    mutations:{
    }
  };
  