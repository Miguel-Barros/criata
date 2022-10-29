import Swal from "sweetalert2"
import Database from "./Database"
import Router from 'next/router'

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})

let usersData = []

Database.getData().then((e) => {
    return usersData = e
})

async function Search(content) {
    if (!content || content == ' ' || content == null) return Toast.fire({
        icon: 'warning',
        title: 'Insira o email ou usuario de quem deseja encontrar',
        position: 'bottom-start',
        width: '28%'
    })

    await Router.push({
        pathname: '/search',
        query: { q: `${content}` }
    })

    window.location.reload()
}

export { Search }