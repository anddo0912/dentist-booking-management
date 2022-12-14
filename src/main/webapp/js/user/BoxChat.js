var $messages = $(".messages-content"),
        d,
        h,
        m,
        i = 0;

let msg;
let startChat;

$(".already-login").click(function () {
    $messages.mCustomScrollbar();
    setTimeout(function () {
        welcomeMessage();
    }, 100);
    $(".before-chat").addClass("chat");
    $(".chat").removeClass("before-chat");
    $(".discription").addClass("d-none");
    $(".sub-discription").addClass("d-none");
    $(".online").removeClass("d-none");
    $(".offline").addClass("d-none");
    $(".messages-content").removeClass("content-before");
    $(".avatar").removeClass("bot-avatar");
    $(".bot-name").removeClass("d-none");
    $(".already-login").addClass("d-none");
    $(".text-box").removeClass("d-none");
});

$(".icon-minus").click(function () {
    if ($(".chat-box__click").is(":checked")) {
        $(".chat-box__click").prop("checked", false);
    }
});

$(".icon-exit").click(function () {
    if ($("#chat").hasClass("chat") == false) {
        if ($(".chat-box__click").is(":checked")) {
            $(".chat-box__click").prop("checked", false);
        }
    } else {
        setTimeout(() => {
            if ($(".chat-box__click").is(":checked")) {
                $(".chat-box__click").prop("checked", false);
            }
        }, 1000);
    }
    $(".chat").addClass("before-chat");
    $(".before-chat").removeClass("chat");
    $(".discription").removeClass("d-none");
    $(".sub-discription").removeClass("d-none");
    $(".online").addClass("d-none");
    $(".offline").addClass("d-none");
    $(".messages-content").addClass("content-before");
    $(".avatar").addClass("bot-avatar");
    $(".bot-name").addClass("d-none");
    $(".text-box").addClass("d-none");
    $(".new").remove();
    $(".already-login").removeClass("d-none");
    $(".message-input").attr("disabled", "true");
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 10,
        timeout: 0,
    });
}

