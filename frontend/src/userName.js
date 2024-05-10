const userName = (params) => {
    const word = params.split(" ");

    let result = "";
    if (word[0]) {
        result = word[0].charAt(0).toUpperCase();
    } else if (word[0] && word[1]) {
        result =
            word[0].charAt(0).toUpperCase() + word[1].charAt(0).toUpperCase();
    }

    return result;
};

export default userName;
