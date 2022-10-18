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

function Search(content) {
    if (!content || content == ' ' || content == null) return Toast.fire({
        icon: 'warning',
        title: 'Insira o email ou @usuario de quem deseja encontrar',
        position: 'bottom-start',
        width: '28%'
    })

    // usersData.forEach((e) => {
    //     // Verificação com o banco de dados
    //     if (!(content == e.email || '@' + content == e.username || content == e.username)) return Toast.fire({
    //         icon: 'error',
    //         title: `O usuario ${content} não foi encontrado`,
    //         position: 'bottom-start',
    //         width: '28%'
    //     })
    // })

    Router.push({
        pathname: '/search',
        query: { q: `${content}` },
    })

    return (
        {}
    )
}

export { Search }