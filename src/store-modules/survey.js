let state = {
    surveys: [{
            ID: 1,
            presentationID: 1,
            question: 'Давайте выясним кого в зале больше?',
            answers: [
                'Мужчина',
                'Женщина'
            ],
            like: false,
            active: true,
            userAnswer: '',
            shareLink: "#",
        },
        {
            ID: 2,
            presentationID: 1,
            question: 'Вы живете в Москве или ближайшем Подмосковье?',
            answers: [
                'Да',
                'Нет'
            ],
            like: false,
            active: false,
            userAnswer: '',
            shareLink: "#",
        },
    ]
}
let getters = {
    getActiveSurvey(state) {
        return state.surveys.filter(item => item.active)[0]
    }
}
let mutations = {
    changeLike(state, like) {
        for (let i = 0; i < state.surveys.length; i++) {
            if (state.surveys[i].active) {
                state.surveys[i].like = like
            }
        }
    },
    changeAnswer(state, answer) {
        for (let i = 0; i < state.surveys.length; i++) {
            if (state.surveys[i].active) {
                state.surveys[i].userAnswer = answer
                console.log(state.surveys[i])
            }
        }
    },
}
let actions = {
    changeLike(context, like) {
        context.commit('changeLike', like)
    },
    changeAnswer(context, answer) {
        context.commit('changeAnswer', answer)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}