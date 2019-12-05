function sumUsers(user1, user2) {
    return user1 + " " + user2;
}

module.exports.getUsers = async (req, res) => {

    const user1 = 'Tim';
    const user2 = 'Tam';

    const message = getUsers(user1, user2);
    return res.status(200).send(message)
};