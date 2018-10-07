// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, passwd) values (0, ?, ?)'
    }
}

module.exports = sqlMap;