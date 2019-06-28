let state = {
    slides: [{
            ID: 1,
            shareLink: "#",
            like: false,
            image: "http://i.picasion.com/images/example.jpg",
            text: "Сначала поговорим о температуре"
        },
        {
            ID: 2,
            shareLink: "#",
            like: false,
            image: "http://www.artisi.ru/painting/slides/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F%20II-812,%20100x100,%20%D1%85%D0%BE%D0%BB%D1%81%D1%82,%20%D1%81%D0%BC.%D1%82,%202008.jpg",
            text: "Потом о давлении"
        },
        {
            ID: 3,
            shareLink: "#",
            like: false,
            image: "http://www.artisi.ru/painting/slides/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F%200221,%20100x100,%20%D1%85%D0%BE%D0%BB%D1%81%D1%82,%20%D0%BC%D0%B0%D1%81%D0%BB%D0%BE,2002.jpg",
            text: "Немного о направлении ветра в разрезе деформации"
        },
        {
            ID: 4,
            shareLink: "#",
            like: false,
            image: "http://i.picasion.com/images/example.jpg",
            text: "И снова о температуре"
        },
        {
            ID: 5,
            shareLink: "#",
            like: false,
            image: "http://i.picasion.com/images/example.jpg",
            text: "И еще разочек"
        },
    ],
    showSlidesList: false,
    presentationTitle: "Песня про мороз"
}
let getters = {
    getSlidesListAppearance(state) {
        return state.showSlidesList
    },
    getPresentationTitle(state) {
        return state.presentationTitle
    },
    getSlides(state) {
        return state.slides
    },
}
let mutations = {
    changeSlidesListAppearance(state, listAppearance) {
        state.showSlidesList = listAppearance
    },
    changeSlideLike(state, payload) {
        for (let i = 0; i < state.slides.length; i++) {
            if (state.slides[i].ID == payload.slideID) {
                state.slides[i].like = payload.like
            }
        }
    },
}
let actions = {
    changeSlidesListAppearance(context, listAppearance) {
        context.commit('changeSlidesListAppearance', listAppearance);
    },
    changeSlideLike(context, payload) {
        context.commit('changeSlideLike', payload);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}