function setDate() {
    d = new Date();
    if (d.getHours() < 10) {
        if (d.getMinutes() < 10) {
            $(
                    '<div class="timestamp">' +
                    "0" +
                    d.getHours() +
                    ":" +
                    "0" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        } else {
            $(
                    '<div class="timestamp">' +
                    "0" +
                    d.getHours() +
                    ":" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        }
    } else {
        if (d.getMinutes() < 10) {
            $(
                    '<div class="timestamp">' +
                    d.getHours() +
                    ":" +
                    "0" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        } else {
            $(
                    '<div class="timestamp">' +
                    d.getHours() +
                    ":" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        }
    }
}

function personalDate() {
    d = new Date();
    if (d.getHours() < 10) {
        if (d.getMinutes() < 10) {
            $(
                    '<div class="timestamp-personal-message">' +
                    "0" +
                    d.getHours() +
                    ":" +
                    "0" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        } else {
            $(
                    '<div class="timestamp-personal-message">' +
                    "0" +
                    d.getHours() +
                    ":" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        }
    } else {
        if (d.getMinutes() < 10) {
            $(
                    '<div class="timestamp-personal-message">' +
                    d.getHours() +
                    ":" +
                    "0" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        } else {
            $(
                    '<div class="timestamp-personal-message">' +
                    d.getHours() +
                    ":" +
                    d.getMinutes() +
                    "</div>"
                    ).appendTo($(".message:last"));
        }
    }
}

function insertMessage() {
    msg = $(".message-input").val();
    if ($.trim(msg) == "") {
        return false;
    }
    $('<div class="message message-personal">' + msg + "</div>")
            .appendTo($(".mCSB_container"))
            .addClass("new");
    personalDate();
    $(".message-input").val(null);
    updateScrollbar();
    setTimeout(function () {
        fakeMessage();
    }, 300 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
    insertMessage();
});

$(window).on("keydown", function (e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
});

var botAnswer = [
    {
        input: ["t?? v???n"],
        output: [
            "T??i s??? ????? xu???t cho b???n m???t s??? t?? v???n sau b???n c?? th??? tham kh???o n???u b???n mu???n",
            "T?? v???n vi???n ph??",
            "T?? v???n b??c s?? kh??m",
            "T?? v???n v??? d???ch v??? kh??m",
        ],
    },
    {
        input: ["t?? v???n vi???n ph??"],
        output: ["T?? v???n vi???n ph??", "Ti???p t???c t?? v???n", "D???ng t?? v???n"],
    },
    {
        input: ["t?? v???n b??c s?? kh??m"],
        output: ["T?? v???n b??c s?? kh??m", "Ti???p t???c t?? v???n", "D???ng t?? v???n"],
    },
    {
        input: ["t?? v???n v??? d???ch v??? kh??m"],
        output: ["T?? v???n v??? d???ch v??? kh??m", "Ti???p t???c t?? v???n", "D???ng t?? v???n"],
    },
    {
        input: ["li??n h???"],
        output: [
            "B???n mu???n g???i hotline hay chat tr???c ti???p v???i nh??n vi??n",
            "G???i Hotline",
            "Chat tr???c ti???p",
        ],
    },
    {
        input: ["hotline"],
        output: [
            "????y l?? s??? hotline c???a trung t??m 19001070",
            "Ti???p t???c t?? v???n",
            "D???ng t?? v???n",
        ],
    },
    {
        input: ["chat tr???c ti???p"],
        output: [
            "T??i ??ang k???t n???i ?????n nh??n vi??n. Nh??n vi??n s??? k???t n???i trong v??i ph??t",
        ],
    },
    {
        input: ["dung-tu-van"],
        output: ["D???ng t?? v???n"],
    },
    {
        input: ["tiep-tuc-tu-van"],
        output: ["Ti???p t???c t?? v???n"],
    },
];

function welcomeMessage() {
    if ($(".message-input").val() != "") {
        return false;
    }
    $(
            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
            ).appendTo($(".mCSB_container"));
    let deleteOne = document.querySelectorAll(".loading");
    if (deleteOne.length > 1) {
        deleteOne[1].remove();
    }
    updateScrollbar();
    setTimeout(function () {
        $(".message.loading").remove();
        $(
                '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>Ch??o b???n! B???n c???n g?? n??o?</div>'
                )
                .appendTo($(".mCSB_container"))
                .addClass("new");

        setTimeout(function () {
            $(
                    `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('t?? v???n')">T?? V???n Nhanh</button>`
                    )
                    .appendTo($(".mCSB_container"))
                    .addClass("new");
        }, 500);
        setTimeout(function () {
            $(
                    `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('li??n h???')">Li??n h??? t?? v???n tr???c ti???p</button>`
                    )
                    .appendTo($(".mCSB_container"))
                    .addClass("new");
        }, 1000);
        let deleteOne = document.querySelectorAll(".new");
        if (deleteOne.length > 1) {
            deleteOne[1].remove();
        }
        setDate();
        updateScrollbar();
        i++;
    }, 300 + Math.random() * 20 * 100);
}

function newMessage(className) {
    if ($(".message-input").val() != "") {
        return false;
    }
    $(".message-button").remove();
    botAnswer.forEach((message) => {
        message.input.forEach((input) => {
            if (className === input) {
                if (input === "t?? v???n") {
                    $(
                            '<div class="message message-personal">' +
                            input.toUpperCase() +
                            "</div>"
                            )
                            .appendTo($(".mCSB_container"))
                            .addClass("new");
                    personalDate();
                    updateScrollbar();
                    $(
                            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
                            ).appendTo($(".mCSB_container"));
                    updateScrollbar();
                    setTimeout(function () {
                        $(".message.loading").remove();
                        let count = 0;
                        message.output.forEach((output, i) => {
                            if (i == 0) {
                                setTimeout(function () {
                                    $(
                                            '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>' +
                                            output +
                                            "</div>"
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                    setDate();
                                }, 100 + count);
                            } else {
                                if (i == 1) {
                                    let className = "t?? v???n vi???n ph??";
                                    setTimeout(function () {
                                        $(
                                                `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                                )
                                                .appendTo($(".mCSB_container"))
                                                .addClass("new");
                                    }, 100 + count);
                                } else if (i == 2) {
                                    let className = "t?? v???n b??c s?? kh??m";
                                    setTimeout(function () {
                                        $(
                                                `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                                )
                                                .appendTo($(".mCSB_container"))
                                                .addClass("new");
                                    }, 100 + count);
                                } else if (i == 3) {
                                    let className = "t?? v???n v??? d???ch v??? kh??m";
                                    setTimeout(function () {
                                        $(
                                                `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                                )
                                                .appendTo($(".mCSB_container"))
                                                .addClass("new");
                                    }, 100 + count);
                                }
                            }
                            count += 700;
                            updateScrollbar();
                        });
                    }, 300 + Math.random() * 20 * 100);
                } else if (input === "li??n h???") {
                    $(
                            '<div class="message message-personal">' +
                            input.toUpperCase() +
                            "</div>"
                            )
                            .appendTo($(".mCSB_container"))
                            .addClass("new");
                    personalDate();
                    updateScrollbar();
                    $(
                            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
                            ).appendTo($(".mCSB_container"));
                    updateScrollbar();
                    setTimeout(function () {
                        $(".message.loading").remove();
                        let count = 0;
                        message.output.forEach((output, i) => {
                            if (i == 0) {
                                setTimeout(function () {
                                    $(
                                            '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>' +
                                            output +
                                            "</div>"
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                    setDate();
                                }, 100 + count);
                            } else {
                                if (i == 2) {
                                    let className = "chat tr???c ti???p";
                                    setTimeout(function () {
                                        $(
                                                `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                                )
                                                .appendTo($(".mCSB_container"))
                                                .addClass("new");
                                    }, 100 + count);
                                } else if (i == 1) {
                                    let className = "hotline";
                                    setTimeout(function () {
                                        $(
                                                `<button type="submit" class="btn message-button button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                                )
                                                .appendTo($(".mCSB_container"))
                                                .addClass("new");
                                    }, 100 + count);
                                }
                            }
                            count += 700;
                            updateScrollbar();
                        });
                    }, 300 + Math.random() * 20 * 100);
                } else if (input === "hotline") {
                    let count = 300;
                    $(
                            '<div class="message message-personal">' +
                            input.toUpperCase() +
                            "</div>"
                            )
                            .appendTo($(".mCSB_container"))
                            .addClass("new");
                    personalDate();
                    updateScrollbar();
                    $(
                            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
                            ).appendTo($(".mCSB_container"));
                    updateScrollbar();
                    setTimeout(function () {
                        $(".message.loading").remove();
                        message.output.forEach((output, i) => {
                            if (i == 0) {
                                setTimeout(function () {
                                    $(
                                            '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>' +
                                            output +
                                            "</div>"
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                    setDate();
                                }, 100 + count);
                            } else if (i == 2) {
                                let className = "dung-tu-van";
                                setTimeout(function () {
                                    $(
                                            `<button type="submit" class="btn message-button ${className} button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                }, 100 + count);
                            } else if (i == 1) {
                                let className = "tiep-tuc-tu-van";
                                setTimeout(function () {
                                    $(
                                            `<button type="submit" class="btn message-button ${className} button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                }, 100 + count);
                            }
                            count += 700;
                            updateScrollbar();
                        });
                    }, 300 + Math.random() * 20 * 100);
                } else if (input === "chat tr???c ti???p") {
                    $(".message-input").removeAttr("disabled");
                    $(
                            '<div class="message message-personal">' +
                            input.toUpperCase() +
                            "</div>"
                            )
                            .appendTo($(".mCSB_container"))
                            .addClass("new");
                    personalDate();
                    updateScrollbar();
                    $(
                            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
                            ).appendTo($(".mCSB_container"));
                    setTimeout(function () {
                        $(".message.loading").remove();
                        $(
                                '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>' +
                                message.output +
                                "</div>"
                                )
                                .appendTo($(".mCSB_container"))
                                .addClass("new");
                        setDate();
                        updateScrollbar();
                    }, 300 + Math.random() * 20 * 100);
                } else if (input === "dung-tu-van") {
                    $(".chat").addClass("before-chat");
                    $(".before-chat").removeClass("chat");
                    $(".discription").removeClass("d-none");
                    $(".sub-discription").removeClass("d-none");
                    $(".online").addClass("d-none");
                    $(".offline").addClass("d-none");
                    $(".messages-content").addClass("content-before");
                    $(".avatar").addClass("bot-avatar");
                    $(".bot-name").addClass("d-none");
                    $(".text-box").addClass("d-none");
                    $(".new").remove();
                    $(".already-login").removeClass("d-none");
                    $(".message-input").attr("disabled", "true");
                    return;
                } else if (input === "tiep-tuc-tu-van") {
                    $(".new").remove();
                    setTimeout(function () {
                        return welcomeMessage();
                    }, 100);
                } else if (input === className) {
                    $(
                            '<div class="message message-personal">' +
                            input.toUpperCase() +
                            "</div>"
                            )
                            .appendTo($(".mCSB_container"))
                            .addClass("new");
                    personalDate();
                    updateScrollbar();
                    $(
                            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
                            ).appendTo($(".mCSB_container"));
                    setTimeout(function () {
                        $(".message.loading").remove();
                        let count = 0;
                        message.output.forEach((output, i) => {
                            if (i == 0) {
                                setTimeout(function () {
                                    $(
                                            '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>' +
                                            output +
                                            "</div>"
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                    setDate();
                                }, 100 + count);
                            } else if (i == 2) {
                                let className = "dung-tu-van";
                                setTimeout(function () {
                                    $(
                                            `<button type="submit" class="btn message-button ${className} button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                }, 100 + count);
                            } else if (i == 1) {
                                let className = "tiep-tuc-tu-van";
                                setTimeout(function () {
                                    $(
                                            `<button type="submit" class="btn message-button ${className} button btnFloat btnBlueGreen new" onclick="newMessage('${className}')">${output}</button>`
                                            )
                                            .appendTo($(".mCSB_container"))
                                            .addClass("new");
                                }, 100 + count);
                            }
                            count += 700;
                            updateScrollbar();
                        });
                    }, 300 + Math.random() * 20 * 100);
                } else {
                    $(
                            '<div class="message message-personal">' +
                            input.toUpperCase() +
                            "</div>"
                            )
                            .appendTo($(".mCSB_container"))
                            .addClass("new");
                    personalDate();
                    updateScrollbar();
                    $(
                            '<div class="message loading new"><figure class="avatar"><img src="./images/bot.webp" /></figure><span></span></div>'
                            ).appendTo($(".mCSB_container"));
                    setTimeout(function () {
                        $(".message.loading").remove();
                        $(
                                '<div class="message new"><figure class="avatar"><img src="./images/bot.webp" /></figure>' +
                                message.output +
                                "</div>"
                                )
                                .appendTo($(".mCSB_container"))
                                .addClass("new");
                        setDate();
                        updateScrollbar();
                    }, 300 + Math.random() * 20 * 100);
                }
            }
        });
    });
}