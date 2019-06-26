let state = {
    messages: [{
            ID: 1,
            text: 'Кто видел кита?',
            like: false,
            likeNumber: 0,
            presentationID: 1,
            authorName: "Самый Главный",
            isSpeaker: true,
            isQuestion: false,
        },
        {
            ID: 2,
            text: 'Однажды в студеную зимнюю пору?',
            like: false,
            presentationID: 1,
            authorName: "Самый Главный",
            isSpeaker: true,
            isQuestion: false,
        },
        {
            ID: 3,
            text: 'Да, я себе все отморозил',
            like: false,
            likeNumber: 0,
            presentationID: 1,
            authorName: "Сусанин",
            isSpeaker: false,
            isQuestion: false,
        },
        {
            ID: 4,
            text: 'А где это было?',
            like: false,
            likeNumber: 3,
            presentationID: 1,
            authorName: "Незнайка",
            isSpeaker: false,
            isQuestion: true,
        },
        {
            ID: 5,
            text: 'Ой, а я на другом митапе был, там тоже эту тему поднимали. И даже кондиционер включали для пущего погружения',
            like: false,
            likeNumber: 44,
            presentationID: 1,
            authorName: "Всезнайка",
            isSpeaker: false,
            isQuestion: false,
        },
        {
            ID: 6,
            text: 'Видал я, ничего уж себе интересного',
            like: false,
            likeNumber: 9,
            presentationID: 1,
            authorName: "Всезнайка",
            isSpeaker: false,
            isQuestion: false,
        },
        {
            ID: 7,
            text: 'Всем пока и спасибо за рыбу',
            like: false,
            presentationID: 1,
            authorName: "Самый Главный",
            isSpeaker: true,
            isQuestion: false,
        },
        {
            ID: 8,
            text: 'А я крестиком вышивать умею',
            like: false,
            likeNumber: 1,
            presentationID: 1,
            authorName: "Кот Матроскин",
            isSpeaker: false,
            isQuestion: false,
        },
        {
            ID: 9,
            text: 'И я умею крестиком',
            like: false,
            likeNumber: null,
            presentationID: 1,
            authorName: "Повторятор",
            isSpeaker: false,
            isQuestion: false,
        },
        {
            ID: 10,
            text: 'А я замерз',
            like: false,
            likeNumber: null,
            presentationID: 1,
            authorName: "Томат",
            isSpeaker: false,
            isQuestion: false,
        },
    ],
    speaker: {
        name: "Самый Главный",
        pic: "https://kulturologia.ru/img/avatar/avatar375901.jpg"
    },
    guest: {
        name: "Это я"
    }
}
let getters = {
    getAllMessages() {
        return state.messages
    },
    getGuestQuestions() {
        return state.messages.filter(msg => msg.isQuestion && !msg.isSpeaker)
    },
    getGuestComments() {
        return state.messages.filter(msg => !msg.isQuestion && !msg.isSpeaker)
    },
    getSpeaker() {
        return state.speaker
    },
    getGuest() {
        return state.guest
    }
}
let mutations = {
    changeMessageLike(state, payload) {
        for (let i = 0; i < state.messages.length; i++) {
            if (state.messages[i].ID == payload.messageID) {
                state.messages[i].like = payload.like
            }
        }
    },
    addGuestMessage(state, payload) {
        let newMessage = {
            ID: Math.random().toString(36).substr(2, 9),
            text: payload.text,
            like: false,
            likeNumber: null,
            presentationID: 1,
            authorName: state.guest.name,
            isSpeaker: false,
            isQuestion: payload.isQuestion
        };
        state.messages.push(newMessage);

    },
}
let actions = {
    changeMessageLike(context, payload) {
        context.commit('changeMessageLike', payload)
    },
    addGuestMessage(context, payload) {
        context.commit('addGuestMessage', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}