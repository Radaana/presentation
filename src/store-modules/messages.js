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
            isCommentToID: null,
        },
        {
            ID: 2,
            text: 'Однажды в студеную зимнюю пору?',
            like: false,
            presentationID: 1,
            authorName: "Самый Главный",
            isSpeaker: true,
            isQuestion: false,
            isCommentToID: null,
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
            isCommentToID: 2,
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
            isCommentToID: 2,
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
            isCommentToID: 2,
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
            isCommentToID: 1,
        },
        {
            ID: 7,
            text: 'Всем пока и спасибо за рыбу',
            like: false,
            presentationID: 1,
            authorName: "Самый Главный",
            isSpeaker: true,
            isQuestion: false,
            isCommentToID: null,
        },
    ],
    speaker: {
        name: "Самый Главный",
        pic: "https://kulturologia.ru/img/avatar/avatar375901.jpg"
    }
}
let getters = {
    getSpeakerMessages() {
        return state.messages.filter(msg => msg.isSpeaker)
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
    getCommentsToSpeakerMSG(state) {
        return ID => {
            let msgs = state.messages
                .filter(msg => { return msg.isCommentToID === ID })
                .sort((a, b) => b.likeNumber - a.likeNumber);
            return msgs;
        }
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
}
let actions = {
    changeMessageLike(context, payload) {
        context.commit('changeMessageLike', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}