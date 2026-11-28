export const filmes = [
{
    id: 1,
    titulo: "Alem da janela",
    genero: "drama",
    ano: 2020,
    duracaominutos: 90,
},
{
    id: 2,
    titulo: "rota lunar",
    genero:"ficcao",
    ano:2022,
    duracaominutos: 120,
},
{
    id: 3,
    titulo:"ultimo trem",
    genero: "suspense",
    ano: 2019,
    duracaominutos: 150,
},
{
    id: 4,
    titulo: "pequenos encontros",
    genero:"drama",
    ano: 2024,
    duracaominutos: 90,
}
]

export function buscarfilme(lista, id) {
    return lista.find((f) => f.id === id);
}

export function buscarnome(lista, titulo){
    return lista.find((f) => f.titulo === titulo)
}




