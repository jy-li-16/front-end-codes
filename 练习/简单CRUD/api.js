
const api = {
    userList() {
        return axios.get("http://127.0.0.1:8090/user/list")
    },
    userModify(data) {
        return axios.post("http://127.0.0.1:8090/user/mod", data)
    },
    userAdd(data) {
        return axios.post("http://127.0.0.1:8090/user/save", data)
    },
    userDelete(id) {
        return axios.get("http://127.0.0.1:8090/user/delete?id=" + id)
    }
}